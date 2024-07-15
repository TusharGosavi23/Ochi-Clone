import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-session data-scroll-speed=".1" className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] ">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
        <MarqueeItem>We are Ochi</MarqueeItem>
        <MarqueeItem>We are Ochi</MarqueeItem>
        <MarqueeItem>We are Ochi</MarqueeItem>
      </div>
    </div>
  );
}

function MarqueeItem({ children }) {
  return (
    <motion.h1
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
      className="text-[17vw] leading-none font-semibold uppercase pt-10 pb-10"
    >
      {children}
    </motion.h1>
  );
}

export default Marquee;
