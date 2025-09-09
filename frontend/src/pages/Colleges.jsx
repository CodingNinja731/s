import React, { useState, useEffect } from 'react';
import { getColleges, createCollege } from '../api';

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for the form
  const [newCollegeName, setNewCollegeName] = useState('');
  const [newCollegeCity, setNewCollegeCity] = useState('');

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await getColleges();
        setColleges(response.data);
      } catch (err) {
        setError('Failed to fetch colleges. Please make sure the backend is running.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchColleges();
  }, []);

  const handleAddCollege = async (e) => {
    e.preventDefault();
    // Note: This is a simplified form for demonstration.
    // A real form would have more fields and better validation.
    const newCollegeData = {
      name: newCollegeName,
      location: { city: newCollegeCity, state: 'State', pincode: '000000' },
      medium: 'English'
    };

    try {
      // For this to work, a user must be logged in and the token stored in localStorage.
      const response = await createCollege(newCollegeData);
      setColleges([...colleges, response.data]);
      setNewCollegeName('');
      setNewCollegeCity('');
    } catch (err) {
      setError('Failed to add college. Are you logged in?');
      console.error(err);
    }
  };

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Colleges</h1>

      {/* Add College Form */}
      <div className="mb-8 p-4 border rounded-lg bg-white">
        <h2 className="text-2xl font-bold mb-4">Add a New College</h2>
        <form onSubmit={handleAddCollege} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newCollegeName}
            onChange={(e) => setNewCollegeName(e.target.value)}
            placeholder="College Name"
            className="p-2 border rounded flex-grow"
            required
          />
          <input
            type="text"
            value={newCollegeCity}
            onChange={(e) => setNewCollegeCity(e.target.value)}
            placeholder="City"
            className="p-2 border rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Add College
          </button>
        </form>
      </div>

      {/* College List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div key={college._id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{college.name}</h2>
            <p className="text-gray-600">{college.location.city}, {college.location.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
