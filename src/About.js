import React, { useState } from "react";

export default function About() {
  return (
    <div className=" h-auto mt-14" id="about">
      <div className="h-full grid md:grid-cols-6">
        <div className="md:col-span-3 col-span-6">
          <div className="flex flex-col justify-evenly align-center h-screen items-center">
            <h1 className="text-[48px] font-light italic bg-clip-text text-transparent bg-night">
              welcome!
            </h1>
            <img
              src={require("./me.png")}
              width={300}
              className="scale-75 sm:scale-100 border-0 hover:scale-[1.1] rounded-full  transition ease-in"
            />
          </div>
        </div>
        <div className="h-full sm:mx-8 mx-8 sm:col-span-2">
          <div className="flex justify-center align-center items-center h-screen items-center">
            <div className="text-sm lg:text-md xl:text-lg grid grid-row-2 flex text-justify justify-items-center text-center">
              <p className="text-transparent bg-clip-text bg-night">
                my name is{" "}
                <span className="font-semibold text-[#0C40B3]">cristian, </span>
                web developer and{" "}
                <span className="font-semibold text-[#0C40B3]">
                  analogue photography{" "}
                </span>
                enthusiast. while the two seem very different and far apart from
                each other, I find there is a certain{" "}
                <span className="font-semibold text-[#0C40B3]">
                  tangent point{" "}
                </span>
                between the two: taking a step back and thinking through every{" "}
                <span className="font-semibold text-[#0C40B3]">detail </span>
                of the composition.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <p className="text-transparent bg-clip-text bg-night">
                it's true that digital photography is fast and you get virtually
                infinite retakes, but the cost of a duplicate in{" "}
                <span className="font-semibold text-[#0C40B3]">
                  analogue photography{" "}
                </span>{" "}
                is high, so every capture must be very well thought, analysed
                and composed. i found the{" "}
                <span className="font-semibold text-[#0C40B3]">
                  same approach{" "}
                </span>{" "}
                is best for{" "}
                <span className="font-semibold text-[#0C40B3]">
                  web development,{" "}
                </span>{" "}
                as mistakes can easily cost a lot of time and effort.
                <br></br>
                <br></br>
                <br></br>
                talking is for free, so{" "}
                <span className="font-semibold text-[#0C40B3]">
                  hit me up{" "}
                </span>{" "}
                and tell me about your project!
              </p>
              <br></br>
              <br></br>
              <br></br>
              <button
                className="align-center rounded-full w-48 bg-snow text-[#0C40B3] drop-shadow-lg hover:drop-shadow-2xl hover:scale-[1.1] transition ease-in font-medium h-16 text-lg italic"
                onClick={() => {
                  const scrollTarget = document.getElementById("contact");
                  scrollTarget.scrollIntoView({ behavior: "smooth" });
                }}
              >
                say hello!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
