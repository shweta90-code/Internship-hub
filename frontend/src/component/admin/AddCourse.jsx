import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/addCourse.css";
import axios from "axios";


function AddCourse() {
        const APIURL = "http://localhost:3000/admin/addCourse";

  const [course, setCourse] = useState({
    name: "",
    duration: "",
    fees: "",
    description: "",
    sign: "",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
const response=await axios.post(APIURL,course)
      alert(response.data.message);

      setCourse({
        name: "",
        duration: "",
        fees: "",
        description: "",
        
      });
    } catch (error) {
      console.log("Error:", error);
      alert("Course Not Added");
    }
  };

  return (
    <>
      <Header />

      <div className="add-course-container">
        <div className="add-course-box">
          <h2>Add Course</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Course Name</label>
              <input
                type="text"
                name="name"
                value={course.name}
                onChange={handleChange}
                placeholder="Enter course name"
                required
              />
            </div>

            <div className="form-group">
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                value={course.duration}
                onChange={handleChange}
                placeholder="Example: 6 Months"
                required
              />
            </div>

            <div className="form-group">
              <label>Fees</label>
              <input
                type="number"
                name="fees"
                value={course.fees}
                onChange={handleChange}
                placeholder="Enter course fees"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={course.description}
                onChange={handleChange}
                placeholder="Enter course description"
                rows="5"
                required
              ></textarea>
            </div>

            {/* <div className="form-group">
              <label>Sign</label>
              <input
                type="text"
                name="sign"
                value={course.sign}
                onChange={handleChange}
                placeholder="Enter signature"
                required
              />
            </div> */}

            <button type="submit" className="add-course-btn">
              Sign
            </button>

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddCourse;