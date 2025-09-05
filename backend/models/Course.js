const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    enum: ['Arts', 'Science', 'Commerce', 'Vocational'],
    required: true,
  },
  careerPaths: {
    type: [String],
  },
  colleges: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'College',
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
