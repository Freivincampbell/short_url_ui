import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TableComponent from "../TableComponent/TableComponent";
import getShortUrls from "../../Services/ShortUrl";
import TopUrlsForm from "./TopUrlsForm";
import PreviewUrl from "./PreviewUrl";

const TopUrls = ({showForm}) => {
  const [shortUrls, setShortUrls] = useState([]);
  const [reloadTable, setReloadTable] = useState(false);
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const getShortUrlsData = async () => {
    try {
      const {urls} = await getShortUrls();
      setShortUrls(urls);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getShortUrlsData();
  }, []);

  useEffect(() => {
    if (reloadTable) {
      setTimeout(() => {
        getShortUrlsData();
        setReloadTable(false);
      }, 2000);
    }
  }, [reloadTable]);

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={9}>
            <h2>Top URLs</h2>
              <TableComponent
                data={shortUrls}
                reloadTable={setReloadTable}
                loading={loading}
              />
          </Col>
          {showForm && (
            <Col md={3}>
              <TopUrlsForm setUrl={setUrl} setReloadTable={setReloadTable} />
              {url && (
                <PreviewUrl url={url} setReloadTable={setReloadTable}/>
              )}
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}

export default TopUrls;
