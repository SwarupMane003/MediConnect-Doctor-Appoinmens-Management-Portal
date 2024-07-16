

import React, { useEffect, useState } from "react";
import axios from "axios";
import DoctorInfoCard from "../components/DoctorInfoCard"; // Ensure you have the correct path
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const GetDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/user/get-all-doctors",
          { },
          {
            headers: {
              authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setDoctors(response.data.data);
      } catch (error) {
        console.error("Error fetching doctors", error);
      }
    };

    fetchDoctors();
  }, []);

  // const handleCardClick = (doctorId) => {
  //   navigate(`/book-appointment/${doctorId}`);
  // };


  return (
    <>
      <Layout>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start", // Changed from center to flex-start
          gap: "16px", // Adds consistent spacing between cards
        }}>
          {doctors?.map((doctor) => (
            <DoctorInfoCard key={doctor.userId} doctor={doctor} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default GetDoctors;


