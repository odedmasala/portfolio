import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/assets/IMG_6010-removebg-preview.png";
const About = () => {
  return (
    <div id="about" className="about md:h-screen">
      <div className="about-container md:grid grid-cols-3">
        <div className="col-span-2">
          <h2>A little about me...</h2>
          <p>
            Hi, I am a graduate of the software development course at
            Tech-Career College. From a young age I have always been deeply
            fascinated by computers and technology. After many thought and long
            military service in the IDF, I decided that software development is the
            profession I would like to pursue. Along with the skills I will
            acquire in college and the personal skills that have improved in the
            military services, I will bring with me a strong work ethic,
            self-learning ability, high motivation to learn new systems and good
            teamwork.
          </p>
          <p>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <Link href="/#projects">
            <p className="py-2  underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="img-container bg-[#f1f5f3] dark:bg-darked shadow-xl shadow-gray-500 dark:shadow-gray-700 rounded-[100%] hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-[100%]" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
