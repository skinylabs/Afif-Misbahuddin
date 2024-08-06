import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" className="grid grid-rows-2">
        <div className="w-full h-screen flex items-center">
          <div className="w-[21rem] h-[21rem] relative flex justify-center items-center overflow-hidden rounded-full z-20 ml-40 bg-blue-500 ">
            <div className="w-80 h-80 relative flex justify-center items-center overflow-hidden rounded-full bg-white ">
              <div className="w-64 h-64 relative flex justify-center items-center overflow-hidden rounded-full bg-blue-500 ">
                <div className="w-56 h-56 relative overflow-hidden rounded-full ">
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
          <div className="absolute bg-blue-500 w-full h-1/4 md:w-1/4 md:h-screen"></div>
        </div>
        <div className="w-full h-screen flex flex-col  items-center">
          <h1 className="w-full text-start text-3xl font-bold">
            Afif Misbahuddin
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            deleniti. Odit quod sequi suscipit rerum tenetur reiciendis dolor
            quos voluptatem? Molestias nam commodi maxime odit iste quo delectus
            possimus nihil voluptas excepturi explicabo officiis, ullam odio
            iusto laborum et assumenda vitae ipsum ipsa at blanditiis? Earum
            incidunt magnam rerum et.
          </p>
        </div>
      </section>
    </>
  );
}
