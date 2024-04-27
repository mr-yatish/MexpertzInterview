import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Using icons for hamburger and close

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className={`container mx-auto flex justify-between items-center p-4 ${menuOpen? 'flex-col gap-5' : null}`}>
        <div className="text-xl font-bold">
            <img className='w-36 md:w-48 ' src="src/assets/white_logo_pic.png" alt="" />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <HiX className="text-2xl absolute right-5 top-5 cursor-pointer" /> // Close icon
          ) : (
            <HiMenu className="text-2xl cursor-pointer" /> // Hamburger icon
          )}
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:block`} // Show links based on menuOpen
        >
          <ul className={`flex flex-col md:flex-row lg:flex-row md:space-x-4 ${menuOpen? 'gap-4 cursor-pointer mb-5 text-center font-semibold' : null}`}>
            <li>
              <Link to="/addStudentForm" className="hover:underline" onClick={() => setMenuOpen(false)}>
              Add New Student
              </Link>
            </li>
            <li>
              <Link to="/studentDetails" className="hover:underline" onClick={() => setMenuOpen(false)} >
              List Of Students
                
              </Link>
            </li>
            <li>
              <Link
                to="/interviewForm"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Create An Interview
              </Link>
            </li>
            <li>
              <Link
                to="/interviewDetails"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
                >
                  List Of Interview
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
