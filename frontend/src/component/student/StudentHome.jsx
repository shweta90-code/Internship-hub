import React from "react";
import Footer from "../common/Footer";
import StudentHeader from "./StudentHeader";
import { useNavigate } from "react-router-dom";

function StudentHome() {
    const navigate = useNavigate();

    return (
        <>
            <StudentHeader />

            <div
                className="container text-center"
                style={{
                    minHeight: "400px",
                    paddingTop: "100px"
                }}
            >
                <h1>Welcome, Student 👋</h1>

                <p className="text-muted mb-4">
                    Explore courses and start your learning journey.
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card shadow p-4">
                            <div className="card-body">
                                <i className="fa-solid fa-book-open fs-1 mb-3"></i>

                                <h4>Available Courses</h4>

                                <p>
                                    Explore all available courses.
                                </p>

                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate("/AllCourse")}
                                >
                                    View All Courses
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default StudentHome;