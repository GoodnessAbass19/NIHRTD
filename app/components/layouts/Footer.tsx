import { PhoneIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className=" bg-[#2F6790]/95">
      <div className=" max-w-7xl mx-auto p-5">
        {/* upper container */}
        <div className=" flex flex-col justify-center">
          <h3 className=" text-white font-bold text-center md:text-lg xl:text-2xl">
            NIGERIA INSTITUE OF HUMAN RESOURCES AND TECHNICAL DEVELOPMENT
          </h3>
          <span className=" text-center text-white/70 text-xs md:text-sm xl:text-base">
            Technical Skill Training & Career Accelerator
          </span>
          <p className=" my-7 text-sm text-white/95 text-center md:text-base xl:text-lg">
            NIHRTD is an institute that guides and provides a medium of exposure
            as regards the acquisition of technical skills through a structured
            learning and working system that will expose graduates to
            opportunities for hands-on experience with organizations where the
            technical skills learnt will be put to work. It also provides
            advocacy for best practices in organisations.
          </p>
          <div className=" flex flex-col items-center gap-y-3">
            <h6 className=" text-white font-medium text-center md:text-lg xl:text-2xl">
              Quick links
            </h6>
            <ul className=" flex flex-col gap-y-3">
              <li className=" text-xs flex items-center gap-x-3 text-white/80 md:text-sm lg:text-base">
                <PhoneIcon className=" h-4 w-4 text-white lg:h-5 lg:w-5" />
                +234 803 343 4632, +234 808 913 9919
              </li>
              <li className=" text-xs flex items-center gap-x-3 text-white/80 md:text-sm lg:text-base">
                <EnvelopeIcon className=" h-4 w-4 text-white lg:h-5 lg:w-5" />
                loremipsum@nihrtd.com
              </li>
              <li className=" text-xs flex items-center gap-x-3 text-white/80 md:text-sm lg:text-base">
                <MapPinIcon className=" h-4 w-4 text-white lg:h-5 lg:w-5" />
                1, Engineering close, Victoria Island, Lagos
              </li>
            </ul>
          </div>
        </div>

        {/* lower container */}
        <p className=" text-white text-center my-7 text-xs"> &copy; 2023, NIHRTD. All rights reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
