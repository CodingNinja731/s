const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    city: String,
    state: String,
    pincode: String,
  },
  courses: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Course',
  },
  medium: {
    type: String,
    required: true,
  },
  facilities: {
    type: [String],
  },
}, { timestamps: true });

module.exports = mongoose.model('College', CollegeSchema);
