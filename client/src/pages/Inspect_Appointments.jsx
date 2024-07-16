import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import InspectAppointmentCard from '../components/InspectAppointmenCard';

const Inspect_Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const fetchAppointments = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8080/api/v1/user/show-all-doctor-appointments',
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

  useEffect(() => {
    fetchAppointments();
  }, []);


  return (
    <div>
       <Layout>
        <h2 className="text-green-500 text-xl mb-4">Appointments</h2>
        <div>
          {appointments.map(appointment => (
            <InspectAppointmentCard key={appointment._id} appointment={appointment} onStatusChange={fetchAppointments}  />
          ))}
        </div>
      </Layout>
   
    </div>
  )
}

export default Inspect_Appointments
