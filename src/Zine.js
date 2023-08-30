/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function ZineComponent() {
  function generateZineItems() {
    const zineItems = [
      {
        image: "../ZineItems/IMG_0449.jpg",
        description: "close-up front-three-quarters of the w208",
      },
      {
        image: "../ZineItems/IMG_0451.jpg",
        description: "the eye of the angel",
      },
      {
        image: "../ZineItems/IMG_0452.jpg",
        description: "the oldtimer",
      },
      {
        image: "../ZineItems/IMG_0456.jpg",
        description: "the impostor",
      },
      {
        image: "../ZineItems/IMG_0457.jpg",
        description: "the bloody 'martin",
      },
      {
        image: "../ZineItems/IMG_0460.jpg",
        description: "the future classic american",
      },
      {
        image: "../ZineItems/IMG_0463.jpg",
        description: "close-up rear-three-quarters of the w208",
      },
      {
        image: "../ZineItems/IMG_0465.jpg",
        description: "bavarian racing green",
      },
      {
        image: "../ZineItems/IMG_0466.jpg",
        description: "the dream catcher in the rye",
      },
      {
        image: "../ZineItems/IMG_0467.jpg",
        description: "skies' reflection",
      },
      {
        image: "../ZineItems/IMG_0468.jpg",
        description: "the rings of the lord",
      },
      {
        image: "../ZineItems/IMG_0469.jpg",
        description: "the stare of death",
      },
      {
        image: "../ZineItems/IMG_0470.jpg",
        description: "the fish face",
      },
      {
        image: "../ZineItems/IMG_0471.jpg",
        description: "the menace",
      },
      {
        image: "../ZineItems/IMG_0472.jpg",
        description: "the cute one",
      },
      {
        image: "../ZineItems/IMG_0474.jpg",
        description: "the four-eyed pirate",
      },
      {
        image: "../ZineItems/IMG_0477.jpg",
        description: "whipped cream",
      },
      {
        image: "../ZineItems/IMG_0478.jpg",
        description: "the flakes",
      },
      {
        image: "../ZineItems/IMG_0479.jpg",
        description: "transverse",
      },
      {
        image: "../ZineItems/IMG_0480.jpg",
        description: "the indestructible",
      },
      {
        image: "../ZineItems/IMG_0481.jpg",
        description: "the low one",
      },
      {
        image: "../ZineItems/IMG_0482.jpg",
        description: "the jap's heart",
      },
      {
        image: "../ZineItems/IMG_0483.jpg",
        description: "the jap long way from home",
      },
      {
        image: "../ZineItems/IMG_0484.jpg",
        description: "the modern jap",
      },
    ];

    return zineItems.map((item, index) => (
      <div key={index} className="w-screen h-auto">
        <div className="md:m-28 md:p-28 mt-32 w-screen sm:m-20">
          <img
            src={item.image}
            alt={`Image ${index + 1}`}
            className="object-cover"
          />
          <p className="mt-2 text-center text-snow text-xs sm:text-xl">
            {item.description}
          </p>
        </div>
      </div>
    ));
  }

  return (
    <div className="flex">
      <div className="grid grid-rows-1 grid-flow-col gap-4 p-4 overflow-x-auto">
        {generateZineItems()}
      </div>
    </div>
  );
}

export default ZineComponent;
