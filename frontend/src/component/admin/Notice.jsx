import React, { useState,useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../common/Footer";
import "../css/notice.css";
import { useNavigate} from "react-router-dom"


function Notice() {
   const  navigate=useNavigate()
       
          //fetching the email value from localstorage
          const email=localStorage.getItem("storageKey")
          console.log("Admin Email:",email);
          
     const APIURL="http://localhost:3000/admin/addNotice"


  const [notice, setNotice] = useState("");

  const handleChange = (e) => {
    setNotice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noticeData = {
      noticeContent: notice
    };

    try {
      const response = await axios.post(APIURL,noticeData );

      alert(response.data.message);
      setNotice("");

    } catch (error) {
      console.log(error);
      alert("Notice not added");
    }
  };
  useEffect(() => {
           if(!email)
      navigate("/adminLogin",{
    state:
  {
    message:"UnAuthorised Access"
  }}
    
  )
         
      }, []);

  return (
    <>
      <AdminHeader />

      <div className="notice-container">
        <h2>Add Notice from here</h2>

        <form className="notice-form"onSubmit={handleSubmit}>

          <label>Content</label>

          <textarea
            name="noticeContent"
            value={notice}
            onChange={handleChange}
            placeholder="Enter notice"
            rows="7"
            required
          ></textarea>

          <br />

          <button type="submit">Submit</button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default Notice;