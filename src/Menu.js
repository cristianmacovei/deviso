import React, { useState } from "react";

export default function Menu() {
  return (
    <aside className="md:block absolute justify-items-end h-screen hidden z-40">
      {/* <div className="flex justify-end flex-wrap items-center pt-4 pl-8 pb-4 mr-2 h-screen relative"> */}
      <div className="overflow-auto flex flex-col right-0 justify-evenly fixed h-full bg-[snow] drop-shadow-md">
        {/* <div className="rotate-90 pl-16 pr-16 pb-16 text-center hover:transition hover:rotate-[75deg] hover:duration-20"> */}
        <a
          href="#"
          onClick={""}
          className="text-[#0C40B3] px-4 text-center rotate-90 hover:rotate-[75deg] hover:scale-[1.1] hover:duration-20 transition ease-in-out"
        >
          About
        </a>
        {/* </div> */}
        {/* <div className="rotate-90 pl-16 pr-16 pb-16 text-center hover:transition hover:rotate-[75deg] hover:duration-20"> */}
        <a
          href="#"
          onClick={""}
          className="text-[#0C40B3] px-4 text-center rotate-90 hover:rotate-[105deg] hover:scale-[1.1] hover:duration-20 transition ease-in-out"
        >
          Portfolio
        </a>
        {/* </div> */}
        {/* <div className="rotate-90 pl-16 pr-16 pb-16 text-center hover:transition hover:rotate-[75deg] hover:duration-20"> */}
        <a
          href="#"
          onClick={""}
          className="text-[#0C40B3] px-4 text-center rotate-90 hover:rotate-[75deg] hover:scale-[1.1] hover:duration-20 transition ease-in-out"
        >
          Blog
        </a>
        {/* </div> */}
        {/* <div className="rotate-90 pl-16 pr-16 pb-16 text-center hover:transition hover:rotate-[75deg] hover:duration-20"> */}
        <a
          href="#"
          onClick={""}
          className="text-[#0C40B3] px-4 text-center rotate-90 hover:rotate-[105deg] hover:scale-[1.1] hover:duration-20 transition ease-in-out"
        >
          Contact
        </a>
        {/* </div> */}
      </div>
      {/* </div> */}
    </aside>
  );
}
// border-night border-2 rounded border
