import React from "react";

const Landing = () => {
  return (
    <section className="flex w-full h-screen items-center justify-center text-center bg-lightBlue " id="home">
      <div>
        <h2
          className="text-white text-lg sm:text-3xl mb-4
        "
        >
          Hello, I’m <span className="text-lightOrange">Airidas Šmitas</span>.
          <br /> I’m a full-stack web developer.
        </h2>
        <a className="text-lightOrange text-sm sm:text-base px-4 py-1 border-solid border-2 border-lightOrange inline-block group transition-colors duration-500 hover:text-white hover:bg-lightOrange" href="#projects">
          View my work <span className="group-hover:rotate-90 inline-block text-lg transition-transform duration-500">{"\u2192"}</span>
        </a>
      </div>
    </section>
  );
};

export default Landing;
