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
    <nav>
        <div className="flex items-center justify-between h-10 bg-darkBlue border-lightOrange border-b-2 ">
          <ul
            className={`sm:flex sm:w-full sm:max-w-4xl sm:mx-auto  transition-all ease-in text-center`}
          >
            {sections.map((section) => (
              <li key={section.title} className="sm:ml-8 text-xl">
                <a
                  href={section.href}
                  className=" hover:text-gray-400 duration-500  text-white text-base font-thin"
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
