import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserMd, faBookMedical } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 mx-auto ">
            Welcome to MediConnect's comprehensive suite of services designed to enhance your healthcare experience. Whether you're seeking to apply for doctors, explore specialists, or manage appointments seamlessly, our platform simplifies the process. Discover a range of features tailored to connect patients with reliable medical services efficiently and securely. Explore below to learn more about how MediConnect revolutionizes healthcare accessibility and efficiency for everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1: Apply for Doctors */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg w-full">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <FontAwesomeIcon icon={faUserMd} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Apply for Doctors
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Apply for appointments with doctors of your choice through MediConnect. Browse profiles and submit applications seamlessly.
                </p>
              </div>
            </div>

            {/* Service Card 2: Explore Doctors */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg w-full">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                  <FontAwesomeIcon icon={faBookMedical} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Explore Doctors
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Discover a diverse range of doctors across various specializations and locations. Detailed profiles make finding the right healthcare professional easy.
                </p>
              </div>
            </div>

            {/* Service Card 3: Book Appointments */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg w-full">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mb-4">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Book Appointments
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Schedule appointments at your convenience. Choose the desired date and time, and manage your healthcare appointments effortlessly.
                </p>
              </div>
            </div>

            {/* Service Card 4: Doctor Approval Process */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg w-full">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mb-4">
                  <FontAwesomeIcon icon={faUserMd} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Doctor Approval Process
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Manage appointment requests efficiently as a doctor on MediConnect. Approve or reject appointments based on availability and patient needs.
                </p>
              </div>
            </div>

            {/* Service Card 5: View Doctors' Specializations */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg w-full">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white mb-4">
                  <FontAwesomeIcon icon={faBookMedical} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  View Doctors' Specializations
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Gain insights into doctors' areas of specialization and professional experience. Make informed decisions based on comprehensive profiles.
                </p>
              </div>
            </div>

            {/* Service Card 6: Healthcare Efficiency */}
            <div className="bg-white overflow-hidden shadow-lg rounded-lg w-full">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white mb-4">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Healthcare Efficiency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Enhance healthcare efficiency with MediConnect. Simplify patient management and improve service delivery across medical facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
