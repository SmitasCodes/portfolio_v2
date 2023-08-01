import React, { useState } from "react";
import portfolioImage from "./AboutData/portfolio_img.jpg";
import { frontEndIcons } from "./AboutData/frontEndIcons";
import { backEndIcons } from "./AboutData/backEndIcons";

const About = () => {
  const [activeTab, setActiveTab] = useState("front");

  // Function for setting active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      className="bg-white min-h-screen w-full max-w-screen-md mx-auto p-5"
      id="about"
    >
      <div className="mx-auto text-center my-20">
        <h2 className="text-4xl font-bold tracking-wider">ABOUT</h2>
        <span className="h-1 w-16 bg-darkBlue inline-block"></span>
      </div>
      <div className="flex flex-wrap">
        {/* Part of image and bio */}
        <div className="sm:w-1/2 w-full p-5">
          <img
            src={portfolioImage}
            alt="Portfolio image"
            className="w-52 h-52 rounded-full mx-auto mb-5"
          />
          <h3 className="mx-auto text-darkBlue text-center text-sm font-bold mb-5">
            I’m a Full-stack web developer based in Kaunas, Lithuania. I enjoy
            coding, solving problems and of course, I enjoy making beautiful and
            functional websites.
          </h3>
        </div>
        {/* Part of skills slider */}
        <div className="sm:w-1/2 w-full">
          <div className="w-80 h-64 bg-lightBlue mx-auto rounded-3xl p-2 ">
            {/* Actual slider code down below */}
            <div className="h-12 rounded-3xl flex bg-darkBlue">
              <div
                className={`w-1/2 rounded-3xl ${
                  activeTab == "front" ? "bg-lightOrange" : ""
                }`}
              >
                <a
                  className="text-white cursor-pointer h-full w-full flex items-center justify-center  rounded-3xl"
                  onClick={() => handleTabClick("front")}
                >
                  Front-end
                </a>
              </div>
              <div
                className={`w-1/2 rounded-3xl ${
                  activeTab == "back" ? "bg-lightOrange" : ""
                }`}
              >
                <a
                  className="text-white cursor-pointer h-full w-full flex items-center justify-center  rounded-3xl"
                  onClick={() => handleTabClick("back")}
                >
                  Back-end
                </a>
              </div>
            </div>
            {/* Conditionally rendered logos of technologies I learned */}
            <div className="w-full h-44 flex  mt-5 flex-wrap ">
              {activeTab === "front"
                ? frontEndIcons.map((icon) => {
                    return (
                      <div
                        className="w-1/4 text-center h-1/3 flex items-center justify-center"
                        key={icon.title}
                      >
                        <i
                          className={`${icon.class} text-white text-5xl`}
                          title={icon.title}
                        ></i>
                      </div>
                    );
                  })
                : backEndIcons.map((icon) => {
                    return (
                      <div
                        className="w-1/4 text-center h-1/3 flex items-center justify-center"
                        key={icon.title}
                      >
                        <i
                          className={`${icon.class} text-white text-5xl`}
                          title={icon.title}
                        ></i>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
