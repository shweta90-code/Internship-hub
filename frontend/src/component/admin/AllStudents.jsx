import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../common/Footer";
import "../css/display_style.css";
import { useNavigate} from "react-router-dom"


function Students() {
    const  navigate=useNavigate()
     
        //fetching the email value from localstorage
        const email=localStorage.getItem("storageKey")
        console.log("Admin Email:",email);
  
    const [student, setStudent] = useState([]);
    const APIURL = "http://localhost:3000/student/viewAllStudents";

    async function fetchStudent() {
        try {
            const serverResponse = await axios.get(APIURL);
            console.log(serverResponse.data);

            setStudent(serverResponse.data.studentData);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
         if(!email)
    navigate("/adminLogin",{
  state:
{
  message:"UnAuthorised Access"
}}
  
)
        fetchStudent();
    }, []);

    return (
        <>
            <AdminHeader />

            <div className="main-div">
                <div className="container py-4">
                    <h2 className="text-center mb-4 mt-5">
                        All Students
                    </h2>

                    <div className="myFlexContainer">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Password</th>
                                    <th>Fields</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    student.map((cObj) => {
                                        return (
                                            <tr key={cObj._id}>
                                                <td>{cObj.name}</td>
                                                <td>{cObj.email}</td>
                                                <td>{cObj.phone}</td>
                                                <td>{cObj.password}</td>
                                                <td>{cObj.fields}</td>
                                                <td>{cObj.duration}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Students;