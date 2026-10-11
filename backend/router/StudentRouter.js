import express from 'express'
import { addStudent ,studentLogin,viewAllStudents,viewAllCourse} from '../controller/StudentController.js' 

const StudentRouter = express.Router()

// StudentRouter.post("/studentFeedback", studentFeedback)
StudentRouter.post("/addStudent", addStudent)
StudentRouter.post("/studentLogin", studentLogin)
StudentRouter.get("/viewAllStudents",viewAllStudents)
StudentRouter.get("/viewAllCourse",viewAllCourse)



export default StudentRouter