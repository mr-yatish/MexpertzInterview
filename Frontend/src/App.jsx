import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { Header, Signup, Login, PageNotFound, InterviewForm, StudentDetails, AddStudentForm, InterviewDetails } from "./components";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Login setIsLoggedIn={setIsLogedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLogedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addStudentForm" element={<AddStudentForm />} />
        <Route path="/interviewForm" element={<InterviewForm />} />
        <Route path="/studentDetails" element={<StudentDetails />} />
        <Route path="/interviewDetails" element={<InterviewDetails />} />
      </Routes>
    </Router>
  );
}

// Component with header for login and signup pages
// function LoginAndSignUpHeader({ loginDetail }) {
//   const navigate = useNavigate();
//   return (
//     <>
//       {/* Header not rendered */}
//       <Routes>

//         {
//           loginDetail?.isLogedIn ? navigate('/studentDetails') : (<Route path="/" element={<Login />} />)
//         }
//         {
//           loginDetail?.isLogedIn ? navigate('/studentDetails') : (<Route path="/login" element={<Login />} />)
//         }
//       </Routes>
//     </>
//   );
// }

export default App;
