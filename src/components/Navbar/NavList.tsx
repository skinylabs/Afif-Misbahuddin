import React from "react";
import Link from "next/link";

export const links = [
  { name: "Home", link: "/" },
  { name: "Produk", link: "/produk" },
  { name: "Makloon", link: "/makloon" },
  { name: "Hubungi Kami", link: "/contact" },
];
const NavList = () => {
  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.link} className="py-7 px-3 inline-block">
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavList;
