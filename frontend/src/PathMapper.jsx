import { BrowserRouter,Routes,Route, } from "react-router-dom"
import App from './App'
import ContactUs from "./component/common/Contactus"
import AboutUs from "./component/common/Aboutus"
import StudentRegistration from "./component/student/StudentRegistration"
import ProviderRegistration from "./component/i_provider/ProviderRegistraion"
import StudentLogin from "./component/student/StudentLogin"
import ProviderLogin from "./component/i_provider/ProviderLogin"
import Feedback from "./component/student/Feedback"
import AdminLogin from "./component/admin/AdminLogin"
import AdminHome from "./component/admin/AdminHome"
import StudentHome from "./component/student/StudentHome"
import AdminHeader from "./component/admin/AdminHeader"
import InternshipGallery from "./component/InternshipGallery"
import AllContacts from "./component/admin/AllContacts"
import AllFeedbacks from "./component/admin/AllFeedbacks"
import AllStudents from "./component/admin/AllStudents"
import AddCourse from "./component/admin/AddCourse"
import AllCourse from "./component/student/AllCourse"
import AdminEditProfile from "./component/admin/AdminEditProfile"
import Notice from "./component/admin/Notice"

import AllNoticeCommon from "./component/common/AllNoticeCommon"
import AllNotice from "./component/admin/AllNotice"


function PathMapper(){
    return(
        <>
        <BrowserRouter>
        <Routes>



            <Route path="" element={<App></App>}></Route>
            <Route path="/contactUs" element={<ContactUs/>}></Route>
            <Route path="/aboutUs" element={<AboutUs/>}></Route>
            <Route path="studentRegistration" element={<StudentRegistration/>}></Route>
            <Route path="/providerRegistration" element={<ProviderRegistration/>}></Route>
            <Route path="/adminLogin" element={< AdminLogin/>}></Route>
            <Route path="/studentLogin" element={< StudentLogin/>}></Route>
            <Route path="/providerLogin" element={<ProviderLogin/>}></Route>
            <Route path="/feedback" element={<Feedback/>}></Route>
            <Route path="/adminHome" element={<AdminHome/>}></Route>
            <Route path="/studentHome" element={<StudentHome/>}></Route>
            <Route path="/adminHeader" element={<AdminHeader/>}></Route>
            <Route path="/internshipGallery" element={<InternshipGallery/>}></Route>
            <Route path="/allContacts" element={<AllContacts/>}></Route>
            <Route path="/allFeedbacks" element={<AllFeedbacks/>}></Route>
            <Route path="/allStudents" element={<AllStudents/>}></Route>
            <Route path="/addCourse" element={<AddCourse/>}></Route>
            <Route path="/allCourse" element={<AllCourse/>}></Route>
            <Route path="/adminEditProfile" element={<AdminEditProfile/>}></Route>
            <Route path="/notice" element={<Notice/>}></Route>
            <Route path="/allNotice" element={<AllNotice/>}></Route>
            <Route path="/allNoticeCommon" element={<AllNoticeCommon/>}></Route>
            
            



        </Routes>
        
        
        
        
        
        
        </BrowserRouter>
        
        
        
        </>
    )
}
export default PathMapper