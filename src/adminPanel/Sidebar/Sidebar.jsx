import React from 'react';
import logo from '../../img/logo.png';
import { BiHomeAlt, BiGridAlt, BiCard, BiUser, BiCalculator } from 'react-icons/bi';
import { IoMdSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';
function Sidebar() {
  const menu = [
    { name: 'Dashboard', icon: <BiHomeAlt />, route: '/Dashboard' },
    { name: 'Services', icon: <BiGridAlt />, route: '/AdminServices' },
    { name: 'Contac tUs', icon: <BiCard />, route: '/AdminContact' },
    { name: 'About Us', icon: <BiUser />, route: '' },
    { name: 'Team', icon: <BiCalculator />, route: '' },
    { name: 'Social Media', icon: <IoMdSettings />, route: '' },
    { name: 'Header', icon: <IoMdSettings />, route: '' },
    { name: 'Inquieries', icon: <IoMdSettings />, route: '' },
    { name: 'Header', icon: <IoMdSettings />, route: '' },
    { name: 'Footer', icon: <IoMdSettings />, route: '' },
    { name: 'Slider', icon: <IoMdSettings />, route: '' },
  ];
  return (
    <div className="h-screen border-r border-r-gray-200 w-64 px-9 py-9 space-y-8">
      <div className="flex flex-row items-center pt-8">
        <img src={logo} alt="" className="w-10 h-10 object-cover" />
        <div className="text-sm ml-1">Elam International</div>
      </div>
      <div className="space-y-24">
        <div>
          <div className="mb-4 text-indigo-700">Menu</div>
          <ul>
            {menu.map((val, index) => (
              <Link to={val.route}>
                <li key={index} className="mb-7 flex flex-row items-center text-gray-400">
                  <div className="mr-4">{val.icon}</div>
                  <div>{val.name}</div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
