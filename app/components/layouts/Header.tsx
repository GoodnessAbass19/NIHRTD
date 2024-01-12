import Link from "next/link";
import React from "react";

const Header = () => {
  const link = [
    { name: "Home", link: "/" },
    { name: "about", link: "/about" },
    { name: "enroll", link: "/enroll" },
    { name: "contact", link: "/contact" },
  ];

  return (
    <header className="bg-[#0A1D3B] w-full">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center flex-row px-4 py-6">
        <h2 className="text-3xl font-bold text-white">Logo</h2>

        <ul className="flex flex-row md:gap-10 gap-2 md:text-xl text-base justify-between items-center">
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
