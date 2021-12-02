import React from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {createShortUrl} from "../../Services/ShortUrl";

const TopUrlsForm = ({setUrl, setReloadTable}) => {
  const validationSchema = Yup.object().shape({
    full_url: Yup.string().required('Full URL is required'),
  });
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const resetForm = (url) => {
    setUrl(url);
    setReloadTable(true);
    setValue('full_url', '');
  };

  const setErrors = (errs) => {
    errs["full_url"].forEach(err => {
      setError(`full_url`, {
        type: 'manual',
        message: err,
        shouldFocus: false,
      });
    })
  };

  const onSubmit = async (data) => {
    try {
      const {url, errors} = await createShortUrl(data);
      if (errors) {
        setErrors(errors);
        return;
      }
     resetForm(url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container>
        <h2>Create Short URL</h2>
        <Row className="mt-5">
          <Col md={12}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Full URL</label>
                <input
                  name="full_url"
                  type="text"
                  placeholder="https://example.com"
                  {...register('full_url')}
                  className={`form-control ${errors.full_url ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.full_url?.message}</div>
              </div>
              <br/>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Save
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TopUrlsForm;
