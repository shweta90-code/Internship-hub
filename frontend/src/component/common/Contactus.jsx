import { useState } from "react"
import React from "react";
import "../css/contactus.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from 'axios'

function ContactUs() {


    const APIURL="http://localhost:3000/addContact"
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: ""
    
  })

  function fetchData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  

  }

  async function submitForm(e) {
    e.preventDefault()
    try{
      //sendig contact from data to backent api using axios
      const serverResponse= await axios.post(APIURL,formData)
      console.log(serverResponse);

      alert(serverResponse.data.message)
      

    }
    catch(err){
      console.log(err);
      
    }
    
  }
  return (
    <>
<Header/>

 <div className="flex-container">
    <div className="right">

      {/* <!-- carousel code start --> */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/microsoft.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="./images/image.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="./images/careergrowth.jpg" className="d-block w-100" alt="..."/>
          </div>
           <div className="carousel-item">
            <img src="./images/interview.jpg" className="d-block w-100" alt="..."/>
          </div>
         
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    {/* <!-- carousel code end --> */}

    <div className="right">
              <form onSubmit={submitForm}>


      <div className="form-div">
                              <h2>📲Contact Us</h2>

        <div className="mb-3">
          <label htmlFor="form-lable">Name</label>
          <input type="text" className="form-control" placeholder="Enter Name" name="name" onChange={fetchData} />
        </div>
        <div >
          <label htmlFor="form-lable">Email</label>
          <input type="text" className="form-control" placeholder="Enter email" name="email" onChange={fetchData} />
        </div>
         <div className="mb-3">
          <label htmlFor="form-lable">Phone</label>
          <input type="text" className="form-control" placeholder="Enter phone" name="phone" onChange={fetchData}/>
        </div>
       
        <div className="mb-7">
          <label htmlFor="form-lable">Question</label>
          <input type="text" className="form-control" placeholder="Enter textarea" name="question" onChange={fetchData}/>
        </div>
        <div className="mt-3">
          <button className="btn btn-warning">Submit</button>
        </div>
      </div>
               </form>

    </div>
  </div>
  
  <Footer/>
  
  </>
  );
}

export default ContactUs;
