import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Login from "./components/Auth/Login";
import React, { Suspense, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
// import Scrolltop from "./components/Scrolltop/Scrolltop";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#05bd8e",
};
// Without React.lazy()
// import WithoutNavbar from './components/WithWithoutNavbar/WithoutNavbar'
// import WithNavbar from './components/WithWithoutNavbar/WithNavbar';
// With React.lazy()
const WithoutNavbar = React.lazy(() =>
  import("./components/WithWithoutNavbar/WithoutNavbar")
);
const WithNavbar = React.lazy(() =>
  import("./components/WithWithoutNavbar/WithNavbar")
);
const Scrolltop = React.lazy(() =>
  import("./components/Scrolltop/Scrolltop")
);
function App() {
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#05bd8e");
  return (
    <div className="App">
      <BrowserRouter>
      <Scrolltop>
     
          <Routes>
            <Route path="/auth/*" element={<WithoutNavbar />} />
            <Route path="/*" element={<WithNavbar />} />
          </Routes>
     
        </Scrolltop>
      </BrowserRouter>
    </div>
  );
}

export default App;
