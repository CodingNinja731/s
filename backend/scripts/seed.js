require('dotenv').config({ path: '../.env' }); // Adjust path to find .env in root
const mongoose = require('mongoose');
const College = require('../models/College');
const Course = require('../models/Course');

const sampleColleges = [
  { name: 'Govt. Degree College, Anantapur', location: { city: 'Anantapur', state: 'Andhra Pradesh', pincode: '515001' }, medium: 'English' },
  { name: 'Govt. City College, Hyderabad', location: { city: 'Hyderabad', state: 'Telangana', pincode: '500002' }, medium: 'English' },
  { name: 'Presidency College, Chennai', location: { city: 'Chennai', state: 'Tamil Nadu', pincode: '600005' }, medium: 'English' },
];

const sampleCourses = [
  { name: 'Bachelor of Arts (B.A.)', stream: 'Arts', careerPaths: ['Journalist', 'Teacher', 'Lawyer'] },
  { name: 'Bachelor of Science (B.Sc.)', stream: 'Science', careerPaths: ['Scientist', 'Researcher', 'Data Analyst'] },
  { name: 'Bachelor of Commerce (B.Com)', stream: 'Commerce', careerPaths: ['Accountant', 'Financial Analyst', 'Banker'] },
];

const seedDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error('MONGO_URI is not defined in your environment variables.');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected for seeding...');

    // Clear existing data
    await College.deleteMany({});
    await Course.deleteMany({});
    console.log('Cleared existing colleges and courses.');

    // Insert new data
    await College.insertMany(sampleColleges);
    await Course.insertMany(sampleCourses);
    console.log('Sample data has been inserted.');

  } catch (err) {
    console.error('Error during seeding:', err);
  } finally {
    // Disconnect from the database
    await mongoose.disconnect();
    console.log('MongoDB disconnected.');
  }
};

seedDB();
