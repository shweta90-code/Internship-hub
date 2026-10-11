import React, { useState } from "react";
import axios from "axios";
import "../css/providerRegistration.css";
import Header from "../common/Header";
import Footer from "../common/Footer";


function ProviderRegistration() {

    const APIURL = "http://localhost:3000/i_provider/addProvider";

  const [data, setData] = useState({
    companyName: "",
    email: "",
    phone: "",
    password: "",
    address: ""
  });

  const handleChange = (e) => {
    console.log("name",e.target.name);
    
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const serverResponse =await axios.post(APIURL, data);
      alert("Provider Registration Successful");
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <>
      <Header />

      <div className="provider-page">
        <div className="provider-form">

          <h2>Provider Registration</h2>
          <p>Register your organization</p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Organization Address"
              onChange={handleChange}
              required
            />

            <button type="submit">Register</button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProviderRegistration;