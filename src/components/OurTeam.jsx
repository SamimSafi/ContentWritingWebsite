import React from "react";
import C1 from "../img/samim.png";

function OurTeam() {
  return (
    <div className="w-full bg-blue-900 text-white">
      <div className="text-center py-10">
        <h3 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12 ">
          <span className="border-b-4 border-b-blue-300 rounded-xl">Meet Our Team</span>
        </h3>
        <div className="grid max-w-5xl md:grid-cols-3  lg:grid-cols-3  grid-cols-2 mx-auto gap-8 justify-center items-center group">
          <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity ">
            <img src={C1} alt="" className="h-24 w-24 mx-auto z-10 rounded-full mb-2" />
            <h2 className="uppercase text-xl font-bold">Mohammad Samim</h2>
            <h3 className="uppercase text-xl font-bold">Developer</h3>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              sunt obcaecati corrupti, quia error vitae asperiores.
            </p>
            <button className="bg-blue-400 py-2.5 px-8 rounded-full">Anything</button>
          </div>
          <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity ">
            <img src={C1} alt="" className="h-24 w-24 mx-auto z-10 rounded-full mb-2" />
            <h2 className="uppercase text-xl font-bold">Mohammad Samim</h2>
            <h3 className="uppercase text-xl font-bold">Developer</h3>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              sunt obcaecati corrupti, quia error vitae asperiores.
            </p>
            <button className="bg-blue-400 py-2.5 px-8 rounded-full">Anything</button>
          </div>
          <div className="bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500 cursor-pointer p-8 rounded-xl mix-blend-luminosity ">
            <img src={C1} alt="" className="h-24 w-24 mx-auto z-10 rounded-full mb-2" />
            <h2 className="uppercase text-xl font-bold">Mohammad Samim</h2>
            <h3 className="uppercase text-xl font-bold">Developer</h3>
            <p className="text-sm leading-7 my-3 font-light opacity-50">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              sunt obcaecati corrupti, quia error vitae asperiores.
            </p>
            <button className="bg-blue-400 py-2.5 px-8 rounded-full">Anything</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
