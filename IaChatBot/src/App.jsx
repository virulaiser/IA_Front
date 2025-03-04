import { Routes, Route } from "react-router";

import "./App.css";
/* import Home from "./page/home"; */
import NavBarNa from "./component/NavBarNa";
/* import Compo from "./component/Compo"; */
import Example from "./component/Example";

function App() {
  return (
    <>
      {" "}
      <dir>
        <NavBarNa />
      </dir>
      <div>
        <Routes>
          
          <Route path="/" element={<Example />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
