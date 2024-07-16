import React from 'react';
import axios from 'axios';


const InspectAppointmentCard = ({ appointment, onStatusChange}) => {
  const getStatusColorClass = () => {
    switch (appointment?.status) {
      case 'Approved':
        return 'text-green-500'; // Green color for Approved
      case 'Rejected':
        return 'text-red-600'; // Red color for Rejected
      case 'Pending':
        return 'text-blue-500'; // Blue color for Pending
      default:
        return 'text-gray-500'; // Default gray color
    }
  };

  const handleApprove = async (apt_id) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/approve-appointment',
        {
          apt_id: apt_id 
        },
        {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      );
      if (response.data.success) {
        console.log(response.data);
        onStatusChange();
      } else {
        console.error('Failed to delete:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };


  const handleReject = async (apt_id) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/user/reject-appointment',
        { apt_id: apt_id  },
        {
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      );
      if (response.data.success) {
        console.log(response.data);
        onStatusChange();
      } else {
        console.error('Failed to delete:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  return (
    <div>
      <div className="bg-white-500 text-black p-4 rounded-md shadow-md mb-4 border border-black">
        <h3 className="font-bold mb-2">{appointment?.type}</h3>
        <p className="mb-2">{appointment?.message}</p>
        <div className="bg-white p-2 rounded-md mt-2">
          <p className="font-semibold">
            User Name: <span className="text-black">{appointment?.userInfo.name}</span>
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
        <div className="mt-4">
          {appointment?.status === 'Pending' && (
            <>
              <button
                className="bg-green-500 text-white px-4 py-1 rounded-md mr-2"
                onClick={() => handleApprove(appointment._id)}
              >
                Approve
              </button>
              <button
                className="bg-red-600 text-white px-4 py-1 rounded-md"
                onClick={() => handleReject(appointment._id)}
              >
                Reject
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InspectAppointmentCard;
