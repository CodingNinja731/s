const express = require('express');
const router = express.Router();

// Hardcoded sample quiz data
const sampleQuiz = {
  title: "Aptitude & Interest Quiz",
  questions: [
    {
      id: 1,
      text: "Which subject do you enjoy the most?",
      options: [
        { id: 'a', text: 'Physics/Chemistry' },
        { id: 'b', text: 'History/Geography' },
        { id: 'c', text: 'Mathematics/Accounting' },
        { id: 'd', text: 'Painting/Music' },
      ],
      streamSuggestion: { a: 'Science', b: 'Arts', c: 'Commerce', d: 'Vocational' }
    },
    {
      id: 2,
      text: "What kind of activities do you prefer?",
      options: [
        { id: 'a', text: 'Solving complex problems' },
        { id: 'b', text: 'Reading and writing' },
        { id: 'c', text: 'Working with numbers and data' },
        { id: 'd', text: 'Building or creating things with your hands' },
      ],
      streamSuggestion: { a: 'Science', b: 'Arts', c: 'Commerce', d: 'Vocational' }
    },
    {
      id: 3,
      text: "Which career path sounds most interesting to you?",
      options: [
        { id: 'a', text: 'Doctor or Engineer' },
        { id: 'b', text: 'Journalist or Lawyer' },
        { id: 'c', text: 'Chartered Accountant or Financial Analyst' },
        { id: 'd', text: 'Fashion Designer or Chef' },
      ],
      streamSuggestion: { a: 'Science', b: 'Arts', c: 'Commerce', d: 'Vocational' }
    }
  ]
};


// @route   GET api/quizzes/sample
// @desc    Get a sample aptitude quiz
// @access  Public
router.get('/sample', (req, res) => {
  try {
    res.json(sampleQuiz);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
