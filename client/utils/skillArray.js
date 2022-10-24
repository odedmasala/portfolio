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
import {ImDatabase} from "react-icons/im"

export const skillArray = [
  { name: "HTML", label: "html",type:"FontAwesomeIcon", icon:"fa-brands fa-html5" },
  { name: "css", label: "css",type:"FontAwesomeIcon", icon: "fa-brands fa-css3-alt" },
  { name: "Javascript", label: "Javascript",type:"FontAwesomeIcon", icon: "fa-brands fa-js" },
  { name: "React", label: "React",type:"FontAwesomeIcon", icon: "fa-brands fa-react" },
  { name: "database", label: "database", icon:<ImDatabase/> },
  { name: "Node js", label: "NodeJs",type:"FontAwesomeIcon", icon: "fa-brands fa-node" },
  { name: "Express", label: "Express", icon: <SiExpress /> },
  { name: "Mongodb", label: "Mongodb", icon: <DiMongodb /> },
  { name: "MySQL", label: "MySQL", icon: <GrMysql /> },
  { name: "Tailwind css", label: "Tailwind css", icon: <SiTailwindcss /> },
  { name: "Git", label: "Git",type:"FontAwesomeIcon", icon: "fa-brands fa-square-git"  },
  { name: "Python", label: "Python",type:"FontAwesomeIcon", icon: "fa-brands fa-python" },
  { name: "Redux", label: "Redux", icon: <SiRedux /> },
];
