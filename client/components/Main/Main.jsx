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
              Hi, I'm <span className="text-[#61954a]">Oded</span>
            </h1>
            <h1>A Front-End Web Developer</h1>
            <p>
              I’m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>
            <div className="connect-container">
              {connection?.map((elem, index) => (
                <BtnList logoBtn={elem} key={index} />
              ))}
            </div>
          </div>
          x
        </div>
      </div>
    </div>
  );
};

export default Main;
