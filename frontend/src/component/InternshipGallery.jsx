import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import "./css/InternshipGallery.css";

function InternshipGallery() {

    const internships = [
        {
            title: "Web Development Internship",
            duration: "3 Months",
            description: "Learn HTML, CSS, JavaScript and modern web development."
        },
        {
            title: "MERN Stack Internship",
            duration: "6 Months",
            description: "Learn MongoDB, Express, React and Node.js with practical projects."
        },
        {
            title: "Python Development Internship",
            duration: "3 Months",
            description: "Learn Python programming and build real-world applications."
        },
        {
            title: "Data Science Internship",
            duration: "6 Months",
            description: "Learn data analysis, Python and basic machine learning."
        },
        {
            title: "AI & Machine Learning Internship",
            duration: "6 Months",
            description: "Explore Artificial Intelligence and Machine Learning concepts."
        },
        {
            title: "Cyber Security Internship",
            duration: "3 Months",
            description: "Learn the basics of cyber security and online safety."
        }
    ];

    return (
        <div className="internship-page">

            <Header />

            <main className="internship-main">

                <h1>Internship Programs</h1>

                <p className="gallery-subtitle">
                    Explore internship opportunities and choose the right
                    program for your career.
                </p>

                <div className="internship-container">

                    {internships.map((internship, index) => (

                        <div className="internship-card" key={index}>

                            <div className="internship-icon">
                                💼
                            </div>

                            <h2>{internship.title}</h2>

                            <p className="duration">
                                Duration: {internship.duration}
                            </p>

                            <p>
                                {internship.description}
                            </p>

                            <button>
                                View Details
                            </button>

                        </div>

                    ))}

                </div>

            </main>

            <Footer />

        </div>
    );
}

export default InternshipGallery;