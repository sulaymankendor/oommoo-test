"use client";
import GoogleLogo from "@/svgs/GoogleLogo";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import FacebookLogo from "@/svgs/FacebookLogo";
import XLogo from "@/svgs/XLogo";
import { Dispatch, SetStateAction, useContext } from "react";
import { AuthModalSliderContext } from "./AuthenticationModal";

function Login() {
  const setAuthModalSlider = useContext(AuthModalSliderContext);
  return (
    <div className="w-full pl-4">
      <div>
        <p className="text-[40px] font-thin italic">Welcome Back</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="mt-3 mb-3">
            <label className="text-[12px]">Email Address</label>
            <Input
              placeholder="Email Address"
              className=" rounded-full mt-1 text-[12px] border-black border-[0.5px]"
              type="email"
            />
          </div>
          <div>
            <label className="text-[12px]">Password</label>
            <Input
              placeholder="Password"
              className="mb-5 rounded-full text-[12px] border-black border-[0.5px] "
              type="password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="keep-me-logged-in" className="w-5 h-5" />
              <label
                htmlFor="keep-me-logged-in"
                className="text-[11px] ml-[8px] font-[550] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Keep me logged in
              </label>
            </div>
            <Button
              variant={"lightBlue"}
              className="text-[12px]"
              size={"lightBlue"}
              type="submit"
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center mt-6 -mb-4 ">
        <p className="text-[14px] text-gray-600">Not a member yet?</p>
        <button
          className="font-bold ml-1"
          onClick={() => {
            setAuthModalSlider?.setAuthModalSlider("-translate-x-[54.5%]");
          }}
        >
          Sign Up
        </button>
      </div>
      <div className="mt-10">
        <Button
          variant={"outline"}
          className="w-full rounded-full mb-2 hover:bg-gray-200 justify-center"
        >
          <div className="flex items-center w-[28%] justify-between">
            <GoogleLogo />
            <p className="text-[12.5px] font-medium">Log in with Google</p>
          </div>
        </Button>
        <Button className="w-full rounded-full mb-2 bg-blue-500 hover:bg-blue-600 justify-center">
          <div className="flex items-center w-[28%] justify-between h-[21px]">
            <FacebookLogo width="w-7" height="h-[25px]" />
            <p className="text-white text-[12.5px] font-medium">
              Log in with Google
            </p>
          </div>
        </Button>
        <Button className="w-full rounded-full bg-black hover:bg-gray-900 text-white justify-center">
          <div className="flex items-center w-[28%] justify-between">
            <XLogo width="w-5" height="h-5" />
            <p className="text-[12.5px] font-medium">Log in with Google</p>
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Login;
