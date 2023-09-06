import React, { useState, useEffect } from "react";
import BlogPostLightbox from "./BlogPostLighbox";

export default function BlogPost({ title, body }) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const openLightBox = () => {
    setLightBoxOpen(true);
  };
  const closeLightBox = () => {
    setLightBoxOpen(false);
  };

  function disableBodyScroll() {
    document.body.style.overflow = "hidden";
  }

  // Enable body scroll when lightbox is closed
  function enableBodyScroll() {
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    if (lightBoxOpen) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
  }, [lightBoxOpen]);

  return (
    <div className="text-center flex flex-col justify-center overscroll-none w-screen max-w-md space-y-8 p-4 bg-snow shadow-md rounded-lg">
      {lightBoxOpen && (
        <BlogPostLightbox title={title} body={body} onClose={closeLightBox} />
      )}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600 truncate">{body}</p>

      <button
        onClick={openLightBox}
        className="rounded-md p-2 flex place-self-center items-center drop-shadow-md bg-pennblue hover:scale-[1.1] transition-all ease-in-out text-snow w-1/2 "
      >
        <div className="text-center text-snow hover:text-sunglow transition-all ease-in-out duration-500 mx-auto">
          Read more...
        </div>
      </button>
    </div>
  );
}
