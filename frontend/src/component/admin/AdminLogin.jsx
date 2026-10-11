
import { useState ,useEffect} from "react"
import axios from "axios";
import "../css/login.css";
import Header from "../common/Header"
import Footer from "../common/Footer"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function AdminLogin(){
    const location=useLocation()
    console.log(location);
    

useEffect(()=>{
    if(location.state?.message)
        alert(location.state.message)

},[])
      const APIURL = "http://localhost:3000/admin/adminLogin";
      const navigate=useNavigate()

     let [formData, setFormData] = useState({
        
        email: "",
        password: ""

    })
    function fetchData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    async function submitForm(e) {
        e.preventDefault()//it will prevent the default of submit button
        // console.log(formData);
        try{
            const serverResponse= await axios.post(APIURL,formData)
            console.log(serverResponse);
            if(serverResponse.data.status=="true")
            {
                alert(serverResponse.data.message)
                //storing email into localstorage to identify admin  for evry request  
                const adminEmail=serverResponse.data.token_key
                localStorage.setItem("storageKey",adminEmail)
                navigate("/adminHome")//endpoint->of admin home jsx
            }
            else
            alert(serverResponse.data.message)

        }
        catch(err){
            console.log(err);
            
        }

        // alert(
        //     "\nEmail:" + formData.email +
        //     "\nPassword:" + formData.password
            
        // );
    }

   
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="card shadow p-4 feedback-card">
                    <div className="form-login">
                        <h1>Admin login </h1>

                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label >Email </label>
                                <input type="email"
                                    placeholder="Enter email "
                                    name="email"
                                    onChange={fetchData}
                                />
                            </div>
                            <div className="mb-3">
                                <label >Password</label>
                                <input type="password"
                                    placeholder="Enter password "
                                    name="password"
                                    onChange={fetchData}
                                />
                            </div>
                            <br />
                            <br />
                            <div className="mt-3">
                                              <button className="btn-btn-primary px-4">Submit</button>

                            </div>
                            
                        </form>

                    </div>
                </div>

            </div>
            <Footer />


        </>
    )
}
 
export default AdminLogin










