import React, { useState } from 'react';

const InterviewForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    companyName: '',
    date: '',
    studentId: '',
  });

  const [error, setError] = useState(null); // State for error handling

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.companyName || !formData.date || !formData.studentId) {
      setError('Please fill in all fields.');
      return;
    }

    setError(null);

    console.log('Form submitted:', formData); // Placeholder for form submission logic
  };

  return (
    <div className="flex items-center px-4 justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Interview</h2>
        <form onSubmit={handleSubmit}>
          {/* Company Name */}
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Student ID */}
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.studentId}
              onChange={handleChange}
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-sm text-center mb-4">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterviewForm;
