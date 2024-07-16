import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { showLoading , hideLoading} from '../redux/features/alertSlice'
import {useDispatch} from 'react-redux'
import Footer from "../components/Footer";

 
function Login() {
  const navigate =useNavigate()
  const dispatch=useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions like API calls here

    try {
      dispatch(showLoading())
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/Login",
        formData
      );
      window.location.reload();
      dispatch(hideLoading())
      if (res.data.success) {
        localStorage.setItem("token" , res.data.token)
        message.success("Logged in Successfully !!");
        console.log("Logged in Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
      <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md " >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter Your Email"
              onChange={handleChange}
              className="form-input mt-1 block w-full"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="form-input mt-1 block w-full"
              required
            />
          </div>
          <Link to="/Register" className="text-blue-500">Not User Click Here ?</Link>

          <button
            type="submit"
            className="block bg-green-500 hover:bg-green-600  text-white font-semibold py-2 px-4 my-5 rounded-md "
          >
            Login
          </button>
        </form>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Login;
