import React from "react";
import "../styles/LayoutStyle.css";

// import "../styles/tmp.css"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useState } from "react";
import DoctorProfile from "../components/DoctorProfile";
import NonDoctorCard from "../components/NonDoctorCard";

const ProfilePage = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const [profile, setprofile] = useState({});
  const Navigate = useNavigate();

  const ProfileCard = user?.isDoctor ? DoctorProfile : NonDoctorCard;

  return (
    <div>
      <Layout>
        <div>
          {user?.isDoctor ? <DoctorProfile user={user} /> : <NonDoctorCard user={user} />}
        </div>
      </Layout>
    </div>
  );
};

export default ProfilePage;
