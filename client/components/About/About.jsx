import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/assets/IMG_6010-removebg-preview.png";
const About = () => {
  return (
    <div id="about" className="about md:h-screen">
      <div className="about-container md:grid grid-cols-3">
        <div className="col-span-2">
          <h2>Who I Am</h2>
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
          <p>
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
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
