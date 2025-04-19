import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s build something <span className="text-purple">exceptional</span> together. 
         <br /><br />
          If you&rsquo;re looking to take your digital presence to the next level, I&rsquo;m here to help bring your vision to life.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in touch today to discuss how I can contribute to achieving your goals through tailored software solutions.
        </p>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Rodel Lalaguna
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-105 transition-transform duration-200"
            >
              <img src={info.img} alt={`${info.id}-icon`} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
