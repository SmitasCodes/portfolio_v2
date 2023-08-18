import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [curr, setCurr] = useState(0);

  // All the controls of carousel down below

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative">
      {/* Images Div */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((image) => (
          <img src={image} />
        ))}
      </div>
      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <div
          className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer  transition-transform duration-300 p-2"
          onClick={prev} title="previous"
        >
          <svg
            className="w-4 h-4 dark:text-white "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </div>
        <div
          className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer   transition-transform duration-300 "
          onClick={next} title="next"
        >
          <svg
            className="w-4 h-4 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </div>
      </div>
      {/* Indicator section of current photo */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2 h-10">
          {images.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-neutral-700 rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
