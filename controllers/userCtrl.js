const userModel = require("../models/userModel");
const doctorModel = require("../models/doctorModel");
const bcrypt = require("bcryptjs");
const { use } = require("../routes/userRoutes");
const jwt = require("jsonwebtoken");
const { get } = require("mongoose");
const appointmentModel = require("../models/appointmentModel");
const moment = require('moment');

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(200)
        .send({ message: "User Not Found", success: false });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invalid Credientials", success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .send({ message: "Logged in Successfully !!", success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Error in Login" });
  }
};

const registerController = async (req, res) => {
  try {
    const existinguser = await userModel.findOne({ email: req.body.email });

    if (existinguser) {
      return res
        .status(200)
        .send({ message: "User Already Exists", success: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10); /// salt generated
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      notification: [],
    });

    return res
      .status(201)
      .send({ message: "Registered Successfully", success: true });
  } catch (error) {
    console.log(error);

    res.status(500).send({ success: false, message: "error" });
  }
};

const authController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    user.password = undefined;
    if (!user) {
      return res.status(200).send({
        message: "User Not Found ",
        success: false,
      });
    } else {
      console.log(user);
      return res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Auth Error",
      success: false,
      error,
    });
  }
};

const applyDoctorController = async (req, res) => {
  try {
    const newDoctor = await doctorModel({ ...req.body });
    const user = await userModel.findOne({ _id: req.body.userId });
    user.isDoctor = true;
    await user.save();
    await newDoctor.save();

    const adminUser = await userModel.findOne({ isAdmin: true });
    let notification = adminUser.notification;

    notification.push({
      type: "Application For Doctor",
      message: `Received Application From ${newDoctor.name} `,
      data: {
        doctorId: newDoctor._id,
        name: `${newDoctor.name}`,
        specilization: `${newDoctor.specilization}`,
        experience: `${newDoctor.experience}`,
        onClickPath: "/admin/doctors",
      },
    });

    await userModel.findByIdAndUpdate(adminUser._id, { notification });
    res.status(201).send({
      success: true,
      message: "Applied For Doctor Successfully !!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      err,
      message: "error while applying for doctor",
    });
  }
};

const getAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    const notification = user.notification;

    res.status(200).send({
      success: true,
      message: "successfully done..",
      notification,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in notification",
      success: false,
      error,
    });
  }
};

const deleteAllNotificationController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });

    let notification = user.notification;
    notification = [];
    await userModel.findByIdAndUpdate(user._id, { notification });

    await user.save(); // Don't forget to save the changes

    res.status(200).send({
      success: true,
      message: "successfully done..",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in notification",
      success: false,
      error,
    });
  }
};

const getAllDocotrsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.status(200).send({
      success: true,
      message: "Doctors Lists Fetched Successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Fetching Docotr",
    });
  }
};

const getDoctorController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({ userId: req.body.doctorId });

    res.status(200).send({
      success: true,
      message: "Doctor Fetched Successfully",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While Fetching Docotr",
    });
  }
};


const checkAvailability = async (req, res) => {

  try {
    // Correctly parse the date and time
    const appointmentDateTime = moment(`${req.body.appointmentDate} ${req.body.appointmentTime}`, "DD-MM-YYYY HH:mm", true);

    // if (!appointmentDateTime.isValid()) {
    //   return res.status(400).json({ success: false, message: "Invalid date or time format." });
    // }

    if (appointmentDateTime.isBefore(moment())) {
      return res.status(201).json({ success: false, message: "Appointment must be in the future." });
    }

    const doctor = await doctorModel.findOne({ userId: req.body.doctorId });

    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found." });
    }

    const [startTime, endTime] = doctor.timings;
    const appointmentTimeFormatted = appointmentDateTime.format("HH:mm");
    if (appointmentTimeFormatted < startTime || appointmentTimeFormatted > endTime) {
      return res.status(201).json({ success: false, message: "Appointment time is outside of doctor's working hours." });
    }

    const existingAppointment = await appointmentModel.findOne({
      doctorId: req.body.doctorId,
      date: appointmentDateTime.format("DD-MM-YYYY"),
      time: appointmentTimeFormatted,
      status : 'Approved'
    });

    if (existingAppointment) {
      return res.status(201).json({ success: false, message: "Appointment slot is already booked." });
    }

    return res.status(200).json({ success: true, message: "Appointment slot is available." });

  } catch (error) {
    console.error("Error checking availability:", error);
    return res.status(500).json({ success: false, message: "Internal server error." });
  }
};

const bookAppointment = async (req, res) => {

   
  try {
    const doctor = await doctorModel.findOne({userId:req.body.doctorId })
    const user = await userModel.findOne({_id:req.body.userId })

    const newAppointment = new appointmentModel({
      doctorId:req.body.doctorId,
      userId:req.body.userId,
      date:req.body.appointmentDate,
      time:req.body.appointmentTime,
      doctorInfo:{name : doctor.name , address:doctor.address},
      userInfo:{name : user.name  },
      status: 'Pending' ,
    });

    await newAppointment.save();

    return res.status(200).json({ success: true, message: "Appointment booked successfully.", appointment: newAppointment });
  } catch (error) {
    console.error("Error booking appointment:", error);
    return res.status(500).json({ success: false, message: "Failed to book appointment. Please try again later." });
  }
};


const showAllUserAppoinments = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({
      userId: req.body.userId,
    });

    res.status(200).send({
      success: true,
      message: "successfully done..",
      apt : appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error",
      success: false,
      error,
    });
  }
};

const showAllDoctorAppoinments = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({
      doctorId: req.body.userId,
    });

    res.status(200).send({
      success: true,
      message: "successfully done..",
      apt : appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error",
      success: false,
      error,
    });
  }
};

const approveAppoinment = async (req, res) => {
    try {
      const appointment = await appointmentModel.findOne({
        _id: req.body.apt_id,
      });


      appointment.status="Approved";
      await appointment.save();
  
      return res.status(200).send({
        success: true,
        message: "Successfully Approved ..",

      });
    } catch (error) {
      return res.status(500).send({
        message: "Error in Approving ",
        success: false,
      });
    }
};

const rejectAppoinment = async (req, res) => {
  try {
    const appointment = await appointmentModel.findOne({
      _id: req.body.apt_id,
    });

    appointment.status="Rejected";
    await appointment.save();

    res.status(200).send({
      success: true,
      message: "Successfully Rejected ..",

    });
  } catch (error) {
    res.status(500).send({
      message: "Error in Rejecting ",
      success: false,
    });
  }
};

const fetchDoctor = async (req, res) => {
  try {
    const doc = await doctorModel.findOne({
     userId: req.body.userId,
    });

    res.status(200).send({
      success: true,
      message: "Successfully fetched..",
      details:doc,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error",
      success: false,
    });
  }
};

module.exports = {
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
};
