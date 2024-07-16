import React, { useState } from "react";
import Layout from "../components/Layout";
import { message, TimePicker } from "antd";
import moment from "moment";
import  {useSelector , useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ApplyDoctor = () => {

  const {user} = useSelector(state =>state.user)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFinish = async ()=> 
  {
      try {
        const res=await axios.post('http://localhost:8080/api/v1/user/applyDoctor' , formData ,{
          headers : {
            authorization : "Bearer "+localStorage.getItem('token')
          }
        })

        if (res.data.success) {
          message.success(res.data.message);
          console.log(res.data.message);
          localStorage.clear();
          navigate("/Login");
        } else {
          message.error(res.data.message);
        }

      } catch (error) {
        console.log(error);
        message.error('Something went wrong !!')
      }
  };


  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    specilization: "",
    experience: "",
    feesPerConsultaion: "",
    timings: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // This will log the form data to the console, you can replace it with your submit logic
    handleFinish();
  };


  const handleTimeChange = (value) => {
    setFormData({
      ...formData,
      timings: value ? value.map((time) => time.format("HH:mm")) : [],
    });
  };

  return (
    <Layout>
      <h1 className="ml-2 text-green-500 text-2xl py-3 ">
        Application For Doctors
      </h1>
      <br />

      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="specilization">Specialization:</label>
          <input
            type="text"
            id="specilization"
            name="specilization"
            value={formData.specilization}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="feesPerConsultaion">Fees Per Consultation:</label>
          <input
            type="number"
            id="feesPerConsultaion"
            name="feesPerConsultaion"
            value={formData.feesPerConsultaion}
            onChange={handleChange}
            required
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4"
          />
        </div>

        {/* <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2 ">
          <label htmlFor="timings" className="block">Timings:</label>
          <TimePicker.RangePicker className=' py-2.5' format="HH:mm"  value={formData.timings} onChange={handleTimeChange}  />
        </div> */}
        <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <label htmlFor="timings" className="block">
            Timings:
          </label>
          <TimePicker.RangePicker
            className="py-2.5"
            format="HH:mm"
            value={
              formData.timings.length > 0
                ? [
                    moment(formData.timings[0], "HH:mm"),
                    moment(formData.timings[1], "HH:mm"),
                  ]
                : []
            }
            onChange={handleTimeChange}
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-10 my-5 rounded-md mx-2 "
        >
          Apply
        </button>
      </form>
    </Layout>
  );
};

export default ApplyDoctor;
