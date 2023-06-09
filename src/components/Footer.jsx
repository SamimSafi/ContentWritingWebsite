import React, { useEffect, useState } from "react";
import {BiChevronRight} from "react-icons/bi"
import { IconPickerItem } from 'react-fa-icon-picker'
import axios from "axios";
import { baseUrl } from "../adminPanel/Constaints/baseUrl";
function Footer() {
  const [social, setSocial] = useState([]);
  const [footer, setFooter] = useState([]);
  const loadSocial = () => {

    axios
    .get(baseUrl + '/getFooterRec')
    .then((res) => setFooter(res.data))
    .catch((err) => console.log(err));
      axios
      .get(baseUrl + '/getSocialMedia')
      .then((res) => setSocial(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadSocial();
  }, []);
  return (
    <footer className="w-full mt-10">
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h2 className="text-2xl pb-4">{footer.length > 0 && footer[0].company}</h2>
              <div className="mb-5">
                <p className="text-gray-500">
                {footer.length > 0 && footer[0].address}<br />
                  <br />
                  <div className="flex space-x-4 text-lg">
            {social.length > 0 && social.map((res)=>(
                <a href="#">
                <i><IconPickerItem icon={res.icon} size={24} color="white" /></i>
              </a>
            ))}
        
          </div>
                </p>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Useful Links</h4>
              <ul className="text-gray-500 ">
                <li className="pb-4 flex flex-row">
                  <span className="text-yellow-500"><BiChevronRight/></span>{" "}
                  <a href="#" className="hover:text-yellow-500">
                    Home
                  </a>
                </li>
                <li className="pb-4 flex flex-row">
                  <i className="text-yellow-500"><BiChevronRight/></i>{" "}
                  <a href="#" className="hover:text-yellow-500">
                    About Us
                  </a>
                </li>
                <li className="pb-4 flex flex-row">
                  <i className="text-yellow-500"><BiChevronRight/></i>{" "}
                  <a href="#" className="hover:text-yellow-500">
                    Services
                  </a>
                </li>
                <li className="pb-4 flex flex-row">
                  <i className="text-yellow-500"><BiChevronRight/></i>{" "}
                  <a href="#" className="hover:text-yellow-500">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4">Our Services</h4>
              <ul className="text-gray-500">
                <li className="pb-4 flex flex-row">
                  <BiChevronRight  className="text-yellow-500"/>
                  <a href="#" className="hover:text-yellow-500">
                    Web
                  </a>
                </li>
                <li className="pb-4 flex flex-row">
                  <i className="text-yellow-500"><BiChevronRight/></i>{" "}
                  <a href="#" className="hover:text-yellow-500">
                    Content
                  </a>
                </li>
                <li className="pb-4 flex flex-row">
                  <i className="text-yellow-500"><BiChevronRight/></i>{" "}
                  <a href="#" className="hover:text-yellow-500">
                    Product
                  </a>
                </li>
                <li className="pb-4 flex flex-row">
                  <i className="text-yellow-500"><BiChevronRight/></i>{" "}
                  <a href="#" className="hover:text-yellow-500">
                    Graphic
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-4">
              <h4>Join Our News Letter</h4>
              <p className="text-gray-500 pb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <form className="flex flex-row flex-wrap">
                <input
                  type="text"
                  className="text-gray-200 w-2/3 p-2 focus:border-yellow-500"
                  placeholder="email@example.com"
                  name=""
                  id=""
                ></input>
                <button className="p-2 w-2/3 bg-yellow-500 text-white hover:bg-yellow-600">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div>
          <div className="text-center">
            <div>
              Copyright @{" "}
              <strong>
                <span>Elam.International</span>
              </strong>
              . All Rights Reserved
            </div>
            <div>
              Designed By <strong>Elam International Staff</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
