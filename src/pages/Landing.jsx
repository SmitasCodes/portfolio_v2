import React from "react";

const Landing = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center text-center bg-lightBlue">
      <div>
        <h2
          className="text-white text-lg sm:text-3xl mb-3
        "
        >
          Hello, I’m <span className="text-lightOrange ">Airidas Šmitas</span>.
          <br /> I’m a full-stack web developer.
        </h2>
        <button className="text-lightOrange text-sm sm:text-base px-4 py-1 border-solid border-2 border-lightOrange">
          View my work {"\u2192"}
        </button>
      </div>
    </div>
  );
};

export default Landing;
