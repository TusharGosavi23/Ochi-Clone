import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5 mt-20">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
            <img className="w-32" src="https://mir-s3-cdn-cf.behance.net/user/230/d6cf91925253957.628fe2ddd3b7a.png" alt="" />
            <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 ">&copy;2024</button>
        </div>
      </div>

      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full rounded-xl bg-[#192826] flex items-center justify-center">
          <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 ">&copy;2024</button>

        </div>
      </div>

      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full rounded-xl h-full bg-[#192826] flex items-center justify-center">
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 ">&copy;2024</button>

        </div>
      </div>
    </div>
  );
}

export default Cards;
