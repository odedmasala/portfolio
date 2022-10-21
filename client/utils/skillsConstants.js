import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiTailwindcss,
  SiTypescript,

} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiCss3, DiMongodb } from "react-icons/di";
import { FaGitSquare,FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const skillsConstants = [
  { name: "html 5", label: "html", icon: <SiHtml5 /> },
  { name: "css", label: "css", icon: <DiCss3 /> },
  { name: "Javascript", label: "Javascript", icon: <SiJavascript /> },
  { name: "Typescript", label: "Typescript", icon: <SiTypescript /> },
  { name: "React", label: "React", icon: <FaReact /> },
  { name: "Node js", label: "NodeJs", icon: <FaNodeJs /> },
  { name: "Express", label: "Express", icon: <SiExpress /> },
  { name: "Mongodb", label: "Mongodb", icon: <DiMongodb /> },
  { name: "Tailwind css", label: "Tailwind css", icon: <SiTailwindcss /> },
  { name: "MySQL", label: "MySQL", icon: <GrMysql /> },
  { name: "Git", label: "Git", icon: <FaGitSquare /> },
  { name: "Python", label: "Python", icon: <FaPython /> },
  { name: "Redux", label: "Redux", icon: <SiRedux /> },
];
