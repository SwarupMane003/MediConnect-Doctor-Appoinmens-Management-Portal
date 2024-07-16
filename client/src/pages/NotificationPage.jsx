import React, { useState , useEffect } from "react";
import Layout from "../components/Layout";
import { message, notification, TimePicker } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NotificationCard from "../components/NotificationCard"; // Adjust the import path as needed
import { useSelector } from "react-redux";
import { Link  } from "react-router-dom";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading state
  const { user } = useSelector((state) => state.user);
  const Navigate = useNavigate();

  const handleDeleteAll = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/delete-all-notification",
        {},
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.data.success) {
        setNotifications([]);
        message.success("All notifications deleted successfully");
        Navigate('/');
      } else {
        message.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong !!");
    }
  };

  const FinishNotification = async () => {
    setNotifications(user?.notification);
  }

  useEffect(() => {
    FinishNotification();
  }, [user?.notification.length]);


  return (
    <>
      <Layout>
        <h1 className="text-center text-2xl text-green-500">
          Notifications
        </h1>
        {/* <hr /><hr /><hr />  */}
        <hr className="border border-green" />
        {/* <button
          onClick={ FinishNotification}
          className="bg-green-500 text-white px-3 py-1 rounded-md my-4"
        >
          Show All
        </button> */}
        <button 
          onClick={handleDeleteAll}
          className="bg-red-500 text-white px-3 py-1 my-2 mx-0.4 rounded-md"
        >
          Delete All
        </button>
        <div>
          {notifications?.map((notification, index) => (
            <NotificationCard key={index} notification={notification} />
          ))}
        </div>
      
      </Layout>
    </>
  );
};

export default NotificationPage;
