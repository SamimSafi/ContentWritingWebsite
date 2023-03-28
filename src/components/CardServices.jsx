import React, { useState } from "react";
import C1 from "../img/c1.png";
import { FaLaptop } from "react-icons/fa";
import Model from "./Model";

export const CardServices = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <div className="max-w-[1320px] md:py-[80] py-5 mx-auto">
        <h1 className="text-4xl text-center "><span className="border-b-4 border-b-blue-900 rounded-xl">Our Services</span></h1>
      </div>
     
      <div className="max-w-[1200px] text-center mx-auto py-[30px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {/* Card Start */}
        <div>
          <div className=" h-3/4 overflow-hidden group shadow-xl p-4 text-center flex items-center flex-col hover:bg-blue-900 hover:text-white duration-1000 rounded-lg">
            <i className="text-4xl group-hover:text-white text-blue-500 duration-1000 animate-bounce">
              <FaLaptop />
            </i>
            <h3 className="text-sm py-2 font-bold"><span className=" border-l-blue-900 border-b-blue-900 border-spacing-2 border-l-2 border-b-2 mr-1"></span> Blog writing for websites</h3>
            <p className="text-sm">
            A blog post is any article, news piece, or guide that's published in the blog section of a website.
            </p>
          </div>
          <div
            className="bg-blue-900 mt-2 rounded-xl text-white h-10 flex items-center justify-center hover:scale-x-110 duration-1000"
            onClick={() => setShowModel(!showModel)}
          >
            <button>Get Inquiery</button>
          </div>
        </div>
        {/* Card End */}
         {/* Card Start */}
         <div>
          <div className="h-3/4 overflow-hidden group shadow-xl p-4 text-center flex items-center flex-col hover:bg-blue-900 hover:text-white duration-1000 rounded-lg">
            <i className="text-4xl group-hover:text-white text-blue-500 duration-1000 animate-bounce">
              <FaLaptop />
            </i>
            <h3 className="text-xl py-2">Blog writing for websites</h3>
            <p>
            A blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.
            </p>
          </div>
          <div
            className="bg-blue-900 mt-2 rounded-xl text-white h-10 flex items-center justify-center hover:scale-x-110 duration-1000"
            onClick={() => setShowModel(!showModel)}
          >
            <button>Get Inquiery</button>
          </div>
        </div>
        {/* Card End */}

         {/* Card Start */}
         <div>
          <div className="h-3/4 overflow-hidden group shadow-xl p-4 text-center flex items-center flex-col hover:bg-blue-900 hover:text-white duration-1000 rounded-lg">
            <i className="text-4xl group-hover:text-white text-blue-500 duration-1000 animate-bounce">
              <FaLaptop />
            </i>
            <h3 className="text-xl py-2">Web Content Writing</h3>
            <p>
            Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes. It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms, such as tweetstorms on Twitter or text posts on Reddit.
            </p>
          </div>
          <div
            className="bg-blue-900 mt-2 rounded-xl text-white h-10 flex items-center justify-center hover:scale-x-110 duration-1000"
            onClick={() => setShowModel(!showModel)}
          >
            <button>Get Inquiery</button>
          </div>
        </div>
        {/* Card End */}

         {/* Card Start */}
         <div>
          <div className="h-3/4 overflow-hidden group shadow-xl p-4 text-center flex items-center flex-col hover:bg-blue-900 hover:text-white duration-1000 rounded-lg">
            <i className="text-4xl group-hover:text-white text-blue-500 duration-1000 animate-bounce">
              <FaLaptop />
            </i>
            <h3 className="text-xl py-2">Marketing material content</h3>
            <p>
            Marketing materials are any products or content designed to market your company or its products and services to potential customers. Marketing materials can range from samples you give to potential customers to keep, permanent installations in high-visibility areas or digital files that customers can access.
            </p>
          </div>
          <div
            className="bg-blue-900 mt-2 rounded-xl text-white h-10 flex items-center justify-center hover:scale-x-110 duration-1000"
            onClick={() => setShowModel(!showModel)}
          >
            <button>Get Inquiery</button>
          </div>
        </div>
        {/* Card End */}
         {/* Card Start */}
         <div>
          <div className="h-3/4 overflow-hidden group shadow-xl p-4 text-center flex items-center flex-col hover:bg-blue-900 hover:text-white duration-1000 rounded-lg">
            <i className="text-4xl group-hover:text-white text-blue-500 duration-1000 animate-bounce">
              <FaLaptop />
            </i>
            <h3 className="text-xl py-2">White papers</h3>
            <p>
            A white paper is an informational document issued by a company or not-for-profit organization to promote or highlight the features of a solution, product, or service that it offers or plans to offer. White papers are also used as a method of presenting government policies and legislation and gauging public opinion.
            </p>
          </div>
          <div
            className="bg-blue-900 mt-2 rounded-xl text-white h-10 flex items-center justify-center hover:scale-x-110 duration-1000"
            onClick={() => setShowModel(!showModel)}
          >
            <button>Get Inquiery</button>
          </div>
        </div>
        {/* Card End */}

        {showModel ? <Model setShowModel={setShowModel} /> : <></>}
      </div>
    </>
    // <div className="w-80 h-auto p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
    //   {/* //======= Image Start */}
    //   <img className="h-auto w-full object-fill rounded-xl" src={C1}></img>
    //   {/* ======= Paragraph Start */}
    //   <div className="p-2">
    //     <h2 className="font-bold text-lg ">Title</h2>

    //     <p className="text-sm text-gray-600 text-center">
    //       Description Goes here Description Goes here Description Goes here
    //       Description Goes here Description Goes here
    //     </p>
    //   </div>
    //   {/* //======= Card Start */}
    //   <div className="w-full border-b-2 border-cyan-300">
    //     <button
    //       role="button"
    //       className="text-white w-full h-auto  bg-purple-600 px-3 py-1 rounded-lg hover:bg-purple-400"
    //     >
    //       Button
    //     </button>
    //   </div>
    // </div>
    //======= Card end
  );
};
