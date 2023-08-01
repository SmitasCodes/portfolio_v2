import React, { useEffect, useState } from "react";
import menuIcon from "./menu-icon.svg";
import { handleScroll } from "./scroll";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let sections = [
    { title: "HOME", href: "#home" },
    { title: "ABOUT", href: "#about" },
    { title: "PROJECTS", href: "#projects" },
    { title: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <nav className="sticky top-[-1px] z-20">
      <div className="flex items-center justify-between h-10 bg-darkBlue border-lightOrange border-b-2 relative">
        <ul
          className={`sm:flex sm:w-full sm:max-w-4xl sm:mx-auto sm:top-1/2 sm:transform sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 transition-all ease-in text-center  w-full absolute bg-darkBlue ${
            isOpen ? "top-[40px] " : "hidden"
          }`}
        >
          {sections.map((section) => (
            <li key={section.title} className="sm:ml-8 text-xl">
              <a
                href={section.href}
                className=" text-white text-base font-thin hover:text-lightOrange transition duration-30"
                onClick={() => setIsOpen(false)}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="ml-auto mr-2 sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={menuIcon} alt="menu-icon" className="w-7 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
