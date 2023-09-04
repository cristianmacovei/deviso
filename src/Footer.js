import React from "react";
import { useState, useEffect } from "react";

export default function Footer({ showButton }) {
  return (
    <>
      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`text-sm fixed md:right-24 right-8 bottom-20 md:text-xl drop-shadow-md rounded-full bg-[#0C40B3] text-[#FFC745] hover:text-white  ${
            showButton
              ? "opacity-100 transition-opacity duration-700 ease-in-out"
              : "opacity-0"
          } `}
        >
          <p className="p-6">top</p>
        </button>
      )}
      <footer className="bg-[#062058] text-white">
        <div className="container py-8 px-4 grid grid-rows-4 md:grid-rows-2 place-items-center md:p-8 md:grid-cols-2 md:gap-2 gap-2">
          {/* Contact Information */}
          <div className="text-sm text-center">
            <h3 className="text-xs md:text-xl font-semibold my-4">contact</h3>
            <p>deviso.cars@gmail.com</p>
            <p>+40 (720) 000-000</p>
          </div>
          {/* Social Media Icons */}
          <div className="">
            <h3 className="text-xs md:text-xl font-semibold my-4 text-center">
              socials
            </h3>
            <div className="flex justify-evenly text-center md:space-x-4 py-2">
              <a href="#" className="text-gray-300hover:text-white">
                <i className="fab fa-facebook-f">fb</i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter">linkedin</i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram">insta</i>
              </a>
            </div>
          </div>

          {/* Copyright and Navigation Links */}
          <div className="flex flex-col md:col-span-1 justify-center">
            <p className="flex text-center justify-evenly">nav</p>
            <nav className="flex justify-center space-x-4 py-4 justify-evenly">
              <a href="#" className="text-gray-300 hover:text-white">
                home
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                about
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                portfolio
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                contact
              </a>
            </nav>
            <p className="text-center text-sm my-4">
              &copy; {new Date().getFullYear()} devISO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
