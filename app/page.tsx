import Image from "next/image";
import Link from "next/link";
import { statements } from "./components";

export default function Home() {
  return (
    <main className="max-w-full mx-auto pt-10">
      {/* first section */}
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-start justify-start space-y-5 xl:space-y-10">
            <h1 className=" text-xl lg:text-3xl xl:text-4xl text-[#2F6790] font-bold uppercase">
              WELCOME TO NIGERIA INSTITUTE OF HUMAN RESOURCES AND TECHNICAL
              DEVELOPMENT
            </h1>

            <p className="font-normal text-sm md:text-base lg:text-xl xl:text-2xl">
              Discover world-class education and training programs that blend
              human resources expertise with technical skills, preparing
              individuals for success in today's dynamic professional landscape.
            </p>

            <Link href="/enroll">
              <button className=" text-sm bg-[#2F6790]/90 py-2 px-5 rounded-md text-white lg:text-base xl:text-lg hover:bg-[#2F6790] hover:shadow-lg">
                Apply for our 8 weeks Exclusive Program
              </button>
            </Link>
          </div>

          <div>
            <Image
              src={"/Rectangle 3.png"}
              alt="img"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="my-10 bg-[#2F6790]/95">
        <div className="max-w-7xl mx-auto p-5">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src={"/Rectangle 7.png"}
                alt="img"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-start space-y-5">
              <h2 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold uppercase">
                About Us
              </h2>

              <p className="font-normal text-white/95 text-sm md:text-lg lg:text-xl xl:text-2xl">
                At NIHRTD, we are committed to fostering a learning environment
                that nurtures both human potential and technical proficiency.
                With a legacy of excellence, our institute stands as a beacon of
                education in Nigeria, dedicated to shaping the next generation
                of skilled and knowledgeable professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="py-10 grid md:grid-cols-3 gap-5 lg:gap-10 max-w-7xl mx-auto p-5 justify-center">
        {statements.map((statement) => (
          <div
            key={statement.title}
            className="bg-[#0A1D3B] rounded-xl 
            p-4 space-y-5 col-span-1"
          >
            <h3 className=" text-white text-lg lg:text-2xl xl:text-3xl capitalize font-semibold text-center">
              {statement.title}
            </h3>
            <p className=" text-white/70 text-sm text-center font-normal">
              {statement.statement}
            </p>
          </div>
        ))}
      </div>

      {/* fourth section */}
      <div className="py-10 max-w-7xl mx-auto p-5">
        <div className=" flex flex-col items-center gap-y-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-black font-bold uppercase">
            PROGRAMS
          </h2>
          <p className="font-normal text-base text-center md:text-lg lg:text-xl xl:text-2xl">
            Explore our diverse range of programs designed to meet the demands
            of the modern workforce. From comprehensive human resources courses
            to cutting-edge technical development programs, we offer a pathway
            for every aspiring professional
          </p>
          <a href="#programs">
            <button className="text-sm bg-[#2F6790]/90 py-2 px-5 rounded-md text-white lg:text-base xl:text-lg hover:bg-[#2F6790] hover:shadow-lg">
              See our programs
            </button>
          </a>
        </div>
      </div>

      {/* fifth section */}
      <div id="programs" className="py-10 max-w-7xl mx-auto p-5">
        <div className=" flex flex-col items-center gap-y-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-black font-bold uppercase">
            8 WEEKENDS PROFESSIONAL TRAINING IN HUMAN RESOURCE AND TECHNICAL
            DEVELOPMENT
          </h2>
          <p className="font-normal text-base text-center md:text-lg lg:text-xl xl:text-2xl">
            Ready to take the next step in your educational journey? Learn about
            our admission process, requirements, and key dates. Our dedicated
            admissions team is here to guide you through the application process
            and answer any questions you may have.
          </p>
          <button className="text-sm bg-[#2F6790]/90 py-2 px-5 rounded-md text-white lg:text-base xl:text-lg hover:bg-[#2F6790] hover:shadow-lg">
            Start your admission process
          </button>
        </div>
      </div>

      {/* sixth section newsletter */}
      <div className=" bg-[#0A1D3B]">
        <div className=" py-10 max-w-7xl mx-auto px-5">
          <h4 className=" text-xl md:text-2xl lg:text-3xl text-center text-white font-medium capitalize">
            Be part of our newsletter
          </h4>

          <form action="post" className="py-7 grid gap-y-10">
            <div className=" flex flex-col gap-y-5 lg:flex-row lg:gap-x-10">
              <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 w-full py-2">
                <input
                  type="text"
                  className=" bg-transparent border-0 text-base text-gray-500 w-full focus:outline-0"
                  name="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className=" flex flex-row items-center gap-y-3 border-b-2 border-gray-300 w-full py-2">
                <input
                  type="email"
                  className=" bg-transparent border-0 text-base text-gray-500 w-full focus:outline-0"
                  name="email"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            <button className="text-sm uppercase tracking-[0.5em] font-bold bg-[#2F6790]/90 py-2 px-5 rounded-md text-white lg:text-base xl:text-lg hover:bg-[#2F6790] hover:shadow-lg">
              Sumbit
            </button>
          </form>
        </div>
      </div>

      <div></div>
    </main>
  );
}
