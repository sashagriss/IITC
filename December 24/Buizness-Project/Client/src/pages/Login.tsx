import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Send Login data to API");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-700 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-orange-500">
          Log In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-1 text-black bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-200"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 mt-1 text-black bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-center text-white bg-orange-500 rounded-md hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-400 hover:underline hover:text-orange-300"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
