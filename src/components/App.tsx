import * as React from "react";
import "./../assets/scss/App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { MemoryRouter, Outlet, useLocation } from "react-router";
import Home from "./Home";
import SudoType from "../pages/SudoType";
import Uso from "../pages/Uso";
import SudoTypeData from "./SudotypeData";
import UsoData from "./UsoData";
import Menu from "./Menu";

const stroopText =
  `The Stroop Task is one of the best known psychological experiments named
  after John Ridley Stroop. The Stroop phenomenon demonstrates that it is 
  difficult to name the ink color of a color word if there is a mismatch 
  between ink color and word. /
  In this game, we'll not only ask you the colour of the word that shows 
  up on the screen, but we'll switch it up and also ask you the word (rather than 
  the colour), so keep your eyes sharp!`;

const usoText = 
  `This game aims to train your dexterity and reaction time. As the letters appear on
  the screen, you are to move your mouse to hover over the letter while also typing 
  the letter in, sort of like piano tiles X osu! /
  
  `

const App = () => {
  const initialSearchParam = new URLSearchParams(window.location.search);
  const initialPath = initialSearchParam.get("path") || "/";

  return (
    <MemoryRouter initialEntries={["/", initialPath]}>
      <Routes>
        <Route path="/sudotype" element={<SudoType />} />
        <Route path="/SudoType-data" element={<SudoTypeData />} />
        <Route path="/uso" element={<Uso />} />
        <Route path="/Uso-data" element={<UsoData />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/menu-sudo"
          element={<Menu title="Sudotype" name="sudo" />}
        />
        <Route path="/menu-uso" element={<Menu title="Uso" name="uso" />} />
        <Route
          path="/menu-stroop"
          element={<Menu title="Stroop" name="stroop" />}
        />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
