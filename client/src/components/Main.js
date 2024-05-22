import Register from "./Register";
import {  Routes, Route } from "react-router-dom";
// import Home from "./Home";
import Navbar from "./Navbar";
import Signin from "./Signin";
const Main = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Main;