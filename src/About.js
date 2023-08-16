import React, { useState } from "react";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-persiangreen to-night overflow-hidden h-screen mt-14 rounded-lg">
      <div className="grid grid-rows-2 md:grid-cols-6">
        <div className="md:col-span-3 col-span-6">
          <div className="flex flex-col justify-evenly align-center h-screen items-center bg-snow/25">
            <h1 className="text-[48px] font-bold italic bg-clip-text text-transparent bg-tiffanyblue">
              WELCOME!
            </h1>
            <img
              src={require("./me.png")}
              width={300}
              className="scale-50 sm:scale-100 border-0 rounded-full hover:scale-110 transition ease-in-out"
            />
          </div>
        </div>
        <div className="h-full sm:mx-8 mx-8 sm:col-span-2">
          <div className="flex justify-center align-center items-center h-screen items-center">
            <div className="text-sm lg:text-md xl:text-lg grid grid-row-2 flex text-justify justify-items-center text-center">
              <p className="text-transparent bg-clip-text bg-tiffanyblue/40">
                Hi, my name is{" "}
                <span className="font-semibold text-tiffanyblue">
                  Cristian,{" "}
                </span>
                web developer and{" "}
                <span className="font-semibold text-tiffanyblue">
                  analogue photography{" "}
                </span>
                enthusiast. While the two seem very different and far apart from
                each other, I find there is a certain{" "}
                <span className="font-semibold text-tiffanyblue">
                  tangent point{" "}
                </span>
                between the two: taking a step back and thinking through every{" "}
                <span className="font-semibold text-tiffanyblue">detail </span>
                of the composition.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <p className="text-transparent bg-clip-text bg-tiffanyblue/40">
                While digital photography is fast and you get virtually infinite
                retakes, the cost of a duplicate in{" "}
                <span className="font-semibold text-tiffanyblue">
                  analogue photography{" "}
                </span>{" "}
                is high, so every capture must be very well thought, analysed
                and composed. I found the{" "}
                <span className="font-semibold text-tiffanyblue">
                  same approach{" "}
                </span>{" "}
                is best for{" "}
                <span className="font-semibold text-tiffanyblue">
                  web development{" "}
                </span>{" "}
                also, as recoding from scratch is always a setback. Talking is
                for free, so{" "}
                <span className="font-semibold text-tiffanyblue">
                  hit me up{" "}
                </span>{" "}
                and tell me about your project!
              </p>
              <br></br>
              <br></br>
              <br></br>
              <button className="align-center rounded-full w-48 bg-tiffanyblue font-medium h-16 text-lg italic">
                Say hello!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
