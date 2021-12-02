import React from 'react';
import {Col, Container, Row, Spinner} from "react-bootstrap";

const LoadingComponent = ({message}) => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading {message}...
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoadingComponent;
