import * as React from "react";
import "./../assets/scss/App.scss";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
