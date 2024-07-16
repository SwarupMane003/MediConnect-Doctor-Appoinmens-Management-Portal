import React from "react";

const UserAppointmentCard = ({ appointment }) => {
  // Function to determine the status color class
  const getStatusColorClass = () => {
    switch (appointment?.status) {
      case "Approved":
        return "text-green-500"; // Green color for Approved
      case "Rejected":
        return "text-red-600";   // Red color for Rejected
      case "Pending":
        return "text-blue-500";  // Blue color for Pending
      default:
        return "text-gray-500";  // Default gray color
    }
  };

  return (
    <div>
      <div className="bg-white-500 text-black p-4 rounded-md shadow-md mb-4 border border-black">
        <h3 className="font-bold mb-2">{appointment?.type}</h3>
        <p className="mb-2">{appointment?.message}</p>
        <div className="bg-white p-2 rounded-md mt-2">

          <p className="font-semibold">
            Doctor Name: <span className="text-black">{appointment?.doctorInfo.name}</span>
          </p>
          <p className="font-semibold">
            Hospital Location: <span className="text-black">{appointment?.doctorInfo.address}</span>
          </p>

          <p className="font-semibold">
            Appointment Date: <span className="text-black">{appointment?.date}</span>
          </p>
          <p className="font-semibold">
            Appointment Time: <span className="text-black">{appointment?.time}</span>
          </p>
          <p className="font-semibold">
            Status: <span className={getStatusColorClass()}>{appointment?.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserAppointmentCard;
