"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "../MaxWidthWrapper";
import NavList from "./NavList"; // Pastikan jalur impor benar

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-b">
      <div className="w-full fixed font-medium z-50 ">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between ">
            <div>
              {/* <Image src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
              <h1 className="md:text-white">Afif Misbahuddin</h1>
            </div>
            <ul className="md:flex hidden uppercase items-center gap-8">
              <NavList />
            </ul>
            <div className="flex gap-4 items-center">
              <div className="">
                <Button variant="default">Contact Me</Button>
              </div>
              <div
                className="text-3xl md:hidden z-20"
                onClick={() => setOpen(!open)}
              >
                {open ? <X /> : <Menu />}
              </div>
            </div>
            <ul
              className={`
              md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
              duration-500 ${open ? "left-0" : "left-[-100%]"}
            `}
            >
              <NavList />
            </ul>
          </div>
        </MaxWidthWrapper>
      </div>
    </nav>
  );
};

export default Navbar;
