import React from "react";
const BtnList = ({ logoBtn, mobile }) => {
  const localStyle = {
    mobileStyle:
      "close-btn shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-300",
    bigScreenStyle:
      "rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300",
  };
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
        <div
          className={
            mobile
              ? localStyle.mobileStyle
              : localStyle.bigScreenStyle
          }
        >
          {logoBtn?.icon}
        </div>
      </a>
    </>
  );
};
export default BtnList;
