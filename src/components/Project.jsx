import React from 'react';

const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#d4f441] text-black">
      <div className="text-center">
        <h1 className="text-7xl font-bold">
          READY
          <br />
          TO <span className="relative">
            
          </span> START
          <br />
          THE PROJECT?
        </h1>
        <button className="mt-8 px-8 py-4 bg-black text-white rounded-full text-xl">
          START THE PROJECT
        </button>
        <div className="mt-4 text-xl">OR</div>
        <button className="mt-8 px-8 py-4 bg-white text-red rounded-full text-xl hover:bg-transparent">
          HELLO@OCHI.DESIGN
        </button>
      </div>
    </div>
  );
};


function Eye({ rotate }) {
  return (
    <div className="w-[15vw] rounded-full flex items-center justify-center h-[15vw] bg-zinc-200">
      <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
        <div
          className="line absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10"
          style={{ transform: `rotate(${rotate}deg)` }}
        >
          <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
        </div>
      </div>
    </div>
  );
}

export default Project;
