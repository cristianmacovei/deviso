/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function ZineComponent() {
  function generateZineItems() {
    const zineItems = [
      {
        image: "../ZineItems/IMG_0449.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0451.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0452.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0456.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0457.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0460.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0463.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0465.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0466.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0467.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0468.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0469.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0470.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0471.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0472.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0474.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0477.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0478.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0479.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0480.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0481.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0482.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0483.jpg",
        description: "",
      },
      {
        image: "../ZineItems/IMG_0484.jpg",
        description: "",
      },
    ];

    return zineItems.map((item, index) => (
      <div key={index} className="w-screen h-auto">
        <div className="w-2/3 sm:m-12">
          <img
            src={item.image}
            alt={`Image ${index + 1}`}
            className="object-cover"
          />
          <p className="mt-2 text-center text-[#FFFAFB] font-semibold text-xs sm:text-xl">
            {item.description || `img_${index + 1}.35mm`}
          </p>
        </div>
      </div>
    ));
  }

  return (
    <div className="flex">
      <div className="grid grid-rows-1 grid-flow-col gap-4 p-4 overflow-x-auto overflow-y-hidden">
        {generateZineItems()}
      </div>
    </div>
  );
}

export default ZineComponent;
