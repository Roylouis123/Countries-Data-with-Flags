import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Page/Register";
import SignIn from "./Components/Page/SignIn";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin"></Navigate>}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
