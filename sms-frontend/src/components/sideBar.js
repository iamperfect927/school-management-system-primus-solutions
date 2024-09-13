import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/logo.png';
import Arrow from '../assets/arrow.png';
import { FaRegUser, FaBurger } from 'react-icons/fa6';


export default function SideBar({ currentRoute }) {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const handleSideBar = () => {
        setIsSideBarOpen(prevState => !prevState);
    };

    

    return(
        <div>
            <button
                className="hamburger-menu md:hidden mt-4 p-2"
                onClick={handleSideBar}
                aria-expanded={isSideBarOpen}
                aria-label="Toggle Sidebar"
            >
                <FaBurger className="size-5"/>
            </button>

          {/* <div className={`sidebar ${isSideBarOpen ? 'block' : 'hidden md:block'}`}> */}
            {/* <!-- sidebar content --> */}
                <div className={`fixed top-0 left-0 h-screen w-60 bg-primary text-white flex flex-col items-center py-4 transition-transform duration-300 ease-in-out ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                
                    
                    <img src={Logo} alt="logo" className="size-16 object-cover mt-6 mb-11 rounded-full" />
                
                <div className="mb-11">
                    <h2 className="text-sm font-semibold ">Udemy Inter. school</h2>
                </div>
                
                <div className="border border-border_col w-full mb-11"></div>

                <ul className="w-full">
                    <li className="w-full"></li>
                    
                    <Link to='/' className={`flex flex-row items-center justify-center rounded  mx-4 py-2 mb-2 ${currentRoute === '/' ? 'bg-secondary' : 'bg-primary'}`}>
                        
                        <FaRegUser  className="size-4"/>
                        <li className=" px-4 text-lg mx-4">Dashboard</li>
                        {currentRoute === '/' && (
                            <img src={Arrow} alt="arrow" className="" />
                        )}

                    </Link>
                    
                    <Link to="/students" className={`flex flex-row items-center justify-center rounded mx-4 py-2 ${currentRoute === '/students' ? 'bg-secondary' : 'bg-primary'} ${currentRoute ===  '/studentForm' ? 'bg-secondary' : 'bg-primary'}`}>
                        
                        <FaRegUser className="size-4"/>
                        <li className={` px-4 text-lg mx-5 `}>Students</li>
                        {currentRoute === '/students' && (
                            <img src={Arrow} alt="arrow" className="" />
                        )}
                        {/* {currentRoute === '/studentsForm' && (
                            <img src={Arrow} alt="arrow" className="" />
                        )} */}
                    </Link>
                    
                </ul>
            </div>
          {/* </div> */}
          {/* Close sidebar when clicking outside */}
            {isSideBarOpen && (
                    <div 
                        className="fixed inset-0 bg-black opacity-50 md:hidden" 
                        onClick={handleSideBar}
                    ></div>
                )}
        </div>
        
    )
}