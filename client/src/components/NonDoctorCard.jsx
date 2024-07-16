

// import React from 'react';
// import { Link } from 'react-router-dom';

// const NonDoctorCard = ({ user }) => {
//   return (
//     <div >
//       <div className="bg-white-500 text-black p-4 rounded-md shadow-md mb-4 ">
//           <h3 className="text-gray-700 mb-2 "><strong>Name:</strong> {user?.name}</h3>
//           <p className="text-gray-700 mb-2"><strong>Email:</strong> {user?.email}</p>
//           <p className="text-gray-700 mb-2"><strong>Doctor:</strong> {'No'}</p>
//       </div>
          
        
//     </div>
//   );
// };

// export default NonDoctorCard;
import React from 'react';

const NonDoctorCard = ({ user }) => {
  return (
    <div className="max-w-lg mx-0 my-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-green-500">Profile Information</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700"> <b>Name:</b></label>
          <p className="text-lg text-gray-900">{user?.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700"><b>Email:</b></label>
          <p className="text-lg text-gray-900">{user?.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700"><b>Doctor:</b></label>
          <p className="text-lg text-gray-900">No</p>
        </div>
      </div>
    </div>
  );
};

export default NonDoctorCard;
