import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import logo2 from "../assets/Untitled-3 1.png";

export function SignupFormDemo() {
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
      // basurl
      const response = await axios.post("http://localhost:4000/api/auth/signup", formData);
      console.log("Signup successful:", response.data);
      navigate("/"); // or wherever you want to navigate
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <div className="flex gap-4 items-center justify-center space-x-2">
        <img src={logo} alt="logo" className="w-[45px] h-[32px]" />
        <img src={logo2} alt="logo text" className="text-white text-3xl font-bold" />
      </div>

      <div className="flex flex-col items-center justify-center mt-[100px]">
        <h2 className="text-white mr-10 text-[28px] font-bold mb-1">
          Create an Account!
        </h2>

        <p className="w-[299px] ml-2 text-gray-200 h-[25px] text-[15.39px] leading-[160%] tracking-[1%] font-medium opacity-50">
          Create a new account here.
        </p>

        {error && (
          <p className="text-red-500 mb-4 text-sm w-[298.61px] text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4 w-[298.61px]">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              autoFocus={true}
              onChange={handleChange}
              placeholder="Example@gmail.com"
              className="bg-[#19161C] border border-[#343B4F] outline-none text-white"
              required
            />
          </LabelInputContainer>

          <LabelInputContainer className="mb-4 w-[298.61px]">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="bg-[#19161C] border border-[#343B4F] outline-none text-white"
              required
              minLength={8}
            />
    
          </LabelInputContainer>

          <button
            className="group/btn relative block w-[298.61px] h-[40.02px] rounded-[9.24px] bg-gradient-to-r from-[#4B6BFB] to-[#9747FF] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
