import { Icons } from "@/components/Icons/icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { CloudDownload, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoCloudDownload } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <section id="home" className="grid grid-rows-3 md:grid-cols-7">
          <div className="w-full h-screen flex justify-center items-center md:col-span-3">
            <div className="md:w-[19rem] md:h-[19rem] lg:w-[21rem] lg:h-[21rem] relative flex justify-center items-center overflow-hidden rounded-full z-20  bg-blue-500">
              <div className="md:w-72 md:h-72 lg:w-80 lg:h-80 relative flex justify-center items-center overflow-hidden rounded-full bg-white ">
                <div className="md:w-56 md:h-56 lg:w-64 lg:h-64 relative flex justify-center items-center overflow-hidden rounded-full bg-blue-500 ">
                  <div className="md:w-48 md:h-48 lg:w-56 lg:h-56 relative overflow-hidden rounded-full ">
                    <Image
                      src="https://images.unsplash.com/photo-1688395810606-cdee2dbf8a25?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-screen flex flex-col justify-center gap-4 md:col-span-3">
            <h1 className="w-full text-start text-3xl font-bold">
              Afif Misbahuddin
            </h1>
            <p className="text-xl">
              Designer, Videografer and Fullstack Developer
            </p>
            <div className="w-full ">
              <Link
                href="/"
                className={`${buttonVariants({
                  variant: "default",
                })} flex justify-center items-center gap-4 hover:scale-110 duration-300 transition-all ease-in-out active:scale-90`}
              >
                Download CV
                <Download className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="w-full h-screen flex flex-col justify-center items-center gap-8 col-span-1">
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
        </section>
      </MaxWidthWrapper>
      <div className="absolute bg-blue-500 w-full h-1/4 md:w-[22%] md:h-screen"></div>
    </>
  );
}
