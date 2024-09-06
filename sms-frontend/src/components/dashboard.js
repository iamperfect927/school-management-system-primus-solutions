import React, { useEffect, useState } from 'react';
import SideBar from './sideBar';
import { Link, useLocation } from "react-router-dom";

import { FaUsers } from 'react-icons/fa6';

import User from '../assets/user.png';
import Edit from '../assets/edit.png';
import Add from '../assets/add.png';

export default function Dashboard() {

  const location = useLocation();
    return (
        <div className=''>
          <SideBar currentRoute={'/'}/>
          <div className='fixed ml-64 pl-40 pt-36 p-6 w-190 justify-center items-center'>
            <div className='mb-10'>
              <h1 className='text-3xl text-center text-header font-bold mb-3'>Welcome to the Students Dashboard</h1>
              <h3 className='text-center font-semibold text-black'>Here is how you can manage students</h3>
            </div>
            
            <div className='text-header'>
              <Link to='/students' className='flex flex-row mb-5'>
                <img src={User} alt="user" className="w-5 h-5 " />    
                <div className='pl-3 space-y-2'>
                  <h1 className='text-xl'>View all students</h1>
                  <h3 className='text-xs'>View all the students stored in our database</h3>
                </div>
              </Link>
              <Link to='/student/add' className='flex flex-row mb-5'>
                <img src={Add} alt="add" className="w-5 h-5 " />    
                <div className='pl-3 space-y-2'>
                  <h1 className='text-xl'>Add student</h1>
                  <h3 className='text-xs'>Add other student to the system</h3>
                </div>
              </Link>
              <Link to='/students' className='flex flex-row'>
                <img src={Edit} alt="edit" className="w-5 h-5 " />   
                <div className='pl-3 space-y-2'>
                  <h1 className='text-xl'>Edit and Delete student</h1>
                  <h3 className='text-xs'>you can also edit and delete users on the system</h3>
                </div>
              </Link>
            </div>
          </div>  
        </div>

        
    )};