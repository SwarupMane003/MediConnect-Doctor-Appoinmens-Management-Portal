import React from 'react'
import  axios from 'axios'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import doctorImage from './img/doctor.jpg'
import appointmentImage from './img/appointment.jpg'
 

function HomePage() {
  const navigate=useNavigate();

  const getUserData =async ()=> 
  {
    try {
      const res=await axios.post('http://localhost:8080/api/v1/user/getUserData' ,{} ,{
        headers : {
          authorization : "Bearer "+localStorage.getItem('token')
        }
      })
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserData() ;
  }, [])
  
 
  return (
    <div>
        <Layout>  
        <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <p className="text-gray-600 mb-4 p-5 ">
          <h2 className="text-green-500 mb-4 text-xl mt-">  Welcome to Our Health and Wellness Platform </h2>
          Welcome At MediConnect, we believe in the power of accessible healthcare for everyone. Our platform connects you with qualified and experienced doctors, ensuring that you receive the best medical advice and treatment at your convenience. Whether you're dealing with a chronic condition or need a routine check-up, our user-friendly system allows you to book appointments effortlessly, ensuring your health remains a priority.
          </p>
          {/* Left Column */}
          <div className="flex flex-col justify-center items-center">
            <img src={doctorImage} alt="Doctors" className="w-60 h-60 object-cover rounded-lg shadow-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Find Your Doctor</h2>
            <p className="text-gray-600 mb-4">Discover experienced doctors in your area.</p>
            <button onClick={() => navigate('/getDoctors')} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Explore Doctors</button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center items-center">
            <img src={appointmentImage} alt="Appointments" className="w-60 h-60  object-cover rounded-lg shadow-lg mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Book an Appointment</h2>
            <p className="text-gray-600 mb-4">Schedule appointments hassle-free.</p>
            <button onClick={() => navigate('/getDoctors')} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Book Now</button>
          </div>
          <p className="text-gray-600 mb-4 p-5 ">
          <h2 className="text-green-500 mb-4 text-xl">  Convenient and Secure Healthcare Management</h2>
          We understand that managing your health can be complex, which is why we've designed our system to be as intuitive and secure as possible. From checking availability to booking appointments and receiving notifications, our platform streamlines every step of the process. Your personal health information is protected with the highest standards of security, giving you peace of mind as you focus on your well-being.
          </p> 
        </div>
      </div>
      

      </Layout>
    </div>
  )
}

export default HomePage