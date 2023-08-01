import React from "react";
import Card from "./Card";
import { projectsData } from "./ProjectsData/projectsData";

const Projects = () => {
  return (
    <div className="bg-lightGray" id="projects">
      <div className="min-h-screen w-full p-5 max-w-screen-md mx-auto">
        {/* Title part of a section */}
        <div className="mx-auto text-center my-20">
          <h2 className="text-4xl font-bold tracking-wider">PROJECTS</h2>
          <span className="h-1 w-16 bg-darkBlue inline-block"></span>
        </div>
        {/* Flex container containg all the projects */}
        <div className="flex flex-wrap">
          {projectsData.map((project) => {
            return (
              <Card>
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full transition-opacity duration-500 group-hover:opacity-0"
                />

                <div class="absolute inset-0 flex flex-col justify-center items-center transition-transform duration-500 group">
                  <div
                    className=" -translate-y-20 group-hover:-translate-y-10
          group-hover:opacity-100 transition duration-300 opacity-0 text-center"
                  >
                    <h2 className="text-xl mb-1">{project.title}</h2>
                    <h3 className="text-lightOrange">{project.technologies}</h3>
                  </div>

                  <button
                    className="text-lightOrange text-sm border-lightOrange border-2 px-4 py-1  translate-y-20 group-hover:translate-y-0 
          group-hover:opacity-100
          transition duration-500 opacity-0 hover:bg-lightOrange hover:text-white"
                  >
                    LEARN MORE
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
