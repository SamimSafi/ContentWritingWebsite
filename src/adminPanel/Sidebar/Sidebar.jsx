import React from 'react'
import logo from '../../img/logo.png';
import {BiHomeAlt,BiGridAlt,BiCard,BiUser,BiCalculator} from 'react-icons/bi';
import {IoMdSettings} from 'react-icons/io';
function Sidebar() {
    const menu=[
        {name:"Home",icon:<BiHomeAlt/>},
        {name:"Account",icon:<BiGridAlt/>},
        {name:"Cards",icon:<BiCard/>},
        {name:"Contacts",icon:<BiUser/>},
        {name:"Loan Calculator",icon:<BiCalculator/>},
        {name:"Settings",icon:<IoMdSettings/>},
    ]
  return (
    <div className='h-screen border-r border-r-gray-200 w-64 px-9 py-9 space-y-24'>
        <div className='flex flex-row items-center pt-8'>
            <img src={logo} alt="" className='w-10 h-10 object-cover'/>
            <div className='text-sm ml-1'>
                Elam International
            </div>
        </div>
        <div className='space-y-24'>
            <div>
            <div className='mb-4 text-indigo-700'>
                Menu
            </div>
            <ul>

            {
                menu.map((val,index)=>(
                    <li key={index} className="mb-7 flex flex-row items-center text-gray-400">
                        <div className='mr-4'>{val.icon}</div>
                        <div>

                         {val.name}
                        </div>
                         </li>
                ))
            }
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar