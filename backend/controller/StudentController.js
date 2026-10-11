import Student from "../models/StudentModel.js";
import CourseModel from "../models/CourseModel.js";

//<--Student Registration-->
export async function addStudent(request, response) {

    try {
        console.log("ADD STUDENT API CALLED");
        console.log(request.body);

        const { name, email, password,phone,fields,duration} = request.body;

        const student = new Student({
            name,
            email,
            password,
            phone,
            fields,
            duration,
            
            
        });

        await student.save();

        console.log("Student saved in MongoDB");

        response.json({
            message: "Student added successfully"
        });

    } catch (error) {

        console.log("STUDENT ERROR:", error);

        response.status(500).json({
            message: "Student data not added"
        });
    }
}
//--<student login function-->
export async function studentLogin(request,response)
{

    console.log("Student login code with be here");
    
    const{email,password}=request.body
    try{
       const StudentDoc=await Student.findOne({email:email,password:password})
       if(StudentDoc!=null)
        response.json({"message":"Login Successfully","token_key":email,"status":"true"})
    else
        response.json({"message":"Invalid Credentials","status":"false"})

    }
catch(err){
    console.log(err);
    

    }
}
//<--function for to view  all students-->

export async function  viewAllStudents(request,response) 
{
    try{
             const  studentArray =await Student.find()//select* from contact

             // contactArray-> array of object
             //sending this student array frontend(react)
             response.json({"studentData":studentArray})

    }
    catch(err){
        console.log(err);
        
    }
}


//<--function for to view  all course-->

export async function viewAllCourse(request, response) {
    try {
        const courseArray = await CourseModel.find();

        response.json({
            courseData: courseArray
        });
    }
    catch (err) {
        console.log(err);
    }
}