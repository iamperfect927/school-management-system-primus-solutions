import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../axiosConfig";

export default function StudentInfo({ user_id, onDelete }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [student, setStudent] = useState([]);

    // console.log(`api/students/${user_id}`);
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`api/students/${user_id}`);
                // console.log(response.data);
                setStudent(response.data);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        }

        fetchStudent();

        
    }, [user_id]);

    const handleDelete = async (e) => {
        e.preventDefault();
            try {
                // Send a PUT request to update the student data
                const response = await axios.delete(`/students/${user_id}`, student);
                console.log('Student deleted successfully:', response.data);
                // navigate("/students");  // Navigate back to the student info page
                onDelete(student.id);
                


            } catch (error) {
                console.error('Error deleting student:', error);
            }

        };

    // console.log(`lol ${student}`)
    return (
        <div className="fixed right-0 mr-16 w-64 h-82 mt-32 bg-secondary rounded-2xl text-white text-center p-5 justify-center">
            <h2 className="mb-4 text-2xl">Student Info</h2>

            <div className="mb-4">
                <h1 className="font-bold">Student ID</h1>
                <h3>{student.id}</h3>
            </div>

            <div className="mb-4">
                <h1 className="font-bold">Student Name</h1>
                <h3>{student.first_name} {student.last_name}</h3>
            </div>

            <div className="mb-4">
                <h1 className="font-bold">Email address</h1>
                <h3>{student.email}</h3>
            </div>

            <div className="mb-4">
                <h1 className="font-bold">Date of Birth</h1>
                <h3>{student.date_of_birth}</h3>
            </div>

            <div className="flex flex-row justify-center space-x-5">
                <Link to={`/students/edit/${user_id}`} className='border px-6 py-1 bg-white rounded-xl'>
                    <div className=''>
                    <h1 className='text-black'>Edit</h1>
                    </div>
                </Link>
                <Link to='#' onClick={handleDelete} className='border-red px-4 py-1 bg-red rounded-xl'>
                    <div className='bg-red'>
                    <h1 className=''>Delete</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
};