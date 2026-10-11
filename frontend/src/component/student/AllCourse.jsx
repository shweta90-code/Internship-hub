import React, { useState, useEffect } from "react";
import StudentHeader from "./StudentHeader";
import Footer from "../common/Footer";
import "../css/addCourse.css";
import axios from "axios";

function AllCourse() {
    const [course, setCourse] = useState([]);

    const APIURL = "http://localhost:3000/student/viewAllCourse";

    async function fetchCourse() {
        try {
            const serverResponse = await axios.get(APIURL);

            console.log("API DATA:", serverResponse.data);

            setCourse(serverResponse.data.courseData || []);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCourse();
    }, []);

    return (
        <>
            <StudentHeader />

            <div className="main-div">
                <div className="container py-4">

                    <h2 className="text-center mb-4 mt-5">
                        All Courses
                    </h2>

                    <div className="myFlexContainer">

                        {course.map((cObj) => (
                            <div
                                className="myFlexItem  "
                                key={cObj._id}
                            >
                                <div className="card h-100 shadow-sm" >

                                    <div className="card-body">

                                        <h5 className="card-title">
                                            Course: {cObj.name}
                                        </h5>

                                        <p className="mb-2">
                                            <strong>Duration:</strong>
                                            {cObj.duration}
                                        </p>

                                        <p className="mb-2">
                                            <strong>Fees:</strong>
                                            {cObj.fees}
                                        </p>

                                        <p className="mb-2">
                                            <strong>Description:</strong>
                                            {cObj.description}
                                        </p>

                                        <a
                                            href="https://wa.me/8601967953"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            // className="btn btn-success"
                                        >
                                             
                                             <i className="fa-brands fa-whatsapp"></i>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default AllCourse;