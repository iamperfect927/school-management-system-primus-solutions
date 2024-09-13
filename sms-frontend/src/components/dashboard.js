import React, { useEffect, useState } from 'react';
import SideBar from './sideBar';
import { Link, useLocation } from "react-router-dom";

import { FaBurger } from 'react-icons/fa6';

import User from '../assets/user.png';
import Edit from '../assets/edit.png';
import Add from '../assets/add.png';

export default function Dashboard() {

  const location = useLocation();
    return (
        <div className='p-4 md:p-4 lg:p-0'>
            <SideBar currentRoute={'/'} className=''/>

          <div className='mt-6 md:mt-20 md:ml-28 lg:ml-0 lg:mt-14 w-full flex flex-col justify-center items-center'>
          <div className='md:w-96 lg:w-1/2'>
            <div className=''>
              <h1 className='text-3xl font-semibold text-center text-header mb-6 md:mb-4'>Welcome to the Students Dashboard</h1>
              <h3 className='text-2xl text-center font-semibold text-black mb-11 md:mb-10'>Here is how you can manage students</h3>
            </div>
              <div className='text-header px-5 md:pl-20'>
                <Link to='/students' className='flex flex-row mb-12'>
                  <img src={User} alt="user" className="size-9 mr-5 " />    
                  <div className='space-y-4'>
                    <h1 className='text-2xl font-medium'>View all students</h1>
                    <h3 className='text-xm font-normal'>View all the students stored in our database</h3>
                  </div>
                </Link>
                <Link to='/student/add' className='flex flex-row mb-12'>
                  <img src={Add} alt="add" className="size-9 mr-5 " />    
                  <div className='space-y-4'>
                    <h1 className='text-2xl font-medium'>Add student</h1>
                    <h3 className='text-xm font-normal'>Add other student to the system</h3>
                  </div>
                </Link>
                <Link to='/students' className='flex flex-row'>
                  <img src={Edit} alt="edit" className="size-9 mr-5 " />   
                  <div className='space-y-4'>
                    <h1 className='text-2xl font-medium'>Edit and Delete student</h1>
                    <h3 className='text-xm font-normal'>you can also edit and delete users on the system</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
            
            
              
        </div>

        
    )};