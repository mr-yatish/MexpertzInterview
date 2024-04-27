import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Header, Signup, Login, PageNotFound , InterviewForm, StudentDetails, AddStudentForm} from "./components";



function App() {

  // useLocation()

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addStudentForm" element={<AddStudentForm />} />
        <Route path="/interviewForm" element={<InterviewForm />} />
        <Route path="/studentDetails" element={<StudentDetails />} />
        {/* <Route path="/message" element={<MessagePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
