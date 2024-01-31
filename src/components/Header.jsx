import React, { useState } from "react";
import {
  UilSearch,
  UilStore,
  UilArrowLeft,
  UilUserCircle,
  UilEstate,
  UilPresentationPlay,
} from "@iconscout/react-unicons";
import header_logo from "../assets/header_logo.webp";

const Header = () => {
  const [searchInputFocus, setSearchInputFocus] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center bg-zinc-800 px-5 py-2 h-14">
      <div className="flex gap-2 h-full w-80">
        {searchInputFocus ? (
          <UilArrowLeft size="30" className="h-full text-zinc-400" />
        ) : (
          <img src={header_logo} className="h-full" />
        )}
        <div className="flex items-center w-full">
          {searchInputFocus ? null : (
            <UilSearch size="20" className="absolute ml-2 text-zinc-400" />
          )}
          <input
            className={`bg-neutral-700 rounded-full h-full w-full text-md focus:outline-none ${
              searchInputFocus ? "px-5" : "pl-8"
            }`}
            placeholder="Search Facebook"
            onFocus={() => setSearchInputFocus(true)}
            onBlur={() => setSearchInputFocus(false)}
          />
        </div>
      </div>
      <div className="flex gap-20">
        <UilEstate />
        <UilPresentationPlay />
        <UilStore />
        <UilUserCircle />
      </div>
      <div className="flex">Header</div>
    </div>
  );
};

export default Header;
