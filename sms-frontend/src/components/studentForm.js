import React, { useState, useEffect} from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SideBar from "./sideBar";
import axios from "../axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function StudentForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const user_id = id ;
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        date_of_birth: "",
    });

    const [isEditing, setIsEditing] = useState(false);
    // console.log(user_id);

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // toast notifications for all actions
    const notifyAddSuccess = () => toast.success('Student added successfully!', {autoClose: 2000});
    const notifyAddError = () => toast.error('Failed to Add student!', {autoClose: 2000});

    const notifyEditSuccess = () => toast.success('Student updated successfully!', {autoClose: 2000});
    const notifyEditError = () => toast.error('Failed to update student!', {autoClose: 2000});

    useEffect(() => {
        if (user_id) {
            setIsEditing(true)
            const fetchStudent = async () => {
                try {
                    const response = await axios.get(`api/students/${user_id}`);
                    // console.log(response.data);
                    setFormData(response.data);
                } catch (error) {
                    console.error("Error fetching students:", error);
                }
            }
        

            fetchStudent();
        }
        
    }, [user_id]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditing) {
            try {
                // Send a PUT request to update the student data
                const response = await axios.put(`/students/${user_id}`, formData);
                // console.log('Student updated successfully:', response.data);
                notifyEditSuccess();
                // navigate("/students");  // Navigate back to the student info page
                
                setTimeout(() => navigate('/students'), 1000);


            } catch (error) {
                // console.error('Error updating student:', error);
                notifyEditError();
            }

        } else {
            try {
                // Post form data to the backend
                const response = await axios.post("/students", formData);
                // console.log("Student added successfully:", response.data);
                notifyAddSuccess();
                setTimeout(() => navigate('/students'), 1000);
            } catch (error) {
                // console.error("Error adding student:", error);
                notifyAddError();
            }  
        }

        
    };

    return (
        <div className="p-4 md:p-4 lg:p-0">
            <SideBar currentRoute={"/studentForm"}/>
            <div className="w-full">
                    <form onSubmit={handleSubmit} className=" md:ml-72 lg:ml-80 pt-3 md:w-2/4 lg:w-2/3  text-header mt-10 ">
                    <h1 className="text-table_head text-3xl mb-16 font-semibold md:text-center lg:ml-10">{isEditing ? 'Update Student' : 'Add Student'}</h1>
                    <div className="flex flex-col md:flex-col lg:flex-row space-y-7 md:space-y-7 lg:space-y-0 md:space-x-0 lg:space-x-9 mb-10 lg:ml-10">
                        <div className="flex flex-col">
                            <label className="text-sm font medium ps-1">First Name</label>
                            <input 
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                className="border py-2 lg:w-80 pl-1"
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font medium ps-1">Last Name</label>
                            <input 
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                className="border py-2 lg:w-80 md:pl-1"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-col lg:flex-row space-y-7 md:space-y-7 lg:space-y-0 md:space-x-0 lg:space-x-9 mb-10 lg:ml-10">
                        <div className="flex flex-col ">
                            <label className="text-sm font medium ps-1">Email</label>
                            <input 
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border py-2 lg:w-80 pl-1"
                                required
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label className="text-sm font medium ps-1">DOB</label>
                            <input 
                                type="date"
                                name="date_of_birth"
                                placeholder="Date of Birth"
                                value={formData.date_of_birth}
                                onChange={handleInputChange}
                                className="border py-2  pl-1 "
                                required
                            />
                        </div>
                    </div>
                    

                    <button 
                    type="submit" 
                    className="bg-btn_bg text-table_body  py-2 rounded lg:ml-10 w-full md:w-36"
                    >
                        {isEditing ? 'Update Student' : 'Add Student'}
                    </button>
                </form>
            </div>
            
            <ToastContainer />
        </div>
    );
}