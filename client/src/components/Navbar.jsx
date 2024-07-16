import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-green-500 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 text-white" onClick={() => navigate('/PublicHomePage')}>
            <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-semibold text-xl">MediConnect</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <button onClick={() => navigate('/PublicHomePage')} className="text-white hover:text-green-200">Home</button>
              </li>
             
             
              <li>
                <button onClick={() => navigate('/Login')} className="text-white hover:text-green-200">Login</button>
              </li>
              <li>
                <button onClick={() => navigate('/Register')} className="text-white hover:text-green-200">Register</button>
              </li>
              <li>
                <button onClick={() => navigate('/Services')} className="text-white hover:text-green-200">Services</button>
              </li>

              <li>
                <button onClick={() => navigate('/About_us')} className="text-white hover:text-green-200">About Us</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
