const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: '' },
  author: { type: String, default: 'Clarix Team' }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);