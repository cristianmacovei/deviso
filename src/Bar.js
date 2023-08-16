import React, { useState } from "react";

export default function Bar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  }

  return (
    <nav className="flex fixed top-0 w-screen justify-center py-4 px-8 bg-gradient-to-r from-persiangreen to-night">
      <div className="flex items-center justify-center">
        <span className="text-snow text-lg font-semibold">{"{devISO}"}</span>
      </div>
    </nav>
  );
}
