import React from "react";
import { skillArray } from "../../utils/skillArray";
import Skill from "../elements/Skill";


const Skills = () => {
  
  return (
    <div id="skills" className="skills lg:h-screen ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillArray?.map((elem ,index)=><Skill iconObject={elem} key={index}/>)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
