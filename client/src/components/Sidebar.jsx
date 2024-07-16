import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { message } from "antd";


const handleLogout = ()=>
{
  localStorage.clear()
  message.success('Logged Out Successfully !!')
}



const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-green-500 h-screen w-64 flex flex-col justify-between fixed top-0 left-0">
      <div className="flex flex-col justify-start py-4">
        <div className="text-white font-bold text-xl px-4 py-2">MediConnect</div>
        <ul>
          <li className={`px-4 py-2 text-white ${location.pathname === '/' && 'bg-green-600'}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/appointments' && 'bg-green-600'}`}>
            <Link to="/appointments">Appointments</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/apply-doctor' && 'bg-green-600'}`}>
            <Link to="/apply-doctor">Apply for Doctor</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/getDoctors' && 'bg-green-600'}`}>
            <Link to="/getDoctors">Get Doctor</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/ProfilePage' && 'bg-green-600'}`}>
            <Link to="/ProfilePage">Profile</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/logout' && 'bg-green-600'}`}>
          <Link onClick={handleLogout} to="/Login">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="text-center text-white py-4">
        © 2024 My App
      </div>
    </div>
  );
};


const adminSidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-green-500 h-screen w-64 flex flex-col justify-between fixed top-0 left-0 ">
      <div className="flex flex-col justify-start py-4">
        <div className="text-white font-bold text-xl px-4 py-2">MediConnect</div>
        <ul>
          <li className={`px-4 py-2 text-white ${location.pathname === '/' && 'bg-green-600'}`}>
            <Link to="/">Home</Link>
          </li>
          {/* <li className={`px-4 py-2 text-white ${location.pathname === '/Doctors' && 'bg-green-600'}`}>
            <Link to="/Doctors">Doctors</Link>
          </li> */}
           <li className={`px-4 py-2 text-white ${location.pathname === '/getDoctors' && 'bg-green-600'}`}>
            <Link to="/getDoctors">Get Doctor</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/ProfilePage' && 'bg-green-600'}`}>
            <Link to="/ProfilePage">Profile</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/logout' && 'bg-green-600'}`}>
            <Link onClick={handleLogout} to="/Login">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="text-center text-white py-4">
        © 2024 My App
      </div>
    </div>
  );
};


const doctorSidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-green-500 h-screen w-64 flex flex-col justify-between fixed top-0 left-0 ">
      <div className="flex flex-col justify-start py-4">
        <div className="text-white font-bold text-xl px-4 py-2">MediConnect</div>
        <ul>
          <li className={`px-4 py-2 text-white ${location.pathname === '/' && 'bg-green-600'}`}>
            <Link to="/">Home</Link>
          </li>

          <li className={`px-4 py-2 text-white ${location.pathname === '/InspectAppoinments' && 'bg-green-600'}`}>
            <Link to="/InspectAppoinments">Inspect Appoinments</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/ProfilePage' && 'bg-green-600'}`}>
            <Link to="/ProfilePage">Profile</Link>
          </li>
          <li className={`px-4 py-2 text-white ${location.pathname === '/logout' && 'bg-green-600'}`}>
            <Link onClick={handleLogout} to="/Login">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="text-center text-white py-4">
        © 2024 My App
      </div>
    </div>
  );
};


export {Sidebar , adminSidebar , doctorSidebar};
