import React, { useState } from 'react';
import logo from '../../assets/logo/logo.png';
import { TiThMenu } from 'react-icons/ti';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Navbar.css';


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const HandDrawnCircle = () => (
        <svg className="hand-draw-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 152.9 43.4">
            <path fill="none" stroke="currentColor" strokeWidth="2" d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
        </svg>
    );

    // This style can be moved to a CSS file for cleaner code
    const activeStyles = {
        boxShadow: "inset 0 -4px 0 0 currentColor",
        paddingBottom: "5px",
    };

    return (
        <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <nav className='bg-default-blue-500 px-10 py-2 lg:px-20 flex flex-row w-full justify-between items-center gap-4'>
                <Link to='/'><img src={logo} alt="Logo" className='w-24' /></Link>
                <div className="flex-row gap-14 w-full justify-center items-center text-lg font-black text-default-yellow hidden lg:flex relative">
                    <NavLink to='about' className={({ isActive }) => isActive ? "active-link" : ""}>
                        {({ isActive }) => (
                            <div className="link-container relative">
                                About Project
                                {isActive && <HandDrawnCircle />}
                            </div>
                        )}
                    </NavLink>
                    <NavLink to='osa' className={({ isActive }) => isActive ? "active-link" : ""}>
                        {({ isActive }) => (
                            <div className="link-container relative">
                                About OSA
                                {isActive && <HandDrawnCircle />}
                            </div>
                        )}
                    </NavLink>
                    <NavLink to='model' className={({ isActive }) => isActive ? "active-link" : ""}>
                        {({ isActive }) => (
                            <div className="link-container relative">
                                Prediction Model
                                {isActive && <HandDrawnCircle />}
                            </div>
                        )}
                    </NavLink>
                    
                 
                </div>
                <Link to='questionnaire' className='bg-default-yellow py-2 px-4 border-solid border-white rounded-xl text-default-blue-500 font-bold w-40 text-center hidden lg:block transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-default-blue-500 focus:ring-opacity-50'>TEST NOW</Link>
                <TiThMenu className='text-default-yellow h-24 text-5xl lg:hidden' onClick={toggleSidebar} aria-label="Toggle Sidebar"/>
            </nav>
        </>
    );
}

export default Navbar;
