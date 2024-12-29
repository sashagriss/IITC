import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { UserWithoutId } from "../../types/userType.tsx";
import { SignUpApi } from "../../services/userService.tsx";

interface SignUpProps {
  isLogIn: boolean;
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<SignUpProps> = ({ isLogIn, setIsLogIn }) => {
  const [name, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [plan, setPlan] = useState<"Standard" | "Gold" | "Platinum">(
    "Standard"
  );

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newUser: any) => SignUpApi(newUser),
  });

  const handlePlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPlan(event.target.value as "Standard" | "Gold" | "Platinum");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: UserWithoutId = {
      name,
      email,
      password,
      plan,
    };

    try {
      await mutation.mutateAsync(newUser);
      console.log("User signed up successfully");
      setIsLogIn(true);
      navigate("/");
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-blue-900 to-black text-white flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-pulse">
          Join Businance
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Create an account and take your journey to success!
        </p>
      </header>

      <div className="w-full max-w-lg mt-8 bg-gray-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="w-full p-3 mt-1 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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

          <div>
            <label htmlFor="plan" className="block text-sm font-medium">
              Select Plan:
            </label>
            <select
              id="plan"
              name="plan"
              value={plan}
              onChange={handlePlanChange}
              className="w-full p-3 mt-1 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Standard">Standard</option>
              <option value="Gold">Gold</option>
              <option value="Platinum">Platinum</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transition-all duration-300"
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Signing Up..." : "Sign Up"}
          </button>

          {mutation.isError && (
            <div className="text-red-500 text-center mt-4 text-sm">
              {mutation.error instanceof Error
                ? "This email is probably already in use. Try a different one."
                : "Something went wrong!"}
            </div>
          )}
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-500 hover:underline hover:text-green-400"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
