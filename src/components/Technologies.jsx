import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNodejs, TbBrandTailwind } from "react-icons/tb";
import { SiMongodb, SiExpress } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24 px-28">
      <div className="border-t border-stone-900">
        <h2 className="my-14 text-center text-4xl font-bold bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent">
          Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-4 ">
            <SiMongodb className="text-8xl text-green-900" />
          </div>
          <div className="p-4 flex text-8xl">
            <SiExpress className="text-8xl text-amber-400" />
          </div>
          <div className="p-4 ">
            <RiReactjsLine className="text-8xl text-cyan-400" />
          </div>
          <div className="p-4 ">
            <TbBrandNodejs className="text-8xl  text-green-500" />
          </div>
          <div className="p-4 ">
            <TbBrandTailwind className="text-8xl text-cyan-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
