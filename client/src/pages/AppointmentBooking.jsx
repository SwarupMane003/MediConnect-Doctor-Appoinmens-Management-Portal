// AppointmentBooking.js
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import DoctorCard from "../components/DoctorCard";
import { TimePicker, DatePicker, message } from "antd";
import moment from "moment";

const AppointmentBooking = () => {
  const Navigate=useNavigate();
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);

  useEffect(() => {
    const fetch_Doctor = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/v1/user/get-doctor`,
          { 
            doctorId: doctorId,
          },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setDoctor(response.data.data);
      } catch (error) {
        console.error("Error fetching doctor", error);
      }
    };

    fetch_Doctor();
  }, []);

  const checkAvailability = async () => {
    try {
      const formattedDate = appointmentDate.format("DD-MM-YYYY");
      const formattedTime = appointmentTime.format("HH:mm");

      const response = await axios.post(
        `http://localhost:8080/api/v1/user/check-availability`,
        {
          doctorId:doctorId,
          appointmentDate: formattedDate,
          appointmentTime: formattedTime,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setAvailability(response.data.message);
      console.log(response.data.message);
    } catch (error) {
      console.log("Error checking availability:");
      setAvailability(null);
    }
  };

  const bookAppointment = async () => {
    const formattedDate = appointmentDate.format("DD-MM-YYYY");
    const formattedTime = appointmentTime.format("HH:mm");
    try {
      const res= await axios.post(`http://localhost:8080/api/v1/user/book-appointment`, {doctorId:doctorId,
        appointmentDate: formattedDate,
        appointmentTime: formattedTime,} , { 
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },});
      // Handle successful booking, e.g., show a confirmation message
      if(res.data.success){
        message.success("Appointment Booked Successfully");
        Navigate('/');
      }
    
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  if (!doctor) return <div>Loading...</div>;

  const printDateTime = () => {
    console.log(appointmentDate,appointmentTime);
    console.log("Appointment Date:", appointmentDate.format('DD-MM-YYYY'));
    console.log("Appointment Time:", appointmentTime.format('HH:mm') , typeof(appointmentTime.format('HH:mm')));
  };

  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleTimeChange = (time) => {
    setAppointmentTime(time);
  };

  return (
    <>
      <Layout>
        <div className="appointment-booking">
          <h2 className="text-green-500 text-xl mb-5">
            Book Appointment with Dr. {doctor.name}
          </h2>
          <DoctorCard user={doctor} />

          <div className="flex flex-col ">
         
            <div className="flex items-center">
            <label className="mr-2 font-bold ml-3">Select Date:</label>
              <DatePicker
                className="m-2 px-6"
                format="DD-MM-YYYY"
                value={appointmentDate}
                onChange={handleDateChange}
              />
                  <label className="mr-2 font-bold ml-3">Select Time:</label>
              <TimePicker
                className="m-2 px-6"
                format="HH:mm"
                value={appointmentTime}
                onChange={handleTimeChange}
              />
            </div>
            </div>


          <button
              onClick={checkAvailability} 
              // onClick={printDateTime}
              className="bg-gray-200 text-black  w-44 py-1 px-4 rounded border
              border-gray-300 m-2  shadow-md hover:bg-gray-300" > Check
              Availability
            </button>

          {availability !== null && (
            <>
              {availability === "Appointment slot is available." ? (
                <div>
                  <p className="text-green-500">{availability}</p>
                  <button
                    onClick={bookAppointment}
                    className="bg-green-500 text-white w-44 py-1 px-4 rounded m-2 shadow-md hover:bg-green-600"
                  >
                    Book Appointment
                  </button>
                </div>
              ) : (
                <p className="text-red-600">{availability}</p>
              )}
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default AppointmentBooking;
