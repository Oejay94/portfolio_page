import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Education from "../Components/Resume/Education";
import { ProgLang, TechStack } from "../Components/Resume/Skills";
import WorkHistoryCard from "../Layout/WorkHistoryCard";

const ResumePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Education />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <WorkHistoryCard />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <ProgLang />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <TechStack />
        </Col>
      </Row>
    </Container>
  );
};

export default ResumePage;
