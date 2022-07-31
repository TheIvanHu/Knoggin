import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../assets/scss/Menu.css";
import styled from "styled-components";
import AppNavBar from "./NavBar";

import { Component } from "react";

// const Container = styled.div`
//   display: flex;
// `;

// const Pane = styled.div`
//   flex: ${(props) => props.weight};
// `;

// const LeftHandComponent = ({ name }) => {
//   return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
// };

// const RightHandComponent = ({ message }) => {
//   return <p style={{ backgroundColor: "red" }}>{message}!</p>;
// };

class Menu extends Component {
  render() {
    return (
      <>
        <AppNavBar />

        <div className="container">
          <div className="row align-items-center">
            <div className="col" id="left">
              <h1>!uso</h1>
              <button className="btn">Play game :3</button>
            </div>
            <div className="col" id="right">
              <h3>About this test</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
