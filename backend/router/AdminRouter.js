//define only admin path 
import express from 'express'
import { adminLogin ,adminProfile,viewAllContacts,viewAllFeedbacks,addCourse,adminEditProfile,addNotice} from '../controller/AdminController.js'

const adminRouter=express.Router()
adminRouter.post("/adminLogin",adminLogin)
adminRouter.get("/adminProfile",adminProfile)
adminRouter.get("/viewAllContacts",viewAllContacts)
adminRouter.get("/viewAllFeedbacks",viewAllFeedbacks)
adminRouter.post("/addCourse", addCourse);
adminRouter.post("/addNotice", addNotice);
adminRouter.put("/adminEditProfile",adminEditProfile)
export default adminRouter
