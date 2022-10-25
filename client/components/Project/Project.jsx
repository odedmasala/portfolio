import Image from "next/image";
import React from "react";
import Link from "next/link"

import { RiRadioButtonFill } from "react-icons/ri";
const Project = ({ proData }) => {
  return (
    <div className="Project-item">
      <div>
        <div className="background-container">
          <div className="background-image bg-black/70" />
          {proData?.backgroundImg && (
            <Image
              className="image"
              layout="fill"
              objectFit="cover"
              src={`/${proData.backgroundImg}`}
              alt="/"
            />
          )}

          <div className="background-title">
            <h2 className="py-2">{proData?.title}</h2>
            <h3>{proData?.addTech}</h3>
          </div>
        </div>

        <div className="details-container md:grid-cols-5 ">
          <div className="description-container col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>{proData?.proDescription}</p>
            {proData.proHref && (
              <Link href={proData.proHref} target="_blank" rel="noreferrer">
                <button className="px-8 py-2 mt-4 mr-8 btn info-btn ml-6">
                  Code
                </button>
              </Link>
            )}
            {proData.liveDemo && (
              <Link href={proData.liveDemo} target="_blank" rel="noreferrer">
                <button className="px-8 py-2 mt-4 btn info-btn ml-6">
                  Demo
                </button>
              </Link>
            )}
          </div>
          <div className="Technologies-container col-span-4 md:col-span-1 shadow-lg shadow-gray-400 dark:shadow-gray-800 border border-[#1211116d] rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {proData?.addTechList.map((elem,index) => (
                  <p key={index} className=" py-2 flex items-center">
                    <RiRadioButtonFill key={index} className="pr-1" /> {elem}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Link href="/">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
