import React from "react";
import C1 from "../img/c1.png";
function AboutUs() {
  return (
    <>
      <div className="max-w-[1320px] md:py-[80] py-5 mx-auto">
        <h1 className="text-4xl text-center"><span className="border-b-4 border-b-blue-900 rounded-xl">About Us</span></h1>
      </div>
      <div className="max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col">
        <div className="basis-[45%] pb-5">
          <img src={C1} alt="" className="w-full" />
        </div>
        <div className="basis-[55%] px-5">
          <h1 className="text-4xl pb-5">We Provide Best Services</h1>
          <p className="py-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            quidem facere illum repudiandae, explicabo mollitia accusantium hic,
            quia earum eos amet modi magnam reprehenderit voluptates aspernatur
            molestias ut! Vel, eaque.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
