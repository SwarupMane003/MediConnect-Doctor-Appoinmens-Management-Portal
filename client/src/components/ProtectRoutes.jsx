import React , {useEffect }from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { useReducer } from "react";
import axios from 'axios'
import { message } from "antd";

const ProtectRoutes = ({ children }) => {
  const dispath = useDispatch();
  const  {user}  = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/user/getUserData",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )

      if (res.data.success) {
        dispath(setUser(res.data.data));
      } else {
        <Navigate to='Login' />
        localStorage.clear()
      }
    } catch (error) {
      localStorage.clear()
      console.log(error)
    }
  };



  useEffect(()=>{
    if(!user)
    {
        getUser()
    }
  } , [user ,getUser])



  if (localStorage.getItem("token")) {
    return children;
  } else {
    return <Navigate to="Login" />;
  }
};

export default ProtectRoutes;
