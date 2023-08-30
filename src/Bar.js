import React, { useState } from "react";

export default function Bar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  }

  return (
    <nav className="flex fixed top-0 w-screen justify-center drop-shadow-md py-4 px-8 bg-snow z-40">
      <div className="flex items-center justify-center">
        <span className="text-[#0c40b3] text-xl font-semibold">
          {"{devISO}"}
        </span>
      </div>
    </nav>
  );
}
