import React from "react";
import { Link,  } from "react-router-dom";

export default function Alert({ title, message, type, otherStyles }) {
    const alertType = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (

        // <div className={`${alertType} text-white p-4 rounded mb-4 text-center fixed ml-52 pl-28`}>
        //     {message}
        // </div>
        <div className="flex flex-col items-center justify-center h-screen w-full ">
            <div class="bg-secondary items-center absolute w-1/4 h-2/4 m rounded overflow-hidden shadow-lg">
            
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-center">{title}</div>
                <p class="text-gray-700 text-base">{message}</p>
            </div>

            <div className="flex flex-row justify-center space-x-5">
                <Link to='' className='border px-4 py-1 bg-white rounded-xl'>
                    <div className=''>
                    <h1 className='text-black'>Yes</h1>
                    </div>
                </Link>
                <Link to='#' className='border px-4 py-1 bg-red rounded-xl'>
                    <div className=''>
                    <h1 className=''>No</h1>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    )
};