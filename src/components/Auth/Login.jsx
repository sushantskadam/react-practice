import React, { useState,useEffect } from "react";
import "./Login.css";
import { debounce } from "lodash";
import login_left from "../../assets/images/login_left.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { login } from "../../redux/user";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const dispatch=useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    
  }, [])
  
  const textHandler = (e) => {
    // console.log(e.target.value);

    debounce(apiCall, 500);
  };
  const apiCall = async() => {
    console.log("API Called");
    let data={
      username: formData.email,
      password: formData.password,
      // expiresInMins: 60, // optional
    }
    let loginData=await axios.post('https://dummyjson.com/auth/login',data)
  };

  const authLogin = async() => {
    console.log("login clicked");
    // console.log(email, password);
    console.log(formData);
    const allDataEmpty = Object.values(formData).every(val => val === '');
    const allErrEmpty=Object.values(errors).every(val => val === '');

    console.log({allDataEmpty}); // Output: true
    console.log({allErrEmpty});
    let data={
      username: formData.email,
      password: formData.password,
      // expiresInMins: 60, // optional
    }
    // username: 'kminchelle',
    // password: '0lelplR',
    // let loginData=await axios.post('https://dummyjson.com/auth/login',data)
    let loginData= await axios({
      method: 'post',
      url: 'https://dummyjson.com/auth/login',
      data: data
    });
    // console.log({loginData:loginData.data.token});
    dispatch(login({token:loginData.data.token,type:"user"}))
    
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: !emailRegex.test(value)  ? "Please Enter valid Email" : "",
        });
        // console.log("typing email");
        break;
      case "password":
        setErrors({
          ...errors,
          password: !passwordRegex.test(value) ? "Please Enter valid Password" : "",
        });
        // console.log("typing password");
        break;
      default:
        break;
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 login_left d-flex justify-content-center align-items-center">
          <img
            src={login_left}
            className="login_left_img"
            onClick={() => navigate("/")}
          />
          <h1 className="my-2">
            Be a part of the future of real estate with us
          </h1>
          <p>
            With us, stakeholders in the real estate industry can use the
            technology of 360 VR experiences to improve their sales.
          </p>
        </div>
        <div className="col-6 login_right d-flex justify-content-center  text-start ">
          <h2>Welcome to Aurum Planet</h2>
          <p className="text-start">Please login to continue </p>
          <label className="my-2">Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={inputHandler}
            name="email"
          />
          <small className="fw-bold text-danger">{errors.email}</small>
          <label className="my-2 mt-4"> Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={inputHandler}
          />
          <small className="fw-bold text-danger">{errors.password}</small>
          <p className="login_right_desc mt-2">
            By logging in, I agree to Plotlines’ <span>Privacy Policy</span> and{" "}
            <span>Terms of Service</span>.{" "}
          </p>
          <button className="login_btn" onClick={authLogin}>
            Login
          </button>
          <div className="d-flex justify-content-center text-start my-4">
            <span class="line"></span>{" "}
            <span className="text-secondary">Or</span>{" "}
            <span class="line"></span>
          </div>

          {/* <input type="checkbox" /> Remember Me   */}
        </div>
      </div>
    </div>
  );
}

export default Login;
