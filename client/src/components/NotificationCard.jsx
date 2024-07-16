import React from 'react';

const NotificationCard = ({ notification }) => {
  return (
    <div className="bg-white-500 text-black p-4 rounded-md shadow-md mb-4 border border-black">
      <h3 className="font-bold mb-2">{notification.type}</h3>
      <p className="mb-2">{notification.message}</p>
      <div className="bg-white text-green-500 p-2 rounded-md mt-2">
        <p className="font-semibold">Specialization: {notification.data.specilization}</p>
        <p className="font-semibold">Experience: {notification.data.experience}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
