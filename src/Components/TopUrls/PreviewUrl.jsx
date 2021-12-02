import React, {useState} from 'react';
import {Alert, Col, Container, Row} from "react-bootstrap";

const PreviewUrl = ({url, setReloadTable}) => {
  const [apiUrl] = useState(process.env.REACT_APP_BASE_API_URL);

  const handleClick = () => {
    setReloadTable(true);
  };

  return (
    <>
      <Container>
        <Row className="mt-5">
          <h3>New Short URL</h3>
          <Col md={12}>
            <Alert variant="success">
              The short url was created successfully, you can access to it click in the next code:{' '}
              <Alert.Link
                onClick={handleClick}
                target="_blank"
                href={`${apiUrl}/${url.shorted_code}`}
              >
                {url.shorted_code}
              </Alert.Link>.
              Give it a click if you like.
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PreviewUrl;
