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
          className={`text-sm fixed md:right-24 right-8 bottom-20 md:text-xl drop-shadow-md rounded-full bg-snow text-persianblue transition-all ease-in-out duration-200 hover:text-sunglow  ${
            showButton
              ? "opacity-100 transition-opacity duration-700 ease-in-out"
              : "opacity-0"
          } `}
        >
          <p className="px-4 py-5">TOP</p>
        </button>
      )}
      <footer className="bg-pennblue">
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
              className="hover:cursor-pointer text-snow transition-all ease-in-out duration-200 hover:text-sunglow"
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
                href="https://www.github.com/cristianmacovei"
                target="_blank"
                rel="noreferrer noopener nofollower"
                className="text-snow transition-all ease-in-out duration-200 hover:text-sunglow"
              >
                <svg
                  width="26px"
                  height="26px"
                  viewBox="0 0 48 48"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {}
                  <path
                    class="cls-1"
                    d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
                    fill="none"
                    stroke="#FFFAFB"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/cristiaanmacovei/"
                target="_blank"
                rel="noreferrer noopener nofollower"
                className="text-snow transition-all ease-in-out duration-200 hover:text-sunglow"
              >
                <svg
                  width="26px"
                  height="26px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                    fill="#FFFAFB"
                  />
                  <path
                    d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                    fill="#FFFAFB"
                  />
                  <path
                    d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                    fill="#FFFAFB"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                    fill="#FFFAFB"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/deviso.cars"
                target="_blank"
                rel="noreferrer noopener nofollower"
                className="text-snow transition-all ease-in-out duration-200 hover:text-sunglow"
              >
                <svg
                  width="26px"
                  height="26px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#FFFAFB"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="#FFFAFB"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    fill="#FFFAFB"
                  />
                </svg>
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
                className="text-snow transition-all ease-in-out duration-200 hover:text-sunglow"
              >
                about
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#portfolio");
                }}
                className="text-snow transition-all ease-in-out duration-200 hover:text-sunglow"
              >
                portfolio
              </a>
              <a
                href="#blog"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#blog");
                }}
                className="text-snow transition-all ease-in-out duration-200 hover:text-sunglow"
              >
                blog
              </a>
              <a
                href="#contact"
                rel="noreferrer noopener nofollower"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTarget("#contact");
                }}
                className="text-snow transition-all ease-in-out duration-200 hover:text-sunglow"
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
