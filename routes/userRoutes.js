const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  getDoctorController,
  checkAvailability,
  bookAppointment,
  showAllUserAppoinments,
  showAllDoctorAppoinments,
  approveAppoinment,
  rejectAppoinment,
  fetchDoctor,
} = require("../controllers/userCtrl");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/Login", loginController);

router.post("/Register", registerController);

router.post("/getUserData", authMiddleware, authController);

router.post("/applyDoctor", authMiddleware, applyDoctorController);

router.post( "/get-all-notification", authMiddleware, getAllNotificationController);

router.post( "/delete-all-notification", authMiddleware, deleteAllNotificationController);

router.post( "/get-all-doctors", authMiddleware, getAllDocotrsController);

router.post( "/get-doctor", authMiddleware, getDoctorController);

router.post("/check-availability",authMiddleware,checkAvailability);

router.post("/book-appointment",authMiddleware,bookAppointment);

router.post("/show-all-user-appointments",authMiddleware,showAllUserAppoinments);

router.post("/show-all-doctor-appointments",authMiddleware,showAllDoctorAppoinments);

router.post("/approve-appointment",authMiddleware,approveAppoinment);

router.post("/reject-appointment",authMiddleware,rejectAppoinment);

router.post("/fetch-doctor",authMiddleware, fetchDoctor);

module.exports = router;

