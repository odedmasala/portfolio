import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ iconObject }) => {
  return (
    <>
      <div className="p-6 shadow-md rounded-xl dark:shadow-gray-700 hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center">
          <div className="text-5xl md:text-7xl flex justify-center">{iconObject.icon}</div>
          <div className="flex flex-col items-center justify-center text-center">
            <h3>{iconObject.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
