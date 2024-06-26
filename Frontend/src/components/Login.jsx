import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming you're using React Router

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      };
      const response = await fetch('http://localhost:4000/user/login', options);
      console.log(response);
      const fetchedData = await response.json();
      return fetchedData;

    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    setError(null)
    e.preventDefault();
    const user = await fetchData();
    if (user.message == 'Incorrect Password') return setError('Incorrect Password')
    if (user.message == 'User Not Found!') return setError('Invalid Email')
    setIsLoggedIn(true);
    navigate('/studentDetails');

  };

  return (
    <div className="flex items-center px-4 justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
