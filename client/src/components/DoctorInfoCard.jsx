
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorInfoCard = ({ doctor }) => {

  const navigate = useNavigate();

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    width: '300px', // Changed from maxWidth to width to ensure consistent sizing
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  };

  const titleStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: '8px',
  };

  const infoStyle = {
    marginBottom: '4px',
  };

  const handleCardClick = (doctorId) => {
    // Navigate to the appointment booking page with doctorId as a route parameter
    console.log(doctor , "details");
    navigate(`/book-appointment/${doctorId}`);
  };


  return (
    <div style={cardStyle} onClick={() => handleCardClick(doctor?.userId)}>
      <div style={titleStyle} className='text-green-500'>{doctor?.name}</div>
      <div style={infoStyle}><strong>Specialization:</strong> {doctor?.specilization}</div>
      <div style={infoStyle}><strong>Experience:</strong> {doctor?.experience}</div>
      <div style={infoStyle}><strong>Hospital Location:</strong> {doctor?.address}</div>
      <div style={infoStyle}><strong>Timings:</strong>  {doctor?.timings[0]} - {doctor?.timings[1]}</div>
      <div style={infoStyle}><strong>Consultation Fees:</strong> Rs.{doctor?.feesPerConsultaion}</div>
    </div>
  );
};

export default DoctorInfoCard;


