import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../axiosConfig";
import SideBar from "./sideBar";
import StudentInfo from "./studentInfo";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Students() {
    const location = useLocation();

    const [students, setStudents] = useState([]);
    const [selectedStudentID, setSelectedStudentID] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    // //toast notifications actions
    const notifyDeleteSuccess = () => toast.success('Student deleted successfully!', {autoClose: 2000});
    const notifyDeleteError = () => toast.error('Failed to deleted student!', {autoClose: 2000});

    const studentInfoID = (studentId) => {
        // const id = "1";
        setSelectedStudentID(studentId)
        // console.log(studentId);
    }

    useEffect(() => {
        const fetchStudents = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get('api/students');
                // console.log(response.data);
                setStudents(response.data.students);
                setTimeout(() => {
                   setIsLoading(false) 
                }, 2000);
                
                
            } catch (error) {
                console.error("Error fetching students:", error);
            } finally {
                // setIsLoading(false);
            }
        }

        fetchStudents();
        // notifyAddSuccess();

        
    }, []);

    const handleDelete = (deletedStudentID) => {
        setStudents(students.filter(student => student.id !== deletedStudentID));
        setSelectedStudentID(null);
        notifyDeleteSuccess();
    }
    return (
        <div className="p-4 md:p-5 lg:p-0">
            <SideBar currentRoute={"/students"}/>
            <div className="w-full h-screen lg:flex">
                <div className="md:ml-72 md:w-2/4 lg:w-2/4 ">
                         <div className="w-32 py-3 mt-9 bg-secondary py-2 text-center rounded">
                            <Link to={'/student/add'} className="text-sm font-semibold text-white text-center  ">
                            Add Student
                            </Link>
                        </div>

                            { isLoading ? (
                        <div className="text-center mt-20">
                            <p>Loading students...</p>
                        </div>
                    ) : 
                    <div className="overflow-x-auto mt-9">
                            <table className=" bg-white ">
                                <thead className="mb-1.5">
                                    <tr >
                                        <th className="lg:text-start ps-3 py-1 text-sm font-bold text-table_head w-44 ">Student ID</th>
                                        <th className="lg:text-start py-1 text-sm font-bold text-table_head w-44 ">First Name</th>
                                        <th className="lg:text-start py-1 text-sm font-bold text-table_head w-44  ">Last Name</th>
                                        <th className="lg:text-start py-1 text-sm font-bold text-table_head w-44  ">Email</th>
                                        {/* <th className="lg:text-start py-1 text-xs font-bold text-table_head w-44  ">Date of Birth</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {students.length > 0 ? (
                                        students.map(student => (
                                            <tr key={student.id} className={`cursor-pointer hover:bg-secondary bg-table_bg space-y-3 ${selectedStudentID === student.id ? 'text-white bg-secondary' : '' }`} onClick={() => studentInfoID(student.id)}>
                                                <td className="text-center lg:text-start ps-3 py-5 text-xs font-medium text-table_head mb-3 text-table_body ">{student.id}</td>
                                                <td className="text-center lg:text-start py-1 py-5 text-xs font-medium text-table_head mb-3 text-table_body ">{student.first_name}</td>
                                                <td className="text-center lg:text-start py-1 py-5 text-xs font-medium text-table_head mb-3  text-table_body">{student.last_name}</td>
                                                <td className=" text-center lg:text-startpy-1  py-5 text-xs font-medium text-table_head mb-3  text-table_body">{student.email}</td>
                                                {/* <td className="py-1 text-xs font-medium text-table_head mb-3  text-table_body">{student.date_of_birth}</td> */}
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="py-2 px-4 text-center">No students found</td>
                                        </tr>
                                    )}

                                    
                                </tbody>
                            </table>
                        </div>
                    }
                </div>

                    {selectedStudentID &&
                    <div className="">
                    <StudentInfo user_id={selectedStudentID} onDelete={handleDelete}  className=''/> 
                    </div> 
                    
                }
            </div>
            

            <ToastContainer />
            
        </div>
    )
}