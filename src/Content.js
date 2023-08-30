/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import ZineComponent from "./Zine";

export default function Content() {
  const [isLeftOpen, setLeftOpen] = useState(false);
  const [isRightOpen, setRightOpen] = useState(false);

  const promptText = `return zineItems.map((item, index) => (<div key={index} className="w-screen h-auto">
        <div className="m-28 p-28">
          <img
            src={item.image}
            alt={"Image /{index + 1}"}
            className="object-cover"
          />
          <p className="mt-2 text-center text-snow">{item.description}</p>
        </div>
      </div>
    ));`;

  function handleLeftClick() {
    setLeftOpen(!isLeftOpen);
    if (isRightOpen) {
      setRightOpen(false);
    }
  }

  function handleRightClick() {
    setRightOpen(!isRightOpen);
    if (isLeftOpen) {
      setLeftOpen(false);
    }
  }

  function handleClose() {
    setLeftOpen(false);
    setRightOpen(false);
    enableBodyScroll();
  }

  // Disable body scroll when lightbox is open
  function disableBodyScroll() {
    document.body.style.overflow = "hidden";
  }

  // Enable body scroll when lightbox is closed
  function enableBodyScroll() {
    document.body.style.overflow = "auto";
  }

  // Add event listener when component mounts
  useEffect(() => {
    if (isLeftOpen || isRightOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [isLeftOpen, isRightOpen]);

  return (
    <div className="h-full text-sm grid md:flex md:text-xl flex bg-[#0C40B3]">
      <div
        className={`p-4 w-full grid grid-col hover:scale-[1.01] transition ease-in hover:bg-[#062058] ${
          isLeftOpen ? "bg-tiffanyblue" : ""
        }`}
        onClick={handleLeftClick}
      >
        <div className="p-12 md:p-24">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-snow font-light text-2xl flex flex-col items-center text-center p-8 align-center">
              check out{" "}
              <span className="font-semibold text-[#FFC745] italic">
                this half
              </span>{" "}
              for some grainy shots
            </h1>
            <img
              className="justify-center p-8 object-cover"
              src="./ZineItems/devisologo.png"
            />
          </div>
        </div>
      </div>
      <div
        className={`p-4 w-full grid grid-col hover:scale-[1.01] transition ease-in hover:bg-[#062058] ${
          isRightOpen ? "bg-tiffanyblue" : ""
        }`}
        onClick={handleRightClick}
      >
        <div className="p-12 md:p-24">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-snow font-light text-2xl flex flex-col items-center text-center p-8 align-center">
              check out{" "}
              <span className="font-semibold text-[#FFC745] italic">
                this half
              </span>{" "}
              for my web dev projects
            </h1>
            <img className="justify-center" src="./ZineItems/codePrompt.png" />
          </div>
        </div>
      </div>

      {isLeftOpen && (
        <div className="bg-[#062058] transition ease-in fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div className="h-full relative mt-16 overflow-x-auto">
            <ZineComponent />
            <button
              className="fixed top-2 right-4 md:top-12 md:right-12 p-4 text-snow border border-solid border-snow rounded"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}

      {isRightOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex bg-night items-center justify-center">
          <div className="relative">
            {/* Fullscreen lightbox content for the left half */}
            <h1></h1>
            <button
              className="fixed top-2 right-2 md:top-12 md:right-12 p-4 text-snow border border-solid border-snow rounded"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
