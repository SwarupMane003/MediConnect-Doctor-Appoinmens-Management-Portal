import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-green-500 p-4 mt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 text-white">
            <span className="font-semibold text-xl">MediConnect</span>
            <p className="text-sm">Connecting you to the best healthcare</p>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <button onClick={() => navigate('/About_us')} className="text-white hover:text-green-200">About Us</button>
              </li>
              <li>
                <button onClick={() => navigate('/Login')} className="text-white hover:text-green-200">Login</button>
              </li>
              <li>
                <button onClick={() => navigate('/Register')} className="text-white hover:text-green-200">Register</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white mt-4">
          <p>&copy; {new Date().getFullYear()} MediConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
