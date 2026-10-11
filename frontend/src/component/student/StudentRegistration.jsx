import { useState } from "react";
import axios from "axios";
import "../css/StudentRegistration.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useNavigate } from "react-router-dom";

function StudentRegistration() {

    const APIURL = "http://localhost:3000/student/addStudent";

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        fields: "",
        duration: "",
        
    });

    function fetchData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    async function submitForm(e) {
        e.preventDefault();

        try {

            const serverResponse = await axios.post(APIURL, formData  );

            console.log(serverResponse);

            if (serverResponse.data.message) {

                alert(serverResponse.data.message);

                navigate("/registrationHome");
            }

        } catch (err) {

            console.log("ERROR:", err);

            if (err.response) {
                alert(err.response.data.message);
            } else {
                alert("Student data not added");
            }
        }
    }

    return (
        <div className="student-page">

            <Header />

            <main className="student-main">

                <div className="student-container">

                    <div className="student-card">

                        <h1>Student Registration</h1>

                        <form onSubmit={submitForm}>

                            {/* Name */}
                            <div className="form-group">

                                <label>Name</label>

                                <input
                                    type="text"
                                    placeholder="Enter name"
                                    name="name"
                                    value={formData.name}
                                    onChange={fetchData}
                                    required
                                />

                            </div>


                            {/* Email */}
                            <div className="form-group">

                                <label>Email</label>

                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formData.email}
                                    onChange={fetchData}
                                    required
                                />

                            </div>


                            {/* Phone */}
                            <div className="form-group">

                                <label>Phone</label>

                                <input
                                    type="tel"
                                    placeholder="Enter phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={fetchData}
                                    required
                                />

                            </div>


                            {/* Password */}
                            <div className="form-group">

                                <label>Password</label>

                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    value={formData.password}
                                    onChange={fetchData}
                                    required
                                />

                            </div>


                            {/* Fields */}
                            <div className="form-group">

                                <label>Fields</label>

                                <select
                                    name="fields"
                                    value={formData.fields}
                                    onChange={fetchData}
                                    required
                                >

                                    <option value="">
                                        Select Fields
                                    </option>

                                    <option value="AI">
                                        AI
                                    </option>

                                    <option value="Web Development">
                                        Web Development
                                    </option>

                                    <option value="Data Analysis">
                                        Data Analysis
                                    </option>

                                    <option value="Cyber Security">
                                        Cyber Security
                                    </option>

                                    <option value="Data Scientist">
                                        Data Scientist
                                    </option>

                                </select>

                            </div>


                            {/* Duration */}
                            <div className="form-group">

                                <label>Duration</label>

                                <select
                                    name="duration"
                                    value={formData.duration}
                                    onChange={fetchData}
                                    required
                                >

                                    <option value="">
                                        Select Duration
                                    </option>

                                    <option value="3 Months">
                                        3 Months
                                    </option>

                                    <option value="4 Months">
                                        4 Months
                                    </option>

                                    <option value="6 Months">
                                        6 Months
                                    </option>

                                </select>

                            </div>


                            {/* Submit */}
                            <div className="submit-box">

                                <button type="submit">
                                    Register
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
}

export default StudentRegistration;