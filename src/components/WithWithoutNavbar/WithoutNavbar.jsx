import React from 'react'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
// import Login from '../Auth/Login';
// import HomePage from '../Home/HomePage';
const Login = React.lazy(() =>
  import("../Auth/Login")
);
function WithoutNavbar() {
  return (
    <div>
        <Routes>      
        <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default WithoutNavbar