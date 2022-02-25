import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { CSharpApp, PythonApp, ReactApp } from "../Components/Home/Projects";

const ProjectsCard = () => {
  return (
    <Container fluid>
      <Card.Header as='h3'>Projects</Card.Header>
      <Row xs={1} md={3}>
        <Col>
          <ReactApp />
        </Col>
        <Col>
          <PythonApp />
        </Col>
        <Col>
          <CSharpApp />
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectsCard