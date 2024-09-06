import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "../axiosConfig";
import SideBar from "./sideBar";
import StudentInfo from "./studentInfo";

export default function Students() {
    const location = useLocation();

    const [students, setStudents] = useState([]);
    const [selectedStudentID, setSelectedStudentID] = useState(null)

    const studentInfoID = (studentId) => {
        // const id = "hello";
        setSelectedStudentID(studentId)
        // console.log(studentId);
    }

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('api/students');
                // console.log(response.data);
                setStudents(response.data.students);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        }

        fetchStudents();

        
    }, []);

    const handleDelete = (deletedStudentID) => {
        setStudents(students.filter(student => student.id !== deletedStudentID));
        setSelectedStudentID(null);
    }
    return (
        <div>
            <SideBar currentRoute={"/students"}/>
            <div className="fixed ml-52 pl-28 pt-3 p-6 w-190 '">
                <div className="w-28 bg-secondary py-2 text-center rounded mb-3">
                    <Link to={'/student/add'} className=" text-white text-center  ">
                       Add Student
                    </Link>
                </div>
                
                    <div className="overflow-x-auto">
                        <table className="w-190 bg-white ">
                            <thead>
                                <tr>
                                    <th className="py-2 px-10 ">ID</th>
                                    <th className="py-2 px-10 ">First Name</th>
                                    <th className="py-2 px-10 ">Last Name</th>
                                    <th className="py-2 px-10 ">Email</th>
                                    {/* <th className="py-2 px-10 ">Date of Birth</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {students.length > 0 ? (
                                    students.map(student => (
                                        <tr key={student.id} className={`hover:bg-gray-100 `} onClick={() => studentInfoID(student.id)}>
                                            <td className="py-2 px-10 ">{student.id}</td>
                                            <td className="py-2 px-10 ">{student.first_name}</td>
                                            <td className="py-2 px-10 ">{student.last_name}</td>
                                            <td className="py-2 px-10 ">{student.email}</td>
                                            {/* <td className="py-2 px-10 ">{student.date_of_birth}</td> */}
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
               
    
            </div>
            {selectedStudentID && 
                <StudentInfo user_id={selectedStudentID} onDelete={handleDelete}/>
            }
            
        </div>
    )
}