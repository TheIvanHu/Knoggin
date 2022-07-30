import * as React from "react";
import "./../assets/scss/Home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Home = () => (
  <div>
    <Container>
      <Row>
        <Col xs={6} className="one">
          title thing
        </Col>
        <Col xs={2} className="two">
          uso
        </Col>
        <Col xs={2} className="three">
          psudo-type
        </Col>
        <Col xs={2} className="four">
          strroop
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
