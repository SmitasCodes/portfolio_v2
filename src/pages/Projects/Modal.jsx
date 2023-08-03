import React, { useEffect, useRef, useState } from "react";
import "./bbz.css";

const Modal = ({ modalState }) => {
  const [closing, setClosing] = useState(false);
  const modalRef = useRef(null);

  const closingHandler = () => {
    setClosing(true);
    setTimeout(() => {
      modalState(false);
    }, 295);
  };
  
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closingHandler();
    }
  };

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
          className={`w-full max-w-md h-64 bg-white z-30 duration-300 ${
            !closing ? "animate-modal-in-scale" : "animate-modal-out-scale"
          }
  `}
          ref={modalRef}
        >
          <header className="h-10 flex justify-between px-3 items-center border-black border-b-2">
            <h2 className="text-lg">Title</h2>
            <button className="text-lg" onClick={() => closingHandler()}>
              X
            </button>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Modal;
