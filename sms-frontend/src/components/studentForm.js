import React, { useState, useEffect} from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import SideBar from "./sideBar";
import axios from "../axiosConfig";
import Alert from "./alert";

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
                console.log('Student updated successfully:', response.data);
                // navigate("/students");  // Navigate back to the student info page
                
                setTimeout(() => navigate('/students'), 1000);


            } catch (error) {
                console.error('Error updating student:', error);
            }

        } else {
            try {
                // Post form data to the backend
                const response = await axios.post("/students", formData);
                // console.log("Student added successfully:", response.data);
                setTimeout(() => navigate('/students'), 1000);
            } catch (error) {
                console.error("Error adding student:", error);
            }  
        }

        
    };

    return (
        <div>
            <SideBar currentRoute={"/studentForm"}/>
            
            <form onSubmit={handleSubmit} className="fixed ml-80 pt-3 p-6 w-2/4 text-header mt-10">
                <h1 className="text-black text-2xl mb-16 font-bold ml-20">{isEditing ? 'Update Student' : 'Add Student'}</h1>
                <div className="flex flex-row space-x-10 mb-10 ml-20">
                    <div className="flex flex-col">
                        <label>First Name</label>
                        <input 
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            className="border py-1 w-120 pl-1"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Last Name</label>
                        <input 
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            className="border py-1 pl-1"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-row space-x-10 ml-20 mb-10 ">
                    <div className="flex flex-col ">
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border py-1 pl-1"
                            required
                        />
                    </div>
                    <div className="flex flex-col ">
                        <label>DOB</label>
                        <input 
                            type="date"
                            name="date_of_birth"
                            value={formData.date_of_birth}
                            onChange={handleInputChange}
                            className="border py-1 pl-1 w-4/4"
                            required
                        />
                    </div>
                </div>
                

                <button 
                type="submit" 
                className="bg-gray-300 text-black px-4 py-2 rounded ml-20"
                >
                    {isEditing ? 'Update Student' : 'Add Student'}
                </button>
            </form>
        </div>
    );
}