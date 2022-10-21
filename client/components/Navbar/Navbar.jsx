import React, { useEffect, useState } from "react";
// import style from "./NavbarStyle/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
      <div className="navbar bg-black">
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
              <ul className="nav-list hidden md:flex">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Skills</Link>
                </li>
                <li>
                  <Link href="/">Projects</Link>
                </li>
                <li>
                  <Link href="/">Resume</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              {/* Hamburger Icon */}
              <div onClick={handleNav} className="nav-btn md:hidden">
                <AiOutlineMenu size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
