import React, { useState, useEffect } from "react";
import axios from "axios";

import "../css/profile.css";
import Footer from "../common/Footer";
import AdminHeader from "./AdminHeader";

function AdminEditProfile() {
  const email = localStorage.getItem("storageKey");

  const APIURL = "http://localhost:3000/admin/adminProfile";
  const API_EDIT_URL = "http://localhost:3000/admin/adminEditProfile";

  const [profile, setProfile] = useState({
    email: email,
    name: "",
    phone: "",
    password:""
  });

  async function viewProfile() {
    try {
      const params = {
        emailId: email,
      };

      const serverResponse = await axios.get(APIURL, { params });

      setProfile(serverResponse.data.adminDoc);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    
    viewProfile();
  }, []);

  function fetchData(event) {
    const { name, value } = event.target;

    setProfile((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  }

  async function submitForm(event) {
    event.preventDefault();

    try {
      const params = {
        email: profile.email,
      };

      const newData = {
        name: profile.name,
        phone: profile.phone,
        password:profile.password
      };

      const serverResponse = await axios.put(
        API_EDIT_URL,
        newData,
        { params }
      );

      console.log(serverResponse.data);
      if (serverResponse.data.updateStatus.acknowledged==true)

      alert("Profile Updated Successfully");

      viewProfile();
    } catch (err) {
      console.log(err);
      alert("Unable to Update Profile");
    }
  }

  return (
    <>
      <AdminHeader />

      <h1 style={{ margin: "70px", textAlign: "center" }}>
        Edit Your Profile
      </h1>

      <div className="container mb-5">
        <div className="row justify-content-center">
          
          <div className="col-md-4">
            <div className="profile-card text-center p-4 shadow">
              <img
                src="/images/user4.png"
                alt="User"
                className="profile-img"
              />

              <h2>{profile.name}</h2>

              <p className="role">User</p>

              <div className="info-box">
                <div className="info-item">
                  <i className="fa-solid fa-phone"></i>
                  <span> {profile.phone}</span>
                </div>

                <div className="info-item">
                  <i className="fa-solid fa-envelope"></i>
                  <span> {profile.email}</span>
                </div>

                
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <form
              onSubmit={submitForm}
              className="card shadow p-4"
            >
              <h3 className="text-center mb-4">
              Admin  Update Profile
              </h3>

              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={profile.name}
                  onChange={fetchData}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={profile.phone}
                  onChange={fetchData}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  value={profile.email}
                  readOnly
                />
              </div>



  <div className="mb-3">
                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  value={profile.password}
                  name="password"
                  onChange={fetchData}
                   placeholder="Leave blank to keep current password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Update Profile
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default AdminEditProfile;