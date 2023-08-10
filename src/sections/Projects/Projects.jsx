import React, { useState } from "react";
import Card from "./Card";
import { projectsData } from "./ProjectsData/projectsData";
import Modal from "./Modal/Modal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = (project) => {
    setShowModal(true);
    setSelectedProject(project);
  };

  return (
    <section className="bg-lightGray" id="projects">
      <div className="w-full px-5 py-24 max-w-screen-md mx-auto">
        {/* Title part of a section */}
        <div className="mx-auto text-center mb-10 ">
          <h2
            className="text-4xl font-bold tracking-wider"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            PROJECTS
          </h2>
          <span
            className="h-1 w-16 bg-darkBlue inline-block "
            data-aos="zoom-in"
            data-aos-duration="700"
          ></span>
        </div>
        {/* Flex container containg all the projects */}
        <div
          className="flex flex-wrap"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {projectsData.map((project) => {
            return (
              <Card key={project.title}>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full max-w-sm h-full transition-opacity duration-700 group-hover:opacity-0"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div
                    className=" -translate-y-20 group-hover:-translate-y-20
          group-hover:opacity-100 transition duration-700 opacity-0 text-center "
                  >
                    <h2 className="text-xl mb-1">{project.title}</h2>
                    <h3 className="text-lightOrange">{project.technologies}</h3>
                  </div>

                  <button
                    className="text-lightOrange text-sm border-lightOrange border-2 px-4 py-1  translate-y-20 group-hover:translate-y-0 
          group-hover:opacity-100
          transition-transform duration-700 opacity-0 hover:bg-lightOrange hover:text-white"
                    onClick={() => {
                      openModal(project);
                    }}
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
      {showModal && (
        <Modal modalState={closeModal} modalProject={selectedProject} />
      )}
    </section>
  );
};

export default Projects;

