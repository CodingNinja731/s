const express = require('express');
const router = express.Router();
const Joi = require('joi');
const College = require('../models/College');
const auth = require('../middleware/auth');

/**
 * @swagger
 * tags:
 *   name: Colleges
 *   description: College management
 */

/**
 * @swagger
 * /api/colleges:
 *   get:
 *     summary: Retrieve a list of all colleges
 *     tags: [Colleges]
 *     responses:
 *       200:
 *         description: A list of colleges.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/College'
 */
router.get('/', async (req, res) => {
  try {
    const colleges = await College.find().populate('courses');
    res.json(colleges);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const collegeSchema = Joi.object({
  name: Joi.string().min(3).required(),
  location: Joi.object({
    city: Joi.string().required(),
    state: Joi.string().required(),
    pincode: Joi.string().length(6).pattern(/^[0-9]+$/).required(),
  }).required(),
  courses: Joi.array().items(Joi.string().hex().length(24)),
  medium: Joi.string().required(),
  facilities: Joi.array().items(Joi.string()),
});

/**
 * @swagger
 * /api/colleges:
 *   post:
 *     summary: Create a new college
 *     tags: [Colleges]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/College'
 *     responses:
 *       201:
 *         description: The created college.
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post('/', auth, async (req, res) => {
  const { error, value } = collegeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ msg: error.details[0].message });
  }

  try {
    const newCollege = new College(value);
    const college = await newCollege.save();
    res.status(201).json(college);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
