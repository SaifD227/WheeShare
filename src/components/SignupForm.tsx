import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";

import logo from "../assets/logo.png";
import logo2 from "../assets/Untitled-3 1.png";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
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
        <h2 className="text-white mr-10 text-[28px] font-bold mb-1">
          Create an Account!
        </h2>

        <p className="w-[299px] ml-2  text-gray-200 h-[25px] text-[15.39px] leading-[160%] tracking-[1%] font-medium opacity-50">
          Create a new account here.
        </p>

        <form className="" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2"></div>
          <LabelInputContainer className="mb-4  w-[298.61px]">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Example@gmail.com"
              className="bg-[#19161C] border border-[#343B4F] outline-none text-white"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4  w-[298.61px]">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="At least 8 characters"
              type="password"
              className="bg-[#19161C] border border-[#343B4F] outline-none text-white"
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block w-[298.61px] h-[40.02px] rounded-[9.24px] bg-gradient-to-r from-[#4B6BFB] to-[#9747FF] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Sign Up
          </button>
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
