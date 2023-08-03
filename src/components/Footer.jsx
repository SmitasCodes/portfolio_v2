import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkBlue ">
      <div
        className="w-full max-w-sm h-full mx-auto "
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        {/* Div where logos of my socials are stored */}
        <div className="text-center pt-8 text-white text-4xl mb-3">
          <a href="https://github.com/SmitasCodes/" target="_blank">
            <i
              className="devicon-github-original hover:text-lightOrange transition-colors duration-500"
              title="Github"
            >
              {" "}
            </i>
          </a>

          <a
            href="https://www.linkedin.com/in/airidas-%C5%A1mitas-a83001224"
            target="_blank"
          >
            <i
              title="LinkedIn"
              className="devicon-linkedin-plain hover:text-lightOrange transition-colors duration-500"
            ></i>
          </a>
        </div>
        {/* Copyright */}
        <div className="text-center pb-8">
          <h3 className="text-white text-sm">
            Airidas Šmitas <span className="text-lightOrange">&copy;2023</span>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
