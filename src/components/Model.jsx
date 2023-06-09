import React, { useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

function Model({ setShowModel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
    axios
      .post("http://localhost:8081/create", { name, email, description })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-50 bg-gray-600 bg-opacity-50">
      <div className="bg-white rounded shadow-lg w-1/2 ">
        {/* Model Title */}
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className=" font-semibold text-xl">Model Title</h3>
          <button onClick={() => setShowModel()}>
            <AiFillCloseCircle className="h-10 w-10 text-blue-900" />
          </button>
        </div>
        {/* Model Body */}
        <div className="p-3 shadow-lg  mt-2 mb-2 mr-2 ml-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 text-left"
          >
            <div>
              <label htmlFor="" className="text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Message
              </label>
              <textarea
                type="text"
                name="description"
                multiple
                placeholder="Your Message"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={() => console.log("hi")}
              className="inline-block self-end bg-blue-900 hover:bg-blue-600 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-end items-center w-50 border-t p-3">
          <button
            className="bg-gray-500 hover:bg-gray-700 px-3 py-1 rounded text-white "
            onClick={() => setShowModel()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;
