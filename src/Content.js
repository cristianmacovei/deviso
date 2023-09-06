/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import ZineComponent from "./Zine";
import Portfolio from "./Portfolio";

export default function Content() {
  const [isLeftOpen, setLeftOpen] = useState(false);
  const [isRightOpen, setRightOpen] = useState(false);

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

  // FUNCTION FOR THE github PROJECTS PART
  const username = "cristianmacovei";
  const token = "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";

  return (
    <div
      className="h-full text-sm grid md:flex md:text-xl flex scrollbar-hide bg-persianblue"
      id="portfolio"
    >
      <div
        className={`p-4 w-full grid grid-col hover:scale-[1.01] transition ease-in hover:bg-pennblue ${
          isLeftOpen ? "bg-tiffanyblue" : ""
        }`}
        onClick={handleLeftClick}
      >
        <div className="p-12 md:p-24">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-snow font-light text-2xl flex flex-col items-center text-center p-8 align-center">
              check out{" "}
              <span className="font-semibold text-sunglow italic">
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
        className={`p-4 w-full grid grid-col hover:scale-[1.01] transition ease-in hover:bg-pennblue ${
          isRightOpen ? "bg-tiffanyblue" : ""
        }`}
        onClick={handleRightClick}
      >
        <div className="p-12 md:p-24">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-snow font-light text-2xl flex flex-col items-center text-center p-8 align-center">
              check out{" "}
              <span className="font-semibold text-sunglow italic">
                this half
              </span>{" "}
              for my web dev projects
            </h1>
            <img className="justify-center" src="./ZineItems/codePrompt.png" />
          </div>
        </div>
      </div>

      {isLeftOpen && (
        <div className="bg-pennblue fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div className="h-full relative mt-16 overflow-x-auto flex flex-wrap content-center">
            <ZineComponent />
            <button
              className="fixed top-16 right-2 md:top-16 md:right-24 p-4 text-snow border border-solid border-snow rounded"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}

      {isRightOpen && (
        <div className="bg-pennblue fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
          <div className="h-full relative mt-20 overflow-x-auto items-center flex content-center">
            {/* Fullscreen lightbox content for the left half */}
            <Portfolio username={username} token={token} />

            <button
              className="fixed top-16 right-2 md:top-16 md:right-24 p-4 text-snow border border-solid border-snow rounded"
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
