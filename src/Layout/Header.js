import React from "react";
import ImageCarousel from "./ImageCarousel";
import { Container, Row, Col, Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h2>Joseph Brown </h2>
        </Col>
      </Row>
      <Dropdown.Divider />
      <ImageCarousel />
      <br />
    </Container>
  );
};

export default Header;
