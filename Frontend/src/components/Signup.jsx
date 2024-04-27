import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Use this for page navigation
import useFetch from "../hooks/useFetch";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [formdata, setFormdata] = useState({});

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  useEffect(() => {
    setFormdata({ name: fullname, email: email, password: password });
  }, [fullname, email, password]);

  const handleSignup = (e) => {
    e.preventDefault();

    useFetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formdata,
    });

    // Example: Basic email and password validation
    if (email && password.length >= 6) {
      setError(null);
    } else {
      setError("Please fill in all fields with valid information.");
    }
  };

  return (
    <div className="flex items-center px-4 justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center mb-4">{error}</div>
          )}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
            <div className="text-center mt-4">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </span>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
