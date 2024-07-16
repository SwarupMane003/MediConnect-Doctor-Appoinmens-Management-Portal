import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Link , useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { message } from 'antd'
import { showLoading , hideLoading} from '../redux/features/alertSlice'
import {useDispatch} from 'react-redux'
import Footer from "../components/Footer";
 
function Register() {
  const dispatch=useDispatch()

  const navigate=useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      dispatch(showLoading())
      const res=await axios.post('http://localhost:8080/api/v1/user/Register' , formData)
      dispatch(hideLoading())
      if(res.data.success)
      {
        message.success("Registerd Successfully !!")
        console.log("Registerd Successfully")
        navigate("/Login")
      }
      else
      {
        message.error(res.data.message)
      }
    } catch (error) {
      dispatch(showLoading())
      console.log(error)
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
      <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input mt-1 block w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
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
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="form-input mt-1 block w-full"
              required
            />
          </div>

          <Link to="/Login"  className="text-blue-500">Already User Click Here ?</Link>

          <button
            type="submit"
            className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 my-5 
          rounded-md"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Register;
