import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import UserAppointmentCard from '../components/UserAppointmentCard';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/user/show-all-user-appointments',
          {},
          {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('token')
            }
          }
        );
        if (response.data.success) {
          console.log(response.data);
          setAppointments(response.data.apt);
        } else {
          console.error('Failed to fetch appointments:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <Layout>
        <h2 className="text-green-500 text-xl mb-4">Your Appointments</h2>
        <div>
          {appointments.map(appointment => (
            <UserAppointmentCard key={appointment._id} appointment={appointment} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Appointments;
