import React from "react";
import { BtnList } from "../elements";
import { connection } from "../../utils";
const Main = () => {
  return (
    <div>
      <div id="home" className="main">
        <div className="main-container">
          <div>
            <h1>
              Hi, I&apos;m <span className="text-[#61954a]">Oded</span>
            </h1>
            <h1>Full Stack Developer</h1>
            {/* <p>I&apos;m focusing on looking for a fullstack/frontend position. I have a strong desire to prove myself and contribute to the team.</p> */}
            <div className="connect-container">
              {connection?.map((elem, index) => (
                <BtnList logoBtn={elem} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
