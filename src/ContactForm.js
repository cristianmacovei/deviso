import React from "react";

function ContactForm() {
  return (
    <div
      className="bg-white shadow-md p-6 md:max-w-full mx-auto"
      id="contact-form"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">say hello!</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            name <span className="text-red-700">*</span>
          </label>
          <input
            placeholder="John"
            required
            type="text"
            className="w-full px-4 py-2 w-3/4 border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            surname <span className="text-red-700">*</span>
          </label>
          <input
            placeholder="Doe"
            required
            type="text"
            className="w-full px-4 py-2 w-3/4  border rounded-md focus:ring focus:ring-indigo-300"
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
            className="w-full px-4 py-2 border w-3/4  rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            message <span className="text-red-700">*</span>
          </label>
          <textarea
            placeholder="...type your message here"
            required
            className="w-full px-4 py-2 border w-3/4  rounded-md focus:ring focus:ring-indigo-300"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#0c40b3] text-snow py-2 px-4 w-3/4 rounded-md hover:bg-[#062058] transition-colors w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
