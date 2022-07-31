/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "bootstrap";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../assets/scss/Menu.css";
import AppNavBar from "./NavBar";

import { useNavigate } from "react-router-dom";

const Menu: React.FC<any> = (props) => {
  const navigate = useNavigate();
  const startClick = (name) => {
    switch (name) {
      case "uso":
        break;
      case "sudo":
        navigate("/sudotype");
        break;
      case "strroop":
        break;
    }
  };

  // const arr = props.text.split("/");

  return (
    <>
      <AppNavBar />
      <div className="container-menu">
        <div className="row align-items-center">
          <div className="col" id="left">
            <h1>{props.title}</h1>
            <button className="btn" onClick={() => startClick(props.name)}>
              Play game :3
            </button>
          </div>
          <div className="col" id="right">
            <h3>About this test</h3>
            <p>
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
