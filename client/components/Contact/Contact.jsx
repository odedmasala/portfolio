import Image from "next/image";
import React from "react";
import { connection } from "../../utils";
import { BtnList } from "../elements";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <section>
        <div className="contact-container bg-[#eff3ef] dark:bg-[#20252071] md:max-w-none md:text-center">
          <div>
            <div>
              <h2>Feel free to contact me</h2>
            </div>
            <div className="connect-container">
              {connection?.map((elem, index) => (
                <BtnList logoBtn={elem} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="dark:bg-[#20252071] bg-[#eff3ef]   pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Image
                className="rounded-full"
                src="data:image/png;base64,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"
                width="40"
                height="40"
              />
            </div>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              O&M Privacy & Policy Developers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const x = (
  <div className="max-w-[1240px]  flex-col ">
    <div className="">
      <h2 className="text-center">Feel free to contact me</h2>
    </div>
    <div className="connect-container">
      {connection?.map((elem, index) => (
        <BtnList logoBtn={elem} key={index} />
      ))}
    </div>
  </div>
);
export default Contact;
