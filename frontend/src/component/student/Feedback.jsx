import { useState } from "react";
import React from "react";
import "../css/feedback.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";
import StudentHeader from "./StudentHeader";

function Feedback() {

    const APIURL="http://localhost:3000/addFeedback"

  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "",
    review: ""
  });

  function fetchData(e) {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  }

  async function fetchFeedback(e) {
    e.preventDefault();

    try {
      const serverResponse = await axios.post(APIURL, feedback);

      console.log(serverResponse);
      alert(serverResponse.data.message);
    }
    catch (err) {
      console.log(err);
      alert("Feedback Not Added");
    }
  }

  return (
    <>
      <StudentHeader/>

      <div className="container mt-5">
        <div className="card shadow p-4 feedback-card">

          <form onSubmit={fetchFeedback}>

            <h2>Happy to Hear your Feedback</h2>

            <div className="mb-3">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                onChange={fetchData}
              />
            </div>

            <div className="mb-3">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={fetchData}
              />
            </div>

            <div className="mb-3">
              <label>Rating</label>

              <select
                name="rating"
                onChange={fetchData}
              >
                <option value="">Select Rating</option>
                <option value="1">1 ⭐</option>
                <option value="2">2 ⭐⭐</option>
                <option value="3">3 ⭐⭐⭐</option>
                <option value="4">4 ⭐⭐⭐⭐</option>
                <option value="5">5 ⭐⭐⭐⭐⭐</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Review</label>

              <textarea
                className="form-control"
                rows="4"
                name="review"
                placeholder="Write your Review"
                onChange={fetchData}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-4"
              >
                Submit
              </button>
            </div>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Feedback;