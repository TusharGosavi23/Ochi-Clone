// import { motion } from "framer-motion";
// import React from "react";

// function Features() {
//     const handleHover= ()=>{
//       alert("Hover")
//     }
//   return (
//     <div className="w-full py-20 bg-zinc-800">
//       <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
//         <h1 className="text-7xl tracking-tighter">Featured projects</h1>
//       </div>
//       <div className="px-20">
//         <div className="cards w-full flex gap-10 mt-10">
//           <div onMouseEnter={ ()=>handleHover()} className="cardcontainer relative   w-1/2 h-[75vh]">
//           <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl -mb">VISE
//                  {"FYDE".split('').map((item, index)=> <motion.span initial={{y:"100%"}} className="inline-block translate-y-full">{item}</motion.span>)}
//         </h1>
//             <div className=" scale-50 w-full h-full  rounded-xl overflow-hidden">
//                     <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
//             </div>
//           </div>
//           <div className="cardcontainer relative  w-1/2 h-[75vh]">
//           <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl -mb">VISE
//             {"VISE".split('').map((item, index)=> 
//             <span>{item}</span>)}
//           </h1>

//             <div className=" scale-50 w-full h-full rounded-xl overflow-hidden">
//                 <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/VISE1-1340x740.jpg" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Features;

import React from "react";

function Features() {
  return (
    <div className="w-full py-20 bg-zinc-800">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tighter text-white">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="FYDE"
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/VISE1-1340x740.jpg"
                alt="VISE"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
