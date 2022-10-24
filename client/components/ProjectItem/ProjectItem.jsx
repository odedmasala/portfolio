import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({project:{proName, title, tech,backgroundImg}}) => {
 return (
    <div className='ProjectItem shadow-xl shadow-gray-700 group hover:bg-gradient-to-r from-[#09c97fa7] to-[#09c97f]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} width={2000} height={1400} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={"/"}>
            <p className='text-center py-3 rounded-lg bg-[#ffffff] text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
        <button className="btn btn-info btn-secondary py-3 text-lg rounded-lg font-weight: 700 bg-orange-300">more info</button>

    </div>
 </div>
  )
}

export default ProjectItem;
