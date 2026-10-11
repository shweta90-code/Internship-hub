import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/display_style.css";
import AdminHeader from "./AdminHeader";
import { useNavigate} from "react-router-dom"


function AllNotice() {
    const  navigate=useNavigate()
         
            //fetching the email value from localstorage
            const email=localStorage.getItem("storageKey")
            console.log("Admin Email:",email);
      
    const [notice, setNotice] = useState([])
    const APIURL = "http://localhost:3000/viewAllNotice"


    async function fetchNotice() {

        try {
            const serverResponse = await axios.get(APIURL)
            console.log(serverResponse.data);
            //setting value in useState contact variable
            setNotice(serverResponse.data.noticeData)//contactData is the key

            console.log(serverResponse.data.noticeData);
            



        }
        catch (err) {
            console.log(err);

        }
    }
    //function close
    //calling useeffect function
    useEffect(() => {
        if(!email)
    navigate("/adminLogin",{
  state:
{
  message:"UnAuthorised Access"
}}
  
)


        fetchNotice()
    }, [])





    return (
        <>
            <AdminHeader />

            <div className="main-div">
                <div className="container py-4">
                    <h2 className="text-center mb-4 mt-5">Notice from here</h2>

                    <div className="myFlexContainer">
                        {
                            notice.map((cObj) => {
                                return (


                                    <div className="myFlexItem" key={cObj._id}>
                                        <div className="card h-100 shadow-sm">
                                            <div className="card-body">
                                                <h6 className="card-title">
                                                    noticeContent {cObj.noticeContent}
                                                </h6>
                                                <p className="mb-2">
                                                    <strong>noticeDate :</strong> {cObj.noticeDate}
                                                </p>


                                            </div>
                                        </div>
                                    </div>


                                )
                            })
                        }

                    </div>


                </div>
            </div>

            <Footer />
        </>
    );
}

export default AllNotice;