import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function StudentInfo({ user_id, onDelete, }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [student, setStudent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // //toast notifications actions
    // const notifyDeleteSuccess = () => toast.success('Student delete successfully!', {autoClose: 2000});
    // const notifyDeleteError = () => toast.error('Failed to delete student!', {autoClose: 2000});

    // console.log(`api/students/${user_id}`);
    useEffect(() => {
        const fetchStudent = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`api/students/${user_id}`);
                // console.log(response.data);
                setStudent(response.data);
                setTimeout(() => {
                  setIsLoading(false);  
                }, 2000);
                
            } catch (error) {
                // console.error("Error fetching students:", error);
            }
        }

        fetchStudent();

        
    }, [user_id]);

    const handleDelete = async (e) => {
        e.preventDefault();
            try {
                // Send a PUT request to update the student data
                const response = await axios.delete(`/students/${user_id}`, student);
                // console.log('Student deleted successfully:', response.data);
                // notifyDeleteSuccess();
                // navigate("/students");  // Navigate back to the student info page
                onDelete(student.id);
                


            } catch (error) {
                // console.error('Error deleting student:', error);
                // notifyDeleteError();
            }

        };

    // console.log(`lol ${student}`)
    return (
        <div className="md:ml-72 lg:fixed lg:right-0 lg:mr-11 md:w-2/4 lg:w-60 h-3/4 mt-20 md:mt-20 lg:mt-28 bg-secondary rounded-2xl text-white text-center p-5 justify-center">

            { isLoading ? (
                <div className="text-center md:mt-0 lg:mt-20">
                    <p>Please hold on...</p>
                 </div>
            ) : (
                <div className="">
                        <h2 className="mb-4 text-2xl font-semibold mt-1">Student Info</h2>

                    <div className="mb-5">
                        <h1 className="text-base font-semibold">Student ID</h1>
                        <h3 className="text-base font-medium">{student.id}</h3>
                    </div>

                    <div className="mb-5">
                        <h1 className="text-base font-semibold">Student Name</h1>
                        <h3 className="text-base font-medium">{student.first_name} {student.last_name}</h3>
                    </div>

                    <div className="mb-5">
                        <h1 className="text-base font-semibold">Email address</h1>
                        <h3 className="text-base font-medium">{student.email}</h3>
                    </div>

                    <div className="mb-9">
                        <h1 className="text-base font-semibold">Date of Birth</h1>
                        <h3 className="text-base font-medium">{student.date_of_birth}</h3>
                    </div>

                    <div className="flex flex-row justify-center space-x-5">
                        <Link to={`/students/edit/${user_id}`} className='border w-24 py-2 bg-white text-table_head rounded text-sm font-semibold'>
                            <div className=''>
                            <h1 className='text-black'>Edit</h1>
                            </div>
                        </Link>
                        <Link to='#' onClick={handleDelete} className='border-red w-24 py-2 bg-red rounded text-sm font-semibold'>
                            <div className='bg-red'>
                            <h1 className=''>Delete</h1>
                            </div>
                        </Link>
                    </div> 
                </div>
            )}
            
            
        </div>
    )
};