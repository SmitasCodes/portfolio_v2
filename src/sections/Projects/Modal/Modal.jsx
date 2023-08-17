import React, { useEffect, useRef, useState } from "react";
import "./Modal_animation.css";
import Carousel from "./Carousel";

const Modal = ({ modalState, modalProject }) => {
  const [closing, setClosing] = useState(false);
  const modalRef = useRef(null);

  // Setting state of closing and calling modolState after timeout is passed, timeout is just to finish animation
  const closingHandler = () => {
    setClosing(true);
    setTimeout(() => {
      modalState();
    }, 295);
  };

  // Function for canceling modal when we click outside of it
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closingHandler();
    }
  };

  // Setting timeout for event listener , resolving bug when modal gets instaly canceled while trying to open it. Also clearing event listener once it gets canceled
  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 300);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {" "}
      <div className="fixed inset-0 flex justify-center items-center z-30">
        <div
          className={`absolute w-full h-full bg-slate-900 opacity-70 z-20 animate-modal-in-opacity`}
        ></div>
        <div
          className={`w-full max-w-md mx-5 bg-white z-30 duration-300 ${
            !closing ? "animate-modal-in-scale" : "animate-modal-out-scale"
          }
  `}
          ref={modalRef}
        >
          {/* Header */}
          <header className="h-10 flex justify-between px-2 items-center border-black border-b-2">
            <h2 className="text-lg">{modalProject.title}</h2>
            <button
              className="rounded-full border-white hover:border-darkBlue border-2 p-1 transition-colors duration-500"
              onClick={() => closingHandler()}
            >
              <svg
                className="h-4 w-4"
                viewBox="-0.5 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21.32L21 3.32001"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 3.32001L21 21.32"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </header>

          {/* Carousel */}
          <Carousel images={modalProject.images} />

          {/* Description */}
          <div className="px-2 py-4">
            <p className="text-sm tracking-wide text-center font-semibold">{modalProject.description}</p>
          </div>

          {/* Repository and live preview buttons pages */}
          <div className="flex justify-center pb-3">
            <a
              href={modalProject.github}
              className="p-1 px-4 text-base rounded-lg border-darkBlue text-darkBlue border-2 hover:border-white transition-colors duration-500 font-semibold mr-2 cursor-pointer"
              target="_blank"
            >
              Repository
            </a>
            <a
              href={modalProject.vercel}
              className="border-darkBlue text-darkBlue border-2 px-4 text-base rounded-lg flex items-center justify-center font-semibold hover:border-white transition-colors duration-500  cursor-pointer"
              target="_blank"
            >
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
