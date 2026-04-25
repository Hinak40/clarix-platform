const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: '' },
  techStack: [String],
  link: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', PortfolioSchema);