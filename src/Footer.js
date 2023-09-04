/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "react";

export default function Footer({ showButton, scrollToTarget }) {
  return (
    <>
      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`text-sm fixed md:right-24 right-8 bottom-20 md:text-xl drop-shadow-md rounded-full bg-snow text-[#0C40B3] transition-all ease-in-out duration-200 hover:text-[#FFC745]  ${
            showButton
              ? "opacity-100 transition-opacity duration-700 ease-in-out"
              : "opacity-0"
          } `}
        >
          <p className="px-4 py-5">TOP</p>
        </button>
      )}
      <footer className="bg-[#062058]">
        <div className="container py-8 px-4 grid grid-rows-4 md:grid-rows-2 place-items-center md:p-8 md:grid-cols-2 md:gap-2 gap-2">
          {/* Contact Information */}
          <div className="text-sm text-center">
            <h3 className="text-xs md:text-xl font-semibold my-4 text-snow">
              contact
            </h3>
            <div
              onClick={() => {
                const subject = "Website inquiry!";
                const mailToLink = `mailto:deviso.cars@gmail.com?subject=${encodeURIComponent(
                  subject
                )}`;
                window.location.href = mailToLink;
              }}
              className="hover:cursor-pointer text-snow transition-all ease-in-out duration-200 hover:text-[#FFC745]"
            >
              deviso.cars@gmail.com
            </div>
            <p className="text-snow">+40 (720) 000-000</p>
          </div>
          {/* Social Media Icons */}
          <div className="">
            <h3 className="text-xs md:text-xl font-semibold text-snow my-4 text-center">
              socials
            </h3>
            <div className="flex justify-evenly text-center md:space-x-4 py-2">
              <a
                href="#"
                className="text-snow transition-all ease-in-out duration-200 hover:text-[#FFC745]"
              >
                <i className="fab fa-facebook-f">fb</i>
              </a>
              <a
                href="#"
                className="text-snow transition-all ease-in-out duration-200 hover:text-[#FFC745]"
              >
                <i className="fab fa-twitter">linkedin</i>
              </a>
              <a
                href="#"
                className="text-snow transition-all ease-in-out duration-200 hover:text-[#FFC745]"
              >
                <i className="fab fa-instagram">insta</i>
              </a>
            </div>
          </div>

          {/* Copyright and Navigation Links */}
          <div className="flex flex-col md:col-span-1 justify-center">
            <p className="flex text-center font-semibold text-snow justify-evenly">
              nav
            </p>
            <nav className="flex justify-center space-x-4 py-4 justify-evenly">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#about");
                }}
                className="text-snow transition-all ease-in-out duration-200 hover:text-[#FFC745]"
              >
                about
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#portfolio");
                }}
                className="text-snow transition-all ease-in-out duration-200 hover:text-[#FFC745]"
              >
                portfolio
              </a>
              <a
                href="#blog"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#blog");
                }}
                className="text-snow transition-all ease-in-out duration-200 hover:text-[#FFC745]"
              >
                blog
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#contact");
                }}
                className="text-snow transition-all ease-in-out duration-200 hover:text-[#FFC745]"
              >
                contact
              </a>
            </nav>
            <p className="text-center text-snow text-sm my-4">
              &copy; {new Date().getFullYear()} devISO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
