import * as React from "react";
import "./../assets/scss/App.scss";
import Home from "./Home";
import SudoType from "../pages/SudoType";

import Home from "./Home";
import SudoType from "./SudoType";

const App = () => {
  const initialSearchParam = new URLSearchParams(window.location.search);
  const initialPath = initialSearchParam.get("path") || "/";

  return (
    <MemoryRouter initialEntries={["/", initialPath]}>
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="/sudotype" element={<SudoType />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
