import React, { useState } from 'react';
import { FaClosedCaptioning } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import axios from 'axios';

function Model({ children, setShowModel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi');
    axios.post('http://localhost:8081/create', { name, email, description }).then((res) => {
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
        <div className="p-3 shadow-lg  mt-2 mb-2 mr-2 ml-2">{children}</div>
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
