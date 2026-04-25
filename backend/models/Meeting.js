const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  message: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Meeting', MeetingSchema);