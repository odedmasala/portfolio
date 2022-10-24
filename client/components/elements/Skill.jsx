import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skill = ({ iconObject }) => {
  return (
    <>
      {iconObject.type ? (
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="">
              <FontAwesomeIcon icon={iconObject.icon} size="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>{iconObject.name}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="text-6xl">
            {iconObject.icon}
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>{iconObject.name}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skill;
