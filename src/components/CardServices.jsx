import React, { useEffect, useState } from 'react';
import C1 from '../img/c1.png';
import { FaLaptop } from 'react-icons/fa';
import Model from './Model';
import { baseUrl } from '../adminPanel/Constaints/baseUrl';
import axios from 'axios';

export const CardServices = () => {
  const [showModel, setShowModel] = useState(false);
  const [services, setServices] = useState([]);

  const loadServices = () => {
    axios
      .get(baseUrl + '/getServices')
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadServices();
  }, []);
  return (
    <>
      <div className="max-w-[1320px] md:py-[80] py-5 mx-auto">
        <h1 className="text-4xl text-center ">
          <span className="border-b-4 border-b-blue-900 rounded-xl">Our Services</span>
        </h1>
      </div>

      <div className="max-w-[1200px] text-center mx-auto py-[30px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {/* Card Start */}
        {services &&
          services.map((res) => (
            <div key={res.id}>
              <div className=" h-3/4 overflow-hidden group shadow-xl p-4 text-center flex items-center flex-col hover:bg-blue-900 hover:text-white duration-1000 rounded-lg">
                {/* <i className="text-4xl group-hover:text-white text-blue-500 duration-1000 animate-bounce">
              <FaLaptop />
            </i> */}
                <img className="w-44 h-44 rounded-2xl" src={baseUrl + '/' + res.image} />
                <h3 className="text-sm py-2 font-bold">
                  <span className=" border-l-blue-900 border-b-blue-900 border-spacing-2 border-l-2 border-b-2 mr-1"></span>{' '}
                  {res.title}
                </h3>
                <p className="text-sm">{res.description}</p>
              </div>
              <div
                className="bg-blue-900 mt-2 rounded-xl text-white h-10 flex items-center justify-center hover:scale-x-110 duration-1000"
                onClick={() => setShowModel(!showModel)}
              >
                <button>Get Inquiery</button>
              </div>
            </div>
          ))}

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
