import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../common/Footer";
import "../css/display_style.css";
import { useNavigate} from "react-router-dom"


function AllContacts() {
  const  navigate=useNavigate()
   
      //fetching the email value from localstorage
      const email=localStorage.getItem("storageKey")
      console.log("Admin Email:",email);

  const  [contact,setContact]=useState([{}])
  const APIURL="http://localhost:3000/admin/viewAllContacts"
   
 async function fetchContact()
 {

  try{
    const serverResponse= await axios.get(APIURL)
    console.log(serverResponse.data);
    //setting value in useState contact variable
    setContact(serverResponse.data.contactData)//contactData is the key

    
    


  }
  catch(err){
    console.log(err);
    
  }
}
//function close
//calling useeffect function
useEffect(()=>{
if(!email)
    navigate("/adminLogin",{
  state:
{
  message:"UnAuthorised Access"
}}
  
)
  fetchContact()
},[])

  return (
    <>
      <AdminHeader />

      <div className="main-div">
        <div className="container py-4">
          <h2 className="text-center mb-4 mt-5">All Contacts</h2>

          <div className="myFlexContainer">
            {
              contact.map((cObj )=>{return(
                    
                
              <div className="myFlexItem" key={cObj._id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                     Asked By  {cObj.name}
                    </h5>

                    <p className="mb-2">
                      <strong>Phone :</strong> {cObj.phone}
                    </p>

                    <p className="mb-2">
                      <strong>Email :</strong> {cObj.email}
                    </p>

                    <p className="mb-0">
                      <strong>Question :</strong>
                    </p>

                    <div className="questionBox">
                      question
                    </div>
                  </div>
                </div>
              </div>
              )})
   }
        

              
            
                      </div>


                       {/* {contacts.length === 0 && (
            <div className="text-center mt-4">
              <h5>No Contact Records Found</h5>
            </div>
          )} */}

         
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AllContacts;