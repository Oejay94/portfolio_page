import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import {
  DiJavascript,
  DiPython,
  DiJava,
  DiReact,
  DiBootstrap,
  DiGitBranch,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiRedux,
  SiDjango,
  SiPostgresql,
  SiFirebase,
  SiSemanticuireact,
  SiHeroku,
  SiDocker,
  SiSlack,
} from "react-icons/si";
import { AiFillApi, AiFillVideoCamera } from "react-icons/ai";

const ProgLang = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header as="h3">Programming Languages</Card.Header>
        <Row xs sm md lg xl>
          <Col xs sm md lg xl>
            <h3>
              HTML5 <ImHtmlFive />
            </h3>
            <br />
            <h3>
              CSS3 <ImCss3 />
            </h3>
            <br />
            <h3>
              Javascript <DiJavascript />
            </h3>
            <br />
            <h3>
              Python <DiPython />
            </h3>
            <br />
            <h3>
              Java <DiJava />
            </h3>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

const TechStack = () => {
  return (
    <Container fluid>
      <Card>
        <Card.Header as="h3">Technologies</Card.Header>
        <Row xs sm md lg xl>
          <Col xs sm md lg xl>
            <h3>
              React.js <DiReact />
            </h3>
            <br />
            <h3>
              Redux <SiRedux />
            </h3>
            <br />
            <h3>
              Django <SiDjango />
            </h3>
            <br />
            <h3>
              {" "}
              PostgreSQL <SiPostgresql />
            </h3>
            <br />
            <h3>
              Google Firebase <SiFirebase />
            </h3>
            <br />
            <h3>
              Bootstrap <DiBootstrap />
            </h3>
            <br />
            <h3>
              Semantic UI <SiSemanticuireact />
            </h3>
            <br />
          </Col>
          <Col xs sm md lg xl>
            <h3>
              API <AiFillApi />
            </h3>
            <br />
            <h3>
              Heroku <SiHeroku />
            </h3>
            <br />
            <h3>
              Docker <SiDocker />
            </h3>
            <br />
            <h3>
              Git <DiGitBranch />
            </h3>
            <br />
            <h3>
              Github <DiGithubBadge />
            </h3>
            <br />
            <h3>
              Slack <SiSlack />
            </h3>
            <br />
            <h3>
              Zoom <AiFillVideoCamera />
            </h3>
          </Col>
        </Row>
      </Card>
      <br />
    </Container>
  );
};

export { ProgLang, TechStack };
