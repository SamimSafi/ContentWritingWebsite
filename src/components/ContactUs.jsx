import React, { useEffect, useState } from "react";
import {MdEmail,MdCall,MdLocationOn,MdFacebook} from "react-icons/md"
import axios from "axios";
import { baseUrl } from "../adminPanel/Constaints/baseUrl";

function ContactUs() {
  const [contactUs, setContactUs] = useState([]);

  const loadContactUs = () => {
    axios
      .get(baseUrl + '/getFooterRec')
      .then((res) => setContactUs(res.data))
      .catch((err) => console.log(err));

  };
  useEffect(() => {
    loadContactUs();
  }, []);
  
  return (
    <div className="w-full  flex justify-center items-center">
      <div className=" w-full flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-blue-900  p-8 shadow-lg text-white">
        <div className="flex flex-col space-y-8 justify-between w-656">
          <div>
            <h1 className="font-bold text-4xl tracking-wide"><span className="border-b-4 border-b-blue-300 rounded-xl">Contact Us</span></h1>
            <p className="pt-4 text-white text-sm">
             {contactUs.length > 0 && contactUs[0].description}
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline-flex space-x-2 items-center">
              <i className="text-white text-xl"><MdCall/></i>
              <span>{contactUs.length > 0 && contactUs[0].phone}</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <i className="text-white text-xl"><MdEmail/></i>
              <span>{contactUs.length > 0 && contactUs[0].email}</span>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <i className="text-white text-xl"><MdLocationOn/></i>
              <span>{contactUs.length > 0 && contactUs[0].address}</span>
            </div>
          </div>
        
        </div>
        <div className="w-full bg-white rounded-xl shadow-lg p-8 text-gray-600">
          <form action="" className="flex flex-col space-y-4">
            <div>
              <label htmlFor="" className="text-sm">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Message
              </label>
              <textarea
                type="text"
                multiple
                placeholder="Your Message"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>
            <button className="inline-block self-end bg-blue-900 hover:bg-blue-600 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
