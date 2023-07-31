import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let sections = [
    { title: "HOME", href: "#home" },
    { title: "ABOUT", href: "#about" },
    { title: "PROJECTS", href: "#projects" },
    { title: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0">
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
                className=" text-white text-base font-thin hover:text-lightOrange transition duration-300"
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
          <img
            src="../../public/menu-icon.svg"
            alt="menu-icon"
            className="w-7 h-5"
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
