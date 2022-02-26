import React from "react";
import { Card, Container } from "react-bootstrap";

const Education = () => {
  return (
    <Container fluid>
      <Card className="EducationCard">
        <Card.Header as="h3">Education</Card.Header>
        <Card.Body className="EducationBody">
          <Card.Text>
            <h5>Full Stack Web Development Certification</h5>
            <p>Kenzie Academy - Indianapolis, Indiana</p>
            <p>Graduation Date - 04/2020</p>
          </Card.Text>
          <Card.Text>
            <h5>Bachelor of Science in Computer Science (In Progress)</h5>
            <p>Southern New Hampshire University - Manchester, New Hampshire</p>
            <p>Graduation Date - TBD</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Education;
