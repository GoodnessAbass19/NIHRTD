import Image from "next/image";
import { statements } from "./components";

export default function Home() {
  return (
    <main className="max-w-full mx-auto py-10">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-start justify-start space-y-10">
            <h3 className="text-3xl text-[#2F6790] font-bold uppercase">
              NIGERIA INSTITUTE OF HUMAN RESOURCES AND TECHNICAL DEVELOPMENT
            </h3>

            <p className="font-normal text-xl">
              Lorem ipsum dolor sit amet consectetur. Massa volutpat dui dolor
              cursus sagittis. Neque augue nunc nisl cras ut donec odio
              pellentesque porttitor. Aliquam suspendisse diam.
            </p>
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
      <div className="my-10 bg-sky-200/70">
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
            <div className="flex flex-col items-start justify-start space-y-10">
              <p className="text-xl text-black font-medium">
                Lorem ipsum dolor sit amet consectetur. Eu enim hendrerit fusce.
              </p>

              <p className="font-normal text-xl">
                Lorem ipsum dolor sit amet consectetur. Massa volutpat dui dolor
                cursus sagittis. Neque augue nunc nisl cras ut donec odio
                pellentesque porttitor. Aliquam suspendisse diam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 grid md:grid-cols-3 gap-5 lg:gap-10 max-w-7xl mx-auto p-5 justify-center">
        {statements.map((statement) => (
          <div
            key={statement.title}
            className="bg-[#0A1D3B] text-white rounded-xl 
            p-4 space-y-5 col-span-1"
          >
            <h3 className="text-2xl capitalize font-semibold text-center">
              {statement.title}
            </h3>
            <p className="text-base text-center">{statement.statement}</p>
          </div>
        ))}
      </div>

      <div></div>
    </main>
  );
}
