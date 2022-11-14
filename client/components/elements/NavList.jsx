import React from "react";
import Link from "next/link";
const NavList = ({ style, handlerNav }) => {
  return (
    <div>
      <ul className={style}>
        <Link href="/">
          <li onClick={() => handlerNav && handlerNav(false)}>Home</li>
        </Link>

        <Link href="/#about">
          <li onClick={() => handlerNav && handlerNav(false)}>About</li>
        </Link>

        <Link href="/#skills">
          <li onClick={() => handlerNav && handlerNav(false)}>Skills</li>
        </Link>

        <Link href="/#projects">
          <li onClick={() => handlerNav && handlerNav(false)}>Projects</li>
        </Link>

        <a target={"_blank"} rel="noreferrer"  href="https://drive.google.com/drive/u/0/my-drive">
          <li onClick={() => handlerNav && handlerNav(false)}>Resume</li>
        </a>

        <Link href="/#contact">
          <li onClick={() => handlerNav && handlerNav(false)}>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavList;
