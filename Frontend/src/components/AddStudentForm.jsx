import React, { useEffect, useState } from 'react';

const AddStudentForm = () => {
  // Initial state for the form
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    status: '', // Default to empty
    batch: {
      name: '',
      startingDate: '',
      endingDate: '',
    },
  });

  const statusOptions = ['placed', 'not placed']; // Enum options for status
  const batchOptions = [
    { name: 'Batch 2021', startingDate: '2021-01-01', endingDate: '2021-12-31' },
    { name: 'Batch 2022', startingDate: '2022-01-01', endingDate: '2022-12-31' },
    { name: 'Batch 2023', startingDate: '2023-01-01', endingDate: '2023-12-31' },
  ]; // Example batch data
  const fetchData = async () => {
    try {
      const requestOptions = {
        method: 'POST', // or 'PUT', 'PATCH', etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      };
      const response = await fetch('http://localhost:4000/student/createStudent', requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const fetchedData = await response.json();
      console.log(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('batch.')) {
      const batchField = name.split('.')[1];
      setFormData({
        ...formData,
        batch: {
          ...formData.batch,
          [batchField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setFormData({
      name: '',
      college: '',
      status: '', // Default to empty
      batch: {
        name: '',
        startingDate: '',
        endingDate: '',
      },
    })
  };

  return (
    <div className="flex justify-center px-4 items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Add Student Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="college" className="block text-sm font-medium text-gray-700">
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.college}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              {statusOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="batchName" className="block text-sm font-medium text-gray-700">
              Batch
            </label>
            <select
              id="batchName"
              name="batch.name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.batch.name}
              onChange={handleChange}
              required
            >
              <option value="">Select Batch</option>
              {batchOptions.map((batch, index) => (
                <option key={index} value={batch.name}>
                  {batch.name}
                </option>
              ))}
            </select>
          </div>
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

export default AddStudentForm;
