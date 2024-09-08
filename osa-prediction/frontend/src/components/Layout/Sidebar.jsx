import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const activeStyles = {
    textDecorationLine: "overline underline",
    textDecorationThickness: "10px",
  };

  return (
    <div className={`fixed w-full h-full bg-default-blue-500 text-default-yellow transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out flex flex-col pl-12 pt-10 gap-4 z-50 lg:hidden font-black`}>
      <div className="absolute top-4 right-4 pt-8 ">
        <AiOutlineClose onClick={toggleSidebar} className="text-4xl cursor-pointer mr-6" />
      </div>
      <NavLink onClick={toggleSidebar} to="/osa" className='p-4 w-2/3' style={({ isActive }) => isActive ? activeStyles : undefined}>
        About OSA
      </NavLink>
      <NavLink onClick={toggleSidebar} to="/about" className='p-4 w-2/3' style={({ isActive }) => isActive ? activeStyles : undefined}>
        About Project
      </NavLink>
      <NavLink onClick={toggleSidebar} to="/model" className='p-4 w-2/3' style={({ isActive }) => isActive ? activeStyles : undefined}>
        Prediction Model
      </NavLink>
      {/* Add other links as needed */}
    </div>
  )
}

export default Sidebar;
