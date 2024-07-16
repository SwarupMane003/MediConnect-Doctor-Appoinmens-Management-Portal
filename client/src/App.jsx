import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import spinner from "./components/spinner.jsx";
import ProtectRoutes from "./components/ProtectRoutes.jsx";
import PublicRoute from "./components/PublicRoute.jsx";
import ApplyDoctor from "./pages/ApplyDoctor.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import GetDoctors from "./pages/GetDoctors.jsx";
import Appoinments from "./pages/Appoinments.jsx";
import AppointmentBooking from "./pages/AppointmentBooking.jsx";
import Inspect_Appointments from "./pages/Inspect_Appointments.jsx";
import PublicHomePage from "./pages/PublicHomePage.jsx";
import About_us from "./pages/About_us.jsx";
import Services from "./pages/Services.jsx"

function App() {
  const [count, setCount] = useState(0);
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {/* {loading && <spinner/> } */}

        <Routes>
          <Route
            path="/"
            element={
              <ProtectRoutes>
                <HomePage />
              </ProtectRoutes>
            }
          />
           {/* <Route
            path="/"
            element={
              <PublicRoute>
                <PublicHomePage />
              </PublicRoute>
            }
          /> */}
          <Route
            path="/HomePage"
            element={
              <ProtectRoutes>
                <HomePage />
              </ProtectRoutes>
            }
          />
          <Route
            path="/PublicHomePage"
            element={
              <PublicRoute>
                <PublicHomePage />
              </PublicRoute>
            }
          />

          <Route
            path="/About_us"
            element={
              <PublicRoute>
                <About_us />
              </PublicRoute>
            }
          />

          <Route
            path="/Services"
            element={
              <PublicRoute>
                <Services />
              </PublicRoute>
            }
          />

          <Route
            path="/Login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/Register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/apply-doctor"
            element={
              <ProtectRoutes>
                <ApplyDoctor />
              </ProtectRoutes>
            }
          />

          <Route
            path="/notification"
            element={
              <ProtectRoutes>
                <NotificationPage />
              </ProtectRoutes>
            }
          />

          <Route
            path="/ProfilePage"
            element={
              <ProtectRoutes>
                <ProfilePage />
              </ProtectRoutes>
            }
          />

          <Route
            path="/getDoctors"
            element={
              <ProtectRoutes>
                <GetDoctors />
              </ProtectRoutes>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectRoutes>
                <Appoinments />
              </ProtectRoutes>
            }
          />

          <Route
            path="/book-appointment/:doctorId"
            element={
              <ProtectRoutes>
                <AppointmentBooking />
              </ProtectRoutes>
            }
          />

          <Route
            path="/InspectAppoinments"
            element={
              <ProtectRoutes>
                <Inspect_Appointments />
              </ProtectRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
