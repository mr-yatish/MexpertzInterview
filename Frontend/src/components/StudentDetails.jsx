import React, { useEffect, useState } from 'react';

const StudentDetails = () => {
  // Initial state with student details
  const [students, setStudents] = useState([]);
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

  function convertArrayOfObjectsToCSV(array) {
    if (!array || !Array.isArray(array) || array.length === 0) {
      return '';
    }

    const delimiter = ',';
    const keys = Object.keys(array[0]);

    let csvContent = '';

    // Write header
    csvContent += keys.join(delimiter) + '\n';

    // Write values
    array.forEach(obj => {
      const values = keys.map(key => {
        let value = obj[key];
        if (typeof value === 'object' && value !== null) {
          value = JSON.stringify(value);
        }
        return String(value);
      });
      csvContent += values.join(delimiter) + '\n';
    });

    return csvContent;
  }
  const downloadCSV = (array, filename) => {
    const csvContent = convertArrayOfObjectsToCSV(array);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };


  return (
    <div className="flex justify-center px-4 items-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-4xl -mt-12 pb-10 bg-white px-6 h-[450px] rounded-lg  shadow-md overflow-y-auto relative">

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
                  <td className="px-4 py-2 text-sm text-gray-600">{i + 1}</td>
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
        <button onClick={() => {
          downloadCSV(students, 'data.csv')
        }} className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Download Data</button>
      </div>
    </div>
  );
};

export default StudentDetails;
