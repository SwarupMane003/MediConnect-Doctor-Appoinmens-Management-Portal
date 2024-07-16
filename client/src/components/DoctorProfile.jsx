import React, { useEffect, useState } from "react";
import axios from 'axios';


const DoctorProfile = ({ user }) => {

  const [doctor, setdoctor] = useState(null);

  const fetchDoc =async()=>{
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/fetch-doctor',
        {
        },
        {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      );
      if (response.data.success) {
        console.log(response.data);
        setdoctor(response.data.details);
      } else {
        console.error('Failed :', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

  useEffect(() => {
    fetchDoc();
  }, [])
  

  return (
    <div className="bg-white-500 text-black p-4 rounded-md shadow-md mb-4 border border-black">
      <h2 className="text-xl font-semibold mb-4 text-green-500">Profile Information</h2>
      <h2 className="font-bold mb-2 ">Dr. {doctor?.name}</h2>
      <p>Email: {doctor?.email}</p>
      <p>Phone: {doctor?.phone}</p>
      <p>Hospital Location: {doctor?.address}</p>
      <p>Website: {doctor?.website}</p>
      <p>Specialization: {doctor?.specilization}</p>
      <p>Experience: {doctor?.experience} </p>
      <p>Fees per Consultation: Rs.{doctor?.feesPerConsultaion}</p>
      <p>
        Consulting Time: {doctor?.timings[0]} - {doctor?.timings[1]}
      </p>
    </div>
  );
};

export default DoctorProfile;
