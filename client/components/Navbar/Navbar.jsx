import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavList, BtnList } from "./elements";
import { connection } from "../../utils";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  const localStyle = {
    scroll: "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300",
    NoScroll: "fixed w-full h-20 z-[100]",
    NavLogo: "/logo_O.M.png",
  };
  return (
    <>
      <div className="navbar">
        <div className={shadow ? localStyle.scroll : localStyle.NoScroll}>
          <div className="nav-container w-full h-full 2xl:px-16">
            <Link href="/">
              <a>
                <Image
                  src={localStyle.NavLogo}
                  alt="/"
                  width="125"
                  height="50"
                  className="cursor-pointer"
                />
              </a>
            </Link>
            <div>
              <NavList style={"nav-list hidden md:flex"} />
              {/* nav-dark-mode */}
              {/* Hamburger Icon */}
              <div onClick={handleNav} className="nav-btn md:hidden">
                <AiOutlineMenu size={25} />
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {/* Overlay */}
          <div
            className={nav? "  nav-Mobile-Menu open-side-menu  md:hidden ": "nav-Mobile-Menu"} >
            {/* Side Drawer Menu */}
            <div
              className={
                nav ? " open-side-nav sm:w-[60%] md:w-[45%]" : "close-side-nav"
              }
            >
              <div>
                <div className="side-nav-header">
                  <Link href="/">
                    <a>
                      <Image
                        src={localStyle.NavLogo}
                        width="87"
                        height="35"
                        alt="/"
                      />
                    </a>
                  </Link>
                  <div
                    onClick={handleNav}
                    className="close-btn shadow-lg shadow-gray-400"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div className="main-nav-bar">
                <NavList style={"side-nav-list"} handlerNav={setNav} />
                <div className="pt-40">
                  <div className="list-btn sm:w-[80%]">
                    {connection?.map((elem, index) => (
                      <BtnList logoBtn={elem} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
