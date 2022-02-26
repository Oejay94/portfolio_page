import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { CurrentJob, PreviousJob } from "../Components/Resume/WorkHistory";

const WorkHistoryCard = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header as="h3">Work History</Card.Header>
        <Row xs={1} md={2}>
          <Col>
            <CurrentJob />
          </Col>
          <Col>
            <PreviousJob />
          </Col>
        </Row>
      </Card>
      <br />
    </Container>
  );
};

export default WorkHistoryCard