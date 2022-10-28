import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ project: { proName, title, tech, backgroundImg } }) => {
  return (
    <div className="ProjectItem shadow-xl shadow-gray-700 dark:shadow-gray-600 group hover:bg-gradient-to-r from-[#1c1e1fa7] to-[#1d7755]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={`/${backgroundImg}`}
        width={2000}
        height={1400}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text_center">
          {title}
        </h3>
        <p className="font-bold text-[#aba2a2]">{tech}</p>
        <Link href={`/project/${proName}`}>
          <a className="btn info-btn">more info</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
