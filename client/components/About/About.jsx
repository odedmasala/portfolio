import React from "react";
import Image from "next/image";
import Link from "next/link";
// import AboutImg from "/IMG_6010-removebg-preview.png";
const About = () => {
  return (
    <div id="about" className="about md:h-screen">
      <div className="about-container md:grid grid-cols-3">
        <div className="col-span-2 flex flex-col  justify-center">
          <div>
            <h2>About me </h2>
            <p>
              I am a highly motivated software developer, skilled in web design,
              program development and web development. I can say about myself
              that I work well independently and as a team member in a dynamic
              multitasking environment from my experience in previous jobs. I am
              looking for a position where I can contribute to the goals of
              Organize and improve my professional abilities.
              <br /> Graduated from "Tech-Career" in collaboration with IITC
              College.
            </p>
            <Link href="/#projects">
              <p className="py-2 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>
        <div className="img-container bg-[#f1f5f3] dark:bg-darked shadow-xl shadow-gray-500 dark:shadow-gray-700 rounded-[100%] hover:scale-105 ease-in duration-300">
          <Image
            src={"/IMG_6010-removebg-preview.png"}
            width={"350px"}
            height={"500px"}
            className="rounded-[100%]"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
