const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Course = require('../models/Course');
const auth = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Course management
 */

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Retrieve a list of all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: A list of courses.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('colleges');
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const courseSchema = Joi.object({
  name: Joi.string().min(3).required(),
  stream: Joi.string().valid('Arts', 'Science', 'Commerce', 'Vocational').required(),
  careerPaths: Joi.array().items(Joi.string()),
  colleges: Joi.array().items(Joi.string().hex().length(24)),
});

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: The created course.
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post('/', auth, async (req, res) => {
  const { error, value } = courseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  try {
    const newCourse = new Course(value);
    const course = await newCourse.save();
    res.status(201).json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
