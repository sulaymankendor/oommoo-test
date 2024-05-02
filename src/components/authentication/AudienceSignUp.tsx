"use client";
import EyeSlash from "@/svgs/EyeSlash";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import SelectGender from "./SelectGender";
import SelectLocation from "./SelectLocation";
import { useState } from "react";
import Eye from "@/svgs/Eye";
import SelectProfilePicture from "./SelectProfilePicture";

function AudienceSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="w-[50%] px-10">
      <p className="text-4xl font-thin italic text-center text-gray-800">
        Sign up Audience account
      </p>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SelectProfilePicture />
          <div className="mt-1">
            <label>First Name</label>
            <Input
              placeholder="First Name"
              className=" rounded-full mt-1 text-[12px] border-black border-[0.5px]"
              type="email"
            />
          </div>
          <div className="mt-6">
            <label>Last Name</label>
            <Input
              placeholder="Last Name"
              className=" rounded-full mt-1 text-[12px] border-black border-[0.5px]"
              type="email"
            />
          </div>
          <div className="mt-6">
            <label>Email Address</label>
            <Input
              placeholder="Last Name"
              className=" rounded-full mt-1 text-[12px] border-black border-[0.5px]"
              type="email"
            />
          </div>
          <div className="mt-6">
            <label>Password</label>
            <div className="border-black border-[0.5px] rounded-full flex items-center">
              <Input
                placeholder="Last Name"
                className=" rounded-full text-[12px] border-none"
                type={`${showPassword ? "text" : "password"}`}
              />
              <button
                className="mr-4"
                onClick={() => {
                  setShowPassword((showPassword) => !showPassword);
                }}
                type="button"
              >
                {showPassword ? <Eye /> : <EyeSlash />}
              </button>
            </div>
          </div>
          <div className="mt-6">
            <label>Confirm Password</label>
            <div className="border-black border-[0.5px] rounded-full flex items-center">
              <Input
                placeholder="Last Name"
                className=" rounded-full text-[12px] border-none"
                type={`${showConfirmPassword ? "text" : "password"}`}
              />
              <button
                className="mr-4"
                onClick={() => {
                  setShowConfirmPassword(
                    (showConfirmPassword) => !showConfirmPassword
                  );
                }}
                type="button"
              >
                {showConfirmPassword ? <Eye /> : <EyeSlash />}
              </button>
            </div>
          </div>
          <div className="mt-6">
            <label>Age</label>
            <Input
              placeholder="Last Name"
              className=" rounded-full mt-1 text-[12px] border-black border-[0.5px]"
              type="email"
            />
          </div>
          <div className="mt-6">
            <label>Gender</label>
            <SelectGender />
          </div>
          <div className="mt-6 flex flex-col">
            <label>Location</label>

            <SelectLocation />
          </div>
          <div className="mt-6">
            <label>Which show will you review first</label>
            <Input
              placeholder="Which show will you review first"
              className=" rounded-full mt-1 text-[12px] border-black border-[0.5px]"
              type="email"
            />
          </div>
          <div className="w-[50%] mx-auto mt-7">
            <Button className="rounded-full w-full py-3 bg-[#1D9FFF]  hover:bg-sky-600 font-semibold">
              Create Audience Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AudienceSignUp;
