import React from "react";

export default function Lightbox({ title, body, onClose }) {
  return (
    <div className="fixed overscroll-none inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-pennblue opacity-70"></div>
      <div className="relative bg-snow p-4 w-4/5 max-w-xl rounded-lg drop-shadow-md z-50">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-700">{body}</p>
      </div>
      <button
        className="fixed top-16 right-2 md:top-16 md:right-24 p-4 text-snow border border-solid border-snow rounded"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
}
