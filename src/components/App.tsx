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
import StroopData from "./StroopData";
const App = () => {
  const initialSearchParam = new URLSearchParams(window.location.search);
  const initialPath = initialSearchParam.get("path") || "/";

  return (
    <MemoryRouter initialEntries={["/", initialPath]}>
      <Routes>
        <Route path="/sudotype" element={<SudoType />} />
        <Route path="/SudoType-data" element={<SudoTypeData />} />
        <Route path="/uso" element={<Uso />} />
        <Route path="/Uso-data" element={<UsoData />} />{" "}
        <Route path="/Stroop-data" element={<StroopData />} />
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
