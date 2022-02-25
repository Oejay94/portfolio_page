import React from "react";
import { Container, Row, Col} from "react-bootstrap";

import IntroCard from "../Components/Home/Intro";
import ProjectsCard from "../Layout/ProjectsCard";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <IntroCard />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <ProjectsCard />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;