const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// @route   GET api/courses
// @desc    Get all courses
// @access  Public
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('colleges');
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/courses
// @desc    Create a new course
// @access  Public (for now, should be private/admin in a real app)
router.post('/', async (req, res) => {
  const { name, stream, careerPaths, colleges } = req.body;

  // Basic validation
  if (!name || !stream) {
    return res.status(400).json({ msg: 'Please provide name and stream' });
  }

  try {
    const newCourse = new Course({
      name,
      stream,
      careerPaths,
      colleges,
    });

    const course = await newCourse.save();
    res.status(201).json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
