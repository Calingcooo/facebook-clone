import React, { useState } from "react";

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
  "Fundraisers",
];

const secondArr = [
  "Instagram",
  "Threads",
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
  const [defaultLanguage, setDefaultLanguage] = useState("English (US)");

  return (
    <div className="flex flex-col justify-evenly px-80 py-5">
      <p className="flex flex-row items-center w-full justify-start text-sm border-b mb-3 pb-3">
        {languageFooter.map((lang, index) => {
          return (
            <p
              key={index}
              href="#"
              className={`text-sm text-gray-500  ${
                lang === "English (US)"
                  ? ""
                  : "hover:underline cursor-pointer hover:text-gray-600 ml-5"
              }`}
            >
              {lang}
            </p>
          );
        })}
        <button className="text-2xl bg-gray-100 px-2 font-bold text-gray-500 ml-5">
          +
        </button>
      </p>
      <div className="flex flex-col justify-between">
        <p className="flex flex-row justify-between">
          {firstArr.map((name, index) => {
            return (
              <a
                key={index}
                className="text-gray-500 hover:text-gray-600 hover:underline cursor-pointer text-sm"
              >
                {name}
              </a>
            );
          })}
        </p>
        <p className="flex flex-row justify-between">
          {secondArr.map((name, index) => {
            return (
              <a
                key={index}
                className="text-gray-500 hover:text-gray-600 hover:underline cursor-pointer text-sm"
              >
                {name}
              </a>
            );
          })}
        </p>
        <p className="flex flex-row justify-start">
          {thirdArr.map((name, index) => {
            return (
              <a
                key={index}
                className={`text-gray-500 hover:text-gray-600 hover:underline cursor-pointer text-sm ${
                  index !== 0 ? "pl-5" : ""
                }`}
              >
                {name}
              </a>
            );
          })}
        </p>
      </div>
      <p className="pt-2 text-gray-500 md:text-[11px] font-semibold">
        Metanga © 2024
      </p>
    </div>
  );
};

export default Footer;
