import { Routes, Route } from "react-router";
import NavBarNa from "./component/NavBarNa";
import Example from "./component/Example";
import "./App.css";




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
