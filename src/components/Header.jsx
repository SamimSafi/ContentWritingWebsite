import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import { MdAddShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { GiHamburgerMenu } from "react-icons/gi";
import { baseUrl } from "../adminPanel/Constaints/baseUrl";
import axios from "axios";

const Header = () => {
  const [header, setHeader] = useState([]);

  const loadHeader = () => {
    axios
      .get(baseUrl + '/getHeader')
      .then((res) => setHeader(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadHeader();
  }, []);

  const [isMenu, setIsmenu] = useState(false);

  const login = async () => {
    setIsmenu(!isMenu);
  };

  const logout = () => {
    setIsmenu(false);
  };

  return (
    <header className="fixed z-50 w-screen  p-3 px-4 md:p-2 md:px-16 bg-blue-900 shadow-md text-white">
      {/* Desktop & Tablet */}
      <div className="hidden md:flex w-full items-center justify-between">
      {header.length > 0 ? ( <Link to={"/"} className="flex items-center gap-2">
      
      <img src={baseUrl+'/' + header[0].logo} className="w-2/12 object-cover" alt="logo" />
      <p className="text-white text-xl font-bold">{header[0].company}</p>
    </Link>):( <Link to={"/"} className="flex items-center gap-2">
      
      <img src={Logo} className="w-2/12 object-cover" alt="logo" />
      <p className="text-white text-xl font-bold">Elam International</p>
    </Link>)}
       
        <div className="flex items-center gap-8 ">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <Link to={"/"}>
              <li className="text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"/Services"}>
              <li className="text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Service
              </li>
            </Link>
            <Link to={"/Team"}>
              {" "}
              <li className="text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Team
              </li>
            </Link>
            <Link to={"/"}>
              {" "}
              <li className="text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Appointment
              </li>
            </Link>
            <Link to={"/Contact"}>
              {" "}
              <li className="text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Contact Us
              </li>
            </Link>
            <Link to={"/About"}>
              {" "}
              <li className="text-base text-white hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                About us
              </li>
            </Link>
          </motion.ul>
        </div>
      </div>
      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-white text-xl font-bold">Elam International</p>
        </Link>

        <div className="relative">
          <motion.strong
            whileTap={{ scale: 0.6 }}
            className=" w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full "
            onClick={login}
          >
            <GiHamburgerMenu />
          </motion.strong>
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
            >
              <ul className="flex flex-col  ">
                <Link to={"/"}>
                  <li className="text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Home
                  </li>
                </Link>
                <Link to={"/Services"}>
                  <li className="text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Services
                  </li>
                </Link>
                <Link to={"/Team"}>
                  <li className="text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Our Team
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Appointment
                  </li>
                </Link>
                <Link to={"/Contact"}>
                  <li className="text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Contact us
                  </li>
                </Link>
                <Link to={"/About"}>
                  <li className="text-base text-textColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    About us
                  </li>
                </Link>
              </ul>
              <p
                className="m-2 p-2 rounded-lg shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
