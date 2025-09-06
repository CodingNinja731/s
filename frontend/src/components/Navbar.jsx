import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">DGP</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/colleges" className="hover:text-gray-300">Colleges</Link>
          <Link to="/courses" className="hover:text-gray-300">Courses</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
