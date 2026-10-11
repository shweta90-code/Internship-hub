import React from "react";
import '../css/profile.css'
import AdminHeader from "./AdminHeader";
import { useState,useEffect } from "react";
import axios from "axios"
import { useNavigate} from "react-router-dom"
function AdminHome()
{
const  navigate=useNavigate()
 
    //fetching the email value from localstorage
    const email=localStorage.getItem("storageKey")
    console.log("Admin Email:",email);
    
    const params={"emailId":email}//we will send it to backent controller

    const [profile,setProfile]=useState({email:email,name:"",phone:"",})
    const APIURL="http://localhost:3000/admin/adminProfile"

async function viewProfile() {
    try{
console.log(email,"kutjyrbdvsac");

const serverResponse=await axios.get(APIURL,{params})
console.log("Admin data:",serverResponse.data.adminDoc);

// console.log(serverResponse.data.adminDoc);
setProfile(serverResponse.data.adminDoc)//setting  value in profile useState



    }
        catch(err){
            console.log(err);
            
        }
    

    
}//view profile close
//useEffect function calling when the component is  render
useEffect(()=>{
  if(!email)
    navigate("/adminLogin",{
  state:
{
  message:"UnAuthorised Access"
}}
  
)
  
    viewProfile()

},[])//depency array

  
  return (
    <>
    <AdminHeader/>
    <div className="profile-home">
      <div className="profile-card">
        <img 
          src='/public/images/shweta.jpg'
          alt="Admin"
          className="profile-img"
        />

        <h2>{profile.name}</h2>
        <p className="role">Administrator</p>

        <div className="info-box">
          <div className="info-item">
            <i className="fa-solid fa-phone"></i>
            <span>{profile.phone}</span>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <span>{profile.email}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminHome;