"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarChange = () => {
    setNavbar(!navbar);
    console.log("it's working");
  };

  const link = [
    { name: "Home", link: "/" },
    { name: "about", link: "/about" },
    { name: "enroll", link: "/enroll" },
    // { name: "contact", link: "/contact" },
  ];

  return (
    <header className="bg-[#2F6790]/95">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-row px-5 py-6">
        <Image src={"/logo no bg.png"} alt="img" width={50} height={50} />

        <div onClick={navbarChange} className=" z-30 md:hidden">
          {navbar ? (
            <XMarkIcon className=" text-white w-8" />
          ) : (
            <Bars3BottomRightIcon className=" text-white w-8" />
          )}
        </div>

        {navbar && (
          <div className=" absolute top-0 right-0 flex flex-col justify-center bg-[#2F6790]/95 p-5 w-full h-full md:hidden">
            <div className=" flex flex-col gap-y-10">
              {link.map((links) => (
                <Link
                  key={links.name}
                  href={`${links.link}`}
                  onClick={navbarChange}
                  className="text-white px-1 uppercase font-bold text-center md:text-xl text-base"
                >
                  {links.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <ul className=" hidden md:flex flex-row md:gap-10 gap-2 md:text-xl text-base justify-between items-center">
          {link.map((links) => (
            <li
              key={links.name}
              className="text-white px-1 capitalize text-center md:text-xl text-base"
            >
              <Link href={`${links.link}`}>{links.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
