import React from "react";
import Link from "next/link";
const NavList = ({ style, handlerNav }) => {
  return (
    <div>
      <ul className={style}>
        <Link href="/">
          <li onClick={() => handlerNav && handlerNav(false)}>Home</li>
        </Link>

        <Link href="/">
          <li onClick={() => handlerNav && handlerNav(false)}>About</li>
        </Link>

        <Link href="/">
          <li onClick={() => handlerNav && handlerNav(false)}>Skills</li>
        </Link>

        <Link href="/">
          <li onClick={() => handlerNav && handlerNav(false)}>Projects</li>
        </Link>

        <Link href="/">
          <li onClick={() => handlerNav && handlerNav(false)}>Resume</li>
        </Link>

        <Link href="/">
          <li onClick={() => handlerNav && handlerNav(false)}>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavList;
