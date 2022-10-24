import Head from "next/head";
import { About, Contact, Main, Projects, Skills } from "../components";

const Home = () => {
  return (
    <div className=" text-gray-800 bg-[#FCFBF4] dark:bg-darked font-Inter  dark:bg-darkedColor-0 dark:bg-auto dark:text-white">
      <Head>
        <title>Oded-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
