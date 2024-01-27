import React, { useState } from "react";
import { UilPlus } from "@iconscout/react-unicons";

const languageFooter = [
  "English (US)",
  "Filipino",
  "Bisaya",
  "Español",
  "日本語",
  "한국어",
  "中文(简体)",
  "العربية",
  "Português (Brasil)",
  "Français (France)",
  "Deutsch",
];

const firstArr = [
  "Sign Up",
  "Log In",
  "Messenger",
  "Facebook Lite",
  "Video",
  "Places",
  "Games",
  "Marketplace",
  "Meta Pay",
  "Meta Store",
  "Meta Quest",
  "instagram",
  "threads",
  "Fundraisers",
];

const secondArr = [
  "Services",
  "Voting Information Center",
  "Privacy Policy",
  "Privacy Center",
  "Groups",
  "About",
  "Create ad",
  "Create Page",
  "Developers",
  "Careers",
  "Cookies",
  "Ad choices",
];

const thirdArr = ["Terms", "Help", "Uploading & Non-Users"];

const Footer = () => {

  return (
    <footer className="bg-white w-full">
      <div className="flex flex-col justify-evenly py-5   max-w-[980px] m-auto">
        <div className="flex flex-row items-center w-full justify-start text-sm">
          {languageFooter.map((lang, index) => {
            return (
              <p
                key={index}
                href="#"
                className={`text-[0.9em] text-gray-500  ${
                  lang === "English (US)"
                    ? ""
                    : "hover:underline cursor-pointer hover:text-gray-600 ml-5"
                }`}
              >
                {lang}
              </p>
            );
          })}
          <button className="bg-gray-100 px-2 py-1 text-gray-800 ml-5 border">
            <UilPlus size="15" />
          </button>
        </div>
        <hr className="text-black mt-2 mb-2" />
        <div className="flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            {firstArr.map((name, index) => {
              return (
                <a
                  key={index}
                  className="text-gray-500 hover:text-gray-600 hover:underline cursor-pointer text-[12px]"
                >
                  {name}
                </a>
              );
            })}
          </div>
          <div className="flex flex-row justify-between">
            {secondArr.map((name, index) => {
              return (
                <a
                  key={index}
                  className="text-gray-500 hover:text-gray-600 hover:underline cursor-pointer text-[12px]"
                >
                  {name}
                </a>
              );
            })}
          </div>
          <div className="flex flex-row justify-start">
            {thirdArr.map((name, index) => {
              return (
                <a
                  key={index}
                  className={`text-gray-500 hover:text-gray-600 hover:underline cursor-pointer md:text-[12px] ${
                    index !== 0 ? "pl-3" : ""
                  }`}
                >
                  {name}
                </a>
              );
            })}
          </div>
        </div>
        <p className="mt-5 text-gray-500 md:text-[11px] font-semibold">
          Metanga © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
