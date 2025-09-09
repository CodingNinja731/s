import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <div className="bg-gray-800 text-white py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Digital Guidance Platform</h1>
        <p className="text-xl mb-8">
          Your one-stop destination to explore courses, find colleges, and map your career path.
        </p>
        <Link
          to="/colleges"
          className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Explore Colleges
        </Link>
      </div>

      <div className="py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Find Your Stream</h3>
            <p>Take our aptitude quiz to discover the best stream for you after Class 10/12.</p>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Discover Colleges</h3>
            <p>Search our directory of government colleges by location, course, and facilities.</p>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-bold mb-2">Visualize Your Career</h3>
            <p>See the potential outcomes of each degree, from jobs to higher studies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
