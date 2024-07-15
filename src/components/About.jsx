import React from "react";

function About() {
  return (
    <div className=" mt-10 w-full px-20 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-semibold text-3xl leading-[5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.Ochi is a strategic partner for fast-grow­ing tech businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-5xl">Our approach:</h1>
          <button className=" flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[50vh]  rounded-3xl bg-[#b0c859]">
          <img src="https://github.com/AliHasnM/ochii-website-design-/blob/main/src/assets/image.jpg?raw=true" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
