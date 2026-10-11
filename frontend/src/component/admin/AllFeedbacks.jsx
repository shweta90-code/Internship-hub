import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../common/Footer";
import "../css/display_style.css";
import { useNavigate} from "react-router-dom"


function AllFeedbacks() {
  const  navigate=useNavigate()
     
        //fetching the email value from localstorage
        const email=localStorage.getItem("storageKey")
        console.log("Admin Email:",email);
  
   const  [feedback,setFeedback]=useState([])
  const APIURL="http://localhost:3000/admin/viewAllFeedbacks"
   
 async function fetchFeedback()
 {

  try{
    const serverResponse= await axios.get(APIURL)
    console.log(serverResponse.data);
    //setting value in useState contact variable
    setFeedback(serverResponse.data.feedbackData)//contactData is the key

    
    


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

  fetchFeedback()
},[])

 
  


  return (
    <>
      <AdminHeader />

      <div className="main-div">
        <div className="container py-4">
          <h2 className="text-center mb-4 mt-5">What our students Say</h2>

          <div className="myFlexContainer">
            {
                            feedback.map((cObj )=>{return(

           
              <div className="myFlexItem" key={cObj._id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h6 className="card-title">
                  Rating {cObj.rating}
                    </h6>

                   
                   

                    <p className="mb-0">
                      <strong>Review :</strong>{cObj.review}
                    </p>

                    <div className="questionBox">
                      Student Review 
                    </div>

                     <p className="mb-2">
                      <strong>postedBy :</strong> {cObj.name}
                    </p>
                    <p className="mb-0">
                      <strong>Email :</strong> {cObj.email}
                    </p>


                  </div>
                </div>
              </div>


)})
            }
            
                      </div>

         
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AllFeedbacks;