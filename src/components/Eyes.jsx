import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden relative">
      <div
        data-scroll
        data-scroll-speed="-0.6"
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")',
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-10">
          <Eye rotate={rotate} />
          <Eye rotate={rotate} />
        </div>
      </div>
    </div>
  );
}

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

export default Eyes;
