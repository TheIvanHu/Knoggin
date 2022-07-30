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
import Menu from "./Menu";
const App = () => {
  const initialSearchParam = new URLSearchParams(window.location.search);
  const initialPath = initialSearchParam.get("path") || "/";

  return (
    <MemoryRouter initialEntries={["/", initialPath]}>
      <Routes>
        <Route path="/chart" element={<Chart />} />

        <Route path="/sudotype" element={<SudoType />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
