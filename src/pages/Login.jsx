import { useState, useEffect } from "react";
import fb_logo from "../assets/fb_logo.png";
import Button from "../components/styled-components/Button";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-full px-80">
      <div className="w-1/4">
        <img src={fb_logo} className="" />
        <h1 className="font-bold text-xl">
          Connect with friends and the world around you on Facebook.
        </h1>
      </div>
      <div className="flex flex-col max-w-[396px] border px-5 py-5 justify-center">
        <input
          type="email"
          name="email"
          placeholder="Email or Phone number"
          className="border mt-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border mt-2"
        />
        <Button
          buttonName={"login"}
          buttonStyle={
            "bg-blue-500 hover:bg-blue-400 font-bold rounded-sm mt-2 text-white capitalize"
          }
        />
        <a
          href="#"
          className="capitalize text-blue-500 hover:underline hover:text-blue-400"
        >
          forgot password?
        </a>
        <hr className="" />
        <button className="bg-green-500 hover:bg-green-400 font-bold rounded-sm mt-2 text-white capitalize">
          create new account
        </button>
      </div>
    </div>
  );
};

export default Login;
