import React from "react";
import Link from "next/link";

export const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Me",
    link: "#about",
  },
  {
    name: "Portfolio",
    link: "#portfolio",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certificates",
    link: "#certificates",
  },
];

const NavList = () => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.link}
            className="nav-link h-16 flex justify-center items-center hover:text-blue-500 ease-in-out duration-200 "
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavList;
