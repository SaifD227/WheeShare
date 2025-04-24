import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

import logo from "../assets/logo.png";
import logo2 from "../assets/Untitled-3 1.png";
import logo3 from "../assets/Welcome Back, 👋.png";

export function LoginFormDemo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/api/auth/signin", formData);
      console.log("Login successful:", response.data);
      
      // Store the token in cookies with proper security settings
      Cookies.set('token', response.data.token, { 
        expires: 1, // 1 day
        secure: true, // Only sent over HTTPS
        sameSite: 'strict' // Prevents CSRF attacks
      });
      
      // Store any additional user data if needed
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mx-auto w-full max-w-md rounded-none  p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <div className="flex gap-4 items-center justify-center space-x-2">
        <img src={logo} alt="image" className=" w-[45px] h-[32px]" />
        <img
          src={logo2}
          alt="image"
          className="  text-white text-3xl font-bold"
        />
      </div>

      <div className="flex flex-col items-center justify-center mt-[100px]">
        <img
          src={logo3}
          alt="image"
          className=" mr-12  text-white text-3xl font-bold"
        />

        <p className="w-[279px] mr-2  mt-2 text-gray-200 h-[25px] text-[15.39px] leading-[160%] tracking-[1%] font-medium opacity-50">
          Sign in to your dashboard & start tracking your analytics.
        </p>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        <form className="" onSubmit={handleSubmit}>
          <div className="mb-4 mt-10 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"></div>
          <LabelInputContainer className="mb-4  w-[298.61px]">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@gmail.com"
              className="bg-[#19161C] border border-[#343B4F] text-white outline-none"
              type="email"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4  w-[298.61px]">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              type="password"
              className="bg-[#19161C] border border-[#343B4F] outline-none text-white"
              required
            />
          </LabelInputContainer>
          <p className="text-white text-right mb-4">Forgot Password?</p>

          <div className="relative w-[298.61px] h-[40.02px] group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4B6BFB] to-[#9747FF] rounded-[9.24px] transition-opacity opacity-100 group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#9747FF] to-[#4B6BFB] rounded-[9.24px] transition-opacity opacity-0 group-hover:opacity-100"></div>
            <button
              className="relative w-full h-full font-medium text-white"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
              <BottomGradient />
            </button>
            <p className="text-white mt-6 text-right mb-4">Already have an account? <Link to="/signup">Sign up</Link></p>

          </div>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
