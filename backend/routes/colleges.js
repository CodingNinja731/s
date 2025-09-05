const express = require('express');
const router = express.Router();
const College = require('../models/College');

// @route   GET api/colleges
// @desc    Get all colleges
// @access  Public
router.get('/', async (req, res) => {
  try {
    const colleges = await College.find().populate('courses');
    res.json(colleges);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/colleges
// @desc    Create a new college
// @access  Public (for now, should be private/admin in a real app)
router.post('/', async (req, res) => {
  const { name, location, courses, medium, facilities } = req.body;

  // Basic validation
  if (!name || !location || !medium) {
    return res.status(400).json({ msg: 'Please provide name, location, and medium' });
  }

  try {
    const newCollege = new College({
      name,
      location,
      courses,
      medium,
      facilities,
    });

    const college = await newCollege.save();
    res.status(201).json(college);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
