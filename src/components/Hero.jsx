import React from "react";
import profilePic from "../assets/HarshProfile.png";

const Hero = () => {
  const HERO_CONTENT =
    "I am a motivated computer science graduate looking for an opportunity where I can use my coding skills, problem-solving abilities, and creativity. I am passionate about building great solutions, advancing technology, and being part of a supportive and dynamic team. I have honed my skills in front-end technologies like React.js and Tailwindcss, as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.";

  return (
    <div className="pb-4 px-44 pt-6 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt=""
              className="border border-stone-900 rounded-3xl max-h-[500px] min-w-[400px]"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent lg:text-7xl">
              Harsh Jaiswal
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              MERN Stack Developer
            </span>
            <p className="mb-2 max-w-lg py-4 text-xl leading-relaxed tracking-tighter bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
              {HERO_CONTENT}
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              download
              // className="bg-white rounded-full p-4 text-stone-800 mb-10 text-base"
              className="rounded-full bg-stone-900 p-4 px-8 text-nase font-medium text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
