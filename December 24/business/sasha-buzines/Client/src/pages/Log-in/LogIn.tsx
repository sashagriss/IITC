import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../services/userService.tsx";

interface LogInProps {
  isLogIn: boolean;
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LogInProps> = ({ isLogIn, setIsLogIn }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (userCredentials: { email: string; password: string }) =>
      loginApi(userCredentials),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userCredentials = {
      email,
      password,
    };

    try {
      await mutation.mutateAsync(userCredentials);
      console.log("User logged in successfully");
      setIsLogIn(true);
      navigate("/");
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-blue-900 to-black text-white flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-pulse">
          Welcome Back
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Log in to your account and explore new opportunities with Businance!
        </p>
      </header>

      <div className="w-full max-w-lg mt-8 bg-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-1 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 mt-1 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transition-all duration-300"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Logging In..." : "Login"}
          </button>

          {mutation.isError && (
            <div className="text-red-500 text-center mt-4 text-sm">
              {mutation.error instanceof Error
                ? "Error: The email or password is incorrect. Please try again."
                : "Something went wrong!"}
            </div>
          )}
        </form>

        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-green-500 hover:underline hover:text-green-400"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
