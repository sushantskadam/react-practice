// import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxContainer from "./reduxContainer";
import React, { Suspense, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
const root = ReactDOM.createRoot(document.getElementById("root"));
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#05bd8e",
};
root.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center loader">
          <MoonLoader
            color={"#05bd8e"}
            loading={true}
            cssOverride={override}
            size={150}
          />{" "}
        </div>
      }
    >
      <ReduxContainer />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
