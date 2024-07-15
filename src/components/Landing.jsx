import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-900 border-t-2">
      <div className="textstructure mt-52 px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => (
          <div key={index} className="masker font-sans-serif">
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[9vw] h-[5vw] relative bg-red-500"
                ></motion.div>
              )}
              <h1 className="leading-[6.5vw] tracking-tighter font-medium text-[7.5vw] text-light uppercase">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and Private Companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-300 rounded-full font-light text-md uppercase">
            Start
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
