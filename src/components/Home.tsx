import * as React from "react";
import "./../assets/scss/Home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import ryu from "./../assets/img/ryu.png";
import kanna from "./../assets/img/kanna.jpg";
import hiQ from "./../assets/img/hiQ.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const goSudo = () => {
    navigate("/menu-sudo");
  };
  return (
    <div>
      <Container className="flex">
        <Row>
          <Col xs={6} className="one">
            <h1 className="header">Knocking on your noggin</h1>
            <h4>Insert how scientific our stuff is</h4>
            <h4 className="randomGame">start random game</h4>
          </Col>
          <Col xs={2} className="two">
            <img src={ryu} className="img-responsive" width="100%" />
            <h5 className="title">uso</h5>
            <h6>insert cool description</h6>
          </Col>
          <Col xs={2} className="three">
            <img
              src={kanna}
              className="img-responsive"
              width="100%"
              onClick={() => goSudo()}
            />
            <h5 className="title">sudo-type</h5>
            <h6>insert cool description</h6>
          </Col>
          <Col xs={2} className="four">
            <img src={hiQ} className="img-responsive" width="100%" />
            <h5 className="title">strroop</h5>
            <h6>insert cool description</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
