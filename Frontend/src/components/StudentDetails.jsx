import React, { useEffect, useState } from 'react';

const StudentDetails = () => {
  // Initial state with student details
  const [students, setStudents] = useState([]); // You can start with an empty array to simulate "no data"
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("ENtered");
        const response = await fetch('http://localhost:4000/student/getAllStudent');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const fetchedData = await response.json();
        console.log(fetchedData);
        setStudents(fetchedData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])
  return (
    <div className="flex justify-center px-4 items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl -mt-12 pb-10 bg-white px-6 h-[450px] rounded-lg shadow-md overflow-y-auto relative">

        {/* Sticky Header Section */}
        <div className="sticky py-5 top-0 z-10 bg-white">
          <h2 className="text-2xl font-bold text-center mb-2">Student Details</h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">College</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Table Body Section */}
        {students.length > 0 ? (
          <table className="w-full table-auto">
            <tbody>
              {students.map((student, i) => (
                <tr key={i}>
                  <td className="px-4 py-2 text-sm text-gray-600">{i+1}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{student.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{student.college}</td>
                  <td className="px-4 py-2 text-sm text-gray-600">{student.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-500">No student details available.</div>
        )}
      </div>
    </div>
  );
};

export default StudentDetails;
