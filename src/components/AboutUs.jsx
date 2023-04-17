import React from 'react';
import C1 from '../img/c1.png';
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../adminPanel/Constaints/baseUrl';
import { useEffect } from 'react';
function AboutUs() {
  const [about, setAbout] = useState([]);

  const loadAbout = () => {
    axios
      .get(baseUrl + '/getAbout')
      .then((res) => setAbout(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadAbout();
  }, []);
  return (
    <>
      <div className="max-w-[1320px] md:py-[80] py-5 mx-auto">
        <h1 className="text-4xl text-center">
          <span className="border-b-4 border-b-blue-900 rounded-xl">About Us</span>
        </h1>
      </div>
      {about &&
        about.map((res) => (
          <div className="max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col">
            <div className="basis-[45%] pb-5">
              <img src={baseUrl + '/' + res.image} alt="" className="w-full" />
            </div>
            <div className="basis-[55%] px-5">
              <h1 className="text-4xl pb-5">{res.title}</h1>
              <p className="py-3">{res.description}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default AboutUs;
