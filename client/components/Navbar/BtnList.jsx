import React from "react";
import Link from "next/link";
const BtnList = ({ logoBtn }) => {
  return (
    <>
      <a
        href={logoBtn?.href || "#"}
        target={
          logoBtn?.name == "Email" || logoBtn?.name == "PhoneNumber"
            ? ""
            : "_blank"
        }
        rel="noreferrer"
      >
        <div className="close-btn shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300">
          {logoBtn?.icon}
        </div>
      </a>
    </>
  );
};
export default BtnList;
