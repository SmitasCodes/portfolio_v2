import React, { useState } from "react";
import Card from "./Card";
import { projectsData } from "./ProjectsData/projectsData";
import Modal from "./Modal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  const modalStateHandler = (state) => {
    setShowModal(state);
  };

  return (
    <section className="bg-lightGray" id="projects">
      <div className="w-full px-5 py-24 max-w-screen-md mx-auto">
        {/* Title part of a section */}
        <div className="mx-auto text-center mb-10 ">
          <h2
            className="text-4xl font-bold tracking-wider"
            data-aos="slide-left"
            data-aos-duration="800"
          >
            PROJECTS
          </h2>
          <span
            className="h-1 w-16 bg-darkBlue inline-block "
            data-aos="zoom-in"
            data-aos-duration="800"
          ></span>
        </div>
        {/* Flex container containg all the projects */}
        <div
          className="flex flex-wrap"
          data-aos="slide-right"
          data-aos-duration="800"
        >
          {projectsData.map((project) => {
            return (
              <Card key={project.title}>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full max-w-sm h-full transition-opacity duration-700 group-hover:opacity-0"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center transition-transform duration-700 group">
                  <div
                    className=" -translate-y-20 group-hover:-translate-y-10
          group-hover:opacity-100 transition duration-700 opacity-0 text-center"
                  >
                    <h2 className="text-xl mb-1">{project.title}</h2>
                    <h3 className="text-lightOrange">{project.technologies}</h3>
                  </div>

                  <button
                    className="text-lightOrange text-sm border-lightOrange border-2 px-4 py-1  translate-y-20 group-hover:translate-y-0 
          group-hover:opacity-100
          transition duration-600 opacity-0 hover:bg-lightOrange hover:text-white"
                    onClick={() => setShowModal(true)}
                  >
                    LEARN MORE
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      {/* Calling modal if it's true */}
      {showModal ? (
        <>
          <Modal modalState={modalStateHandler} />
        </>
      ) : null}
    </section>
  );
};

export default Projects;
7;
