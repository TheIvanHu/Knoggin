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
import SudoTypeData from "./SudotypeData";
import UsoData from "./UsoData";
import Menu from "./Menu";
import Uso from "../pages/uso/uso";
const App = () => {
  const initialSearchParam = new URLSearchParams(window.location.search);
  const initialPath = initialSearchParam.get("path") || "/";

  return (
    <MemoryRouter initialEntries={["/", initialPath]}>
      <Routes>
        <Route path="/sudotype" element={<SudoType />} />
        <Route path="/SudoType-data" element={<SudoTypeData />} />
        <Route path="/Uso-data" element={<UsoData />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<Menu />} />
        <Route
          path="/menu-sudo"
          element={<Menu title="Sudotype" name="sudo" />}
        />
        <Route path="/menu-uso" element={<Menu title="Uso" name="uso" />} />
        <Route
          path="/menu-strroop"
          element={<Menu title="Strroop" name="strroop" />}
        />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
