"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import NavList from "./NavList"; // Pastikan jalur impor benar
import { Icons } from "../Icons/icons";
import { useClickOutside } from "@/hooks/useClickOutside";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickOutside(sidebarRef, () => setOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full duration-300 z-[100]  ${
        scrolled ? "bg-white" : ""
      } `}
    >
      <div className="w-full font-medium  px-4 z-[100]">
        <div className="flex h-16 items-center justify-between 2xl:h-24">
          <div>
            <Icons.logo
              className={`flex w-10 h-10 ease-in-out duration-300 transition-all ${
                scrolled
                  ? "fill-blue-500 md:fill-blue-500"
                  : " fill-blue-500 md:fill-white"
              } `}
            />
          </div>
          <ul className="lg:flex hidden uppercase items-center gap-8">
            <NavList />
          </ul>
          <div className="flex gap-4 items-center">
            <div
              className={`
                ${open ? "hidden" : ""}
                ${scrolled ? "block" : "hidden"}
                ${!open && scrolled ? "block" : ""}
                md:block lg:block 
              `}
            >
              <Link
                href="/"
                className={`btn ${buttonVariants({
                  variant: "default",
                  size: "default",
                })} lg:${buttonVariants({
                  variant: "default",
                  size: "default",
                })} 2xl:${buttonVariants({ variant: "default", size: "xl" })}`}
              >
                Contact Me
              </Link>
            </div>
            <div
              className="text-3xl lg:hidden z-[101]"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <div className="flex justify-center items-center">
                  <Icons.hamburgerClose
                    className={`w-10 h-10 transition-transform duration-300 ${
                      open ? "rotate-in" : "rotate-out"
                    }`}
                    fill1="text-slate-500"
                    fill2="#E62129"
                  />
                </div>
              ) : (
                <Icons.hamburger
                  className={`w-8 h-8 fill-slate-800 cursor-pointer transition-transform duration-300 ${
                    open ? "rotate-out" : "rotate-in"
                  }`}
                />
              )}
            </div>
          </div>
          <div
            ref={sidebarRef}
            className={`
              lg:hidden bg-white fixed flex flex-col gap-4 items-center justify-center w-full h-full md:w-1/2 top-0 bottom-0 px-4
              duration-500 z-[100] ${open ? "left-0" : "left-[-100%]"}
            `}
          >
            <div className="w-full flex justify-center">
              <Icons.logo className="flex w-10 h-10 fill-slate-900" />
            </div>
            <ul>
              <NavList />
            </ul>
            <Button variant="default" className="w-full">
              Contact Me
            </Button>
            <div className="flex items-center md:gap-12">
              <div className=" cursor-pointer hover:text-blue-500 hover:scale-110 duration-300 ease-in-out">
                <FaGithub />
              </div>
              <div className=" cursor-pointer hover:text-blue-500 hover:scale-110 duration-300 ease-in-out">
                <FaLinkedin />
              </div>
              <div className=" cursor-pointer ">
                <Icons.logo className="flex w-5 h-5 fill-slate-900 hover:fill-blue-500 hover:scale-110 duration-300 ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm lg:hidden z-30"></div>
      )}
    </nav>
  );
};

export default Navbar;
