const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  website: {
    type: String,
  },

  specilization: {
    type: String,
    required: true,
  },

  experience: {
    type: String,
    required: true,
  },

  feesPerConsultaion: {
    type: Number,
    required: true,
  },
  
  timings: {
    type: Object,
    require: true,
  },
} , {timestamps : true});

const doctorModel = mongoose.model("doctors", doctorSchema);

module.exports = doctorModel;
