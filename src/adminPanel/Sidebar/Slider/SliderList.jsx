import React from 'react';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminServices from './SliderForm';
import Model from '../Model';
import SliderForm from './SliderForm';
function SliderList() {
  const [showModel, setShowModel] = useState(false);
  const [sliders, setSliders] = useState([]);

  const deleteSlider = (id) => {
    axios
      .delete('http://localhost:8081/deleteSlider/' + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        loadSlider();
      });
  };
  const loadSlider = () => {
    axios
      .get('http://localhost:8081/getSlider')
      .then((res) => setSliders(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadSlider();
  }, []);

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg min-w-620 max-w-6xl">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <label for="table-search" class="sr-only">
            Search
          </label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                id="table-search"
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
              <button
                onClick={() => setShowModel(!showModel)}
                id="table-search"
                class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sliders &&
              sliders.map((res) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">{res.id}</td>
                  <td
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={'http://localhost:8081/' + res.image}
                    ></img>
                  </td>
                  <td class="px-6 py-4">{res.title}</td>

                  <td class="px-6 py-4">
                    <Link to={`/UpdateSlider/${res.id}`}>
                      <a
                        href="#"
                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </Link>
                    <a
                      onClick={() => deleteSlider(res.id)}
                      href="#"
                      class="font-medium ml-2 text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {showModel === true && (
        <Model setShowModel={setShowModel}>
          <SliderForm loadSlider={loadSlider} setShowModel={setShowModel} />
        </Model>
      )}
    </>
  );
}

export default SliderList;
