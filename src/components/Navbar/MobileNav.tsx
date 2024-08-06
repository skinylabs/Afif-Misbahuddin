"use client";

import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/Logo.png";
import NavList from "./NavList";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Produk
            </Link>
          </li>
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Makloon
            </Link>
          </li>
          <NavList />
        </ul>
        <div className="flex gap-4">
          <div className="md:block hidden">
            <Button variant="destructive">ID</Button>
          </div>
          <div className="md:block hidden">
            <Button variant="default">LOGIN</Button>
          </div>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
          md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavList />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
