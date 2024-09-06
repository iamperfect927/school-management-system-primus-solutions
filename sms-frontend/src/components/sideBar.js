import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/logo.png';
import Arrow from '../assets/arrow.png';
import { FaRegUser } from 'react-icons/fa6';

export default function SideBar({ currentRoute }) {

    

    return(
        <div className="sidebar bg-primary h-screen w-64 fixed top-0 left-0  text-white flex flex-col items-center py-4">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                
                <img src={Logo} alt="logo" className="w-20 h-20 object-cover" />
            </div>
            <h2 className="text-2xl font-bold mb-16">Udemy Inter School</h2>
            <hr/>

            <ul className="w-full">
                <li className="w-full"></li>
                
                <Link to='/' className={`flex flex-row items-center justify-center  mx-5 py-2 mb-4 ${currentRoute === '/' ? 'bg-secondary' : 'bg-primary'}`}>
                    {/* <img src={Logo} alt="logo" className="w-5 h-5 " /> */}
                    <FaRegUser />
                    <li className=" px-4">Dashboard</li>
                    {currentRoute === '/' && (
                        <img src={Arrow} alt="arrow" className="" />
                    )}

                </Link>
                
                <Link to="/students" className={`flex flex-row items-center justify-center  mx-5 py-2 mb-4 ${currentRoute === '/students' ? 'bg-secondary' : 'bg-primary'} ${currentRoute ===  '/studentForm' ? 'bg-secondary' : 'bg-primary'}`}>
                    {/* <img src={Logo} alt="logo" className="w-5 h-5 " /> */}
                    <FaRegUser />
                    <li className={` px-6 block`}>Students</li>
                    {currentRoute === '/students' && (
                        <img src={Arrow} alt="arrow" className="" />
                    )}
                    {/* {currentRoute === '/studentsForm' && (
                        <img src={Arrow} alt="arrow" className="" />
                    )} */}
                </Link>
                
            </ul>
        </div>
    )
}