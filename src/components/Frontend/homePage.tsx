import { Icons } from "@/components/Icons/icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HomePage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <section
          id="home"
          className="flex flex-col gap-8 md:grid md:grid-rows-3 md:gap-0 md:grid-cols-7"
        >
          <div className="h-20 md:hidden "></div>
          <div className="w-full h-full flex justify-center md:items-center md:col-span-3">
            <div className="w-[9rem] h-[9rem] md:w-[19rem] md:h-[19rem] lg:w-[21rem] lg:h-[21rem] relative flex justify-center items-center overflow-hidden rounded-full z-10  bg-blue-500">
              <div className="w-[8.5rem] h-[8.5rem] md:w-72 md:h-72 lg:w-80 lg:h-80 relative flex justify-center items-center overflow-hidden rounded-full bg-white ">
                <div className="w-[8rem] h-[8rem] bg-transparent md:w-56 md:h-56 lg:w-64 lg:h-64 relative flex justify-center items-center overflow-hidden rounded-full md:bg-blue-500 ">
                  <div className="w-[8rem] h-[8rem] md:w-48 md:h-48 lg:w-56 lg:h-56 relative overflow-hidden rounded-full ">
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

          <div className="w-full h-full flex flex-col text-center justify-center gap-4 md:col-span-3 md:h-screen md:text-start ">
            <div>
              <h1 className="w-full md:text-start text-3xl font-bold">
                Afif Misbahuddin
              </h1>
              <p className="text-sm md:text-xl">
                Designer, Videografer and Fullstack Developer
              </p>
            </div>

            <div className="w-full flex gap-4 justify-center md:justify-start ">
              <Link
                href="/"
                className={`${buttonVariants({
                  variant: "default",
                })} "flex  items-center gap-4 hover:scale-110 duration-300 transition-all ease-in-out active:scale-90"`}
              >
                Download CV
                <Download className="w-4 h-4" />
              </Link>

              <div className="flex md:hidden gap-2 justify-center items-center">
                <Link
                  href="/"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  <FaGithub className="lg:w-5 lg:h-5 " />
                </Link>
                <Link
                  href="/"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  <FaLinkedin className="lg:w-5 lg:h-5 " />
                </Link>
                <Link
                  href="/"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  <Icons.logo className="w-4 h-4 lg:w-5 lg:h-5 fill-slate-900 " />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-screen hidden md:flex flex-col justify-center items-center md:gap-8 lg:gap-10 col-span-1">
            <Link href="/">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className=" cursor-pointer ">
                    <FaGithub className="lg:w-5 lg:h-5" />
                  </TooltipTrigger>
                  <TooltipContent>Github</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link href="/">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className=" cursor-pointer ">
                    <FaLinkedin className="lg:w-5 lg:h-5" />
                  </TooltipTrigger>
                  <TooltipContent>Linkdin</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link href="/">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className=" cursor-pointer ">
                    <Icons.logo className="flex w-5 h-5 lg:w-5 lg:h-5 fill-slate-900 hover:fill-blue-500 hover:scale-110 duration-300 ease-in-out" />
                  </TooltipTrigger>
                  <TooltipContent>Skinylabs Creative</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </section>
      </MaxWidthWrapper>
      <div className="absolute bg-blue-500 w-full h-52 hidden md:w-[11rem] md:h-screen md:block lg:w-[14rem] xl:w-[22rem] "></div>
    </>
  );
};

export default HomePage;
