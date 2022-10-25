import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ProjectItem } from "../index";
import { projectsList } from "../../utils";
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <p className="title-projects">Projects</p>
        <h2>Checkout What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsList?.map((elem, index) => (
            <ProjectItem project={elem} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
