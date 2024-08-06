import React from "react";
import Link from "next/link";

export const links = [
  { name: "Home", link: "/" },
  { name: "About Me", link: "#about" },
  { name: "My Works", link: "#works" },
  { name: "Skills", link: "#skills" },
  { name: "Certificates", link: "#certificates" },
];
const NavList = () => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.link}
            className="py-7 inline-block hover:text-blue-500 ease-in-out duration-200"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavList;
