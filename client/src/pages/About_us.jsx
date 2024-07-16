import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import swarupimg from './img/swarup.png';
import suyashimg from './img/suyash.jpg';
import sandeepimg from './img/sandeep.jpg';

const About_us = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
            About Us - MediConnect Development Team
          </h2>
          <div className="mt-6">
            <p className="text-lg leading-7 text-gray-700">
              Welcome to the About Us page of the MediConnect Development Team.
              We are a group of passionate students from PICT College, all
              pursuing our Bachelor of Engineering in Information Technology.
              Meet the minds behind the scenes:
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Placeholder cards for team members */}
              <div className="col-span-1 bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <img
                    className="rounded-full mx-auto h-40 w-40"
                    src={sandeepimg}
                    alt="Sandeep Milake"
                  />
                  <h3 className="mt-6 text-center text-xl leading-9 font-semibold text-gray-900">
                    Sandeep Milake
                  </h3>
                  <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                    Pune Institute of Computer Technology, Department -
                    Information Technology
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <img
                    className="rounded-full mx-auto h-40 w-40"
                    src={swarupimg}
                    alt="Swarup Mane"
                  />
                  <h3 className="mt-6 text-center text-xl leading-9 font-semibold text-gray-900">
                    Swarup Mane
                  </h3>
                  <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                    Pune Institute of Computer Technology, Department -
                    Information Technology 
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <img
                    className="rounded-full mx-auto h-40 w-40"
                    src={suyashimg}
                    alt="Suyash Mali"
                  />
                  <h3 className="mt-6 text-center text-xl leading-9 font-semibold text-gray-900">
                    Suyash Mali
                  </h3>
                  <p className="mt-2 text-center text-sm leading-5 text-gray-600">
                    Pune Institute of Computer Technology, Department -
                    Information Technology
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl leading-8 font-semibold text-gray-900">
                Our Motivation
              </h2>
              <p className="mt-2 text-lg leading-7 text-gray-700">
                Driven by our shared passion for technology and healthcare, we
                embarked on the journey to create MediConnect. Our goal is to
                revolutionize healthcare accessibility by connecting patients
                with reliable medical services efficiently and securely. Through
                meticulous coding and innovative solutions, we aim to simplify
                the healthcare experience for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About_us;
