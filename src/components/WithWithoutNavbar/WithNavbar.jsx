import React from "react";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import AddProp from "../AddProperty/AddProp";
import Login from "../Auth/Login";
import HomePage from "../Home/HomePage";
import Navbar from "../Navbar/Navbar";

function WithNavbar() {
  return (
    <div >
      <Navbar />
     
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/addprop" element={<AddProp/>}/>
      </Routes>


    
      
    </div>
  );
}

export default WithNavbar;
