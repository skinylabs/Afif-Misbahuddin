"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavList from "./NavList"; // Pastikan jalur impor benar
import { Icons } from "../Icons/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="w-full  fixed font-medium z-50 px-4">
        <div className="flex h-16 items-center justify-between">
          <div>
            {/* <Image src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
            <Icons.logo className="flex w-10 h-10 fill-white" />
            {/* <h1 className="md:text-white">Afif Misbahuddin</h1> */}
          </div>
          <ul className="lg:flex hidden uppercase items-center gap-8">
            <NavList />
          </ul>
          <div className="flex gap-4 items-center">
            <div className="md:hidden">
              <Button variant="default">Contact Me</Button>
            </div>
            <div
              className="text-3xl lg:hidden z-20"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </div>
          </div>
          <ul
            className={`
              lg:hidden bg-white fixed w-full md:w-1/2 top-0 overflow-y-auto bottom-0 py-24 px-4
              duration-500 ${open ? "left-0" : "left-[-100%]"}
            `}
          >
            <NavList />
            <div>
              <Button variant="default" className="w-full flex gap-4">
                Contact Me
              </Button>
            </div>
          </ul>
        </div>
      </div>
      {/* Tambahkan elemen untuk efek blur */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm lg:hidden z-10"></div>
      )}
    </nav>
  );
};

export default Navbar;
