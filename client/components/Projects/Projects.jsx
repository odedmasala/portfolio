import Image from "next/image";
import Link from "next/link";
import React from "react";
// import youTubePro from "../../public/assets/projects/youtube2.jpg";
// import cryptoImg from "../../public/assets/projects/crypto.jpg";
// import netflixImg from "../../public/assets/projects/netflix.jpg";
// import twitchImg from "../../public/assets/projects/twitch.jpg";
import { ProjectItem } from "../index";
import { projectsList } from "../../utils";
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <p className="title-projects">Projects</p>
        <h2>Checkout What I've Built</h2>
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
