import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-white shadow-md p-6 md:max-w-full mx-auto" id="contact">
      <h2 className="mb-4 text-persianblue text-center sm:text-3xl text-md font-semibold">
        say hello!
      </h2>
      <form className="mr-20">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            name <span className="text-red-700">*</span>
          </label>
          <input
            placeholder="john"
            required
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            surname <span className="text-red-700">*</span>
          </label>
          <input
            placeholder="doe"
            required
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            email address <span className="text-red-700">*</span>
          </label>
          <input
            placeholder="email@example.com"
            required
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            message <span className="text-red-700">*</span>
          </label>
          <textarea
            placeholder="...type your message here"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-persianblue py-2 px-4 rounded-md hover:bg-pennblue transition-colors w-full"
        >
          <div className="text-center text-snow hover:text-sunglow transition-all ease-in-out duration-500 mx-auto">
            submit
          </div>
        </button>
      </form>
    </div>
  );
}
