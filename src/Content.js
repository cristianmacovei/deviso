import React, { useState, useEffect } from "react";

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

  return (
    <section className="h-screen flex">
      <div
        className={`w-1/2 p-4 ${isLeftOpen ? "bg-night" : "bg-jet"}`}
        onClick={handleLeftClick}
      >
        {/* Left half content */}
      </div>
      <div
        className={`w-1/2 p-4 ${isRightOpen ? "bg-jet" : "bg-night"}`}
        onClick={handleRightClick}
      >
        {/* Right half content */}
      </div>
      {isLeftOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-jet bg-opacity-50 flex items-center justify-center">
          <div className="relative">
            {/* Fullscreen lightbox content for the left half */}
            <button
              className="fixed top-24 right-24 p-6 text-snow border border-solid border-snow rounded"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}
      {isRightOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-jet bg-opacity-50 flex items-center justify-center">
          <div className="relative">
            {/* Fullscreen lightbox content for the left half */}
            <button
              className="fixed top-24 right-24 p-6 text-snow border border-solid border-snow rounded"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
