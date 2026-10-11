import Admin from "../models/AdminModel.js";
import Contact from "../models/ContactModel.js"
import Notice from "../models/NoticeModel.js";
import Feedback from "../models/FeedbackModel.js"
import CourseModel from "../models/CourseModel.js";
 


//<---admin Login code function--->
export async function adminLogin(request,response)
{

    console.log("Admin login code with be here");
    //
    const{email,password}=request.body
    try{
       const AdminDoc=await Admin.findOne({email:email,password:password})
       if(AdminDoc!=null)
        response.json({"message":"Login Successfully","token_key":email,"status":"true"})
    else
        response.json({"message":"Invalid Credentials","status":"false"})

    }
catch(err){
    console.log(err);
    

    }
}//<---admin Login--->



//<---admin profile code function--->
export async function adminProfile(request,response) {
    const adminEmail=request.query.emailId//emailId is the key name from react
    console.log("admin email is "+adminEmail);
    try{

 const AdminDoc=await Admin.findOne({email:adminEmail})// it will return the match object(doc)
 response.json({"adminDoc":AdminDoc,"status":"true"})
    }
    catch(err){
        console.log(err);
        
    }
    
    
}//<---admin profile--->


//<--function for to view  all contacts-->

export async function  viewAllContacts(request,response) 
{
    try{
             const  contactArray =await Contact.find()//select* from contact

             // contactArray-> array of object
             //sending this contact array frontend(react)
             response.json({"contactData":contactArray})

    }
    catch(err){
        console.log(err);
        
    }
}
//<--function for to view  all Feedbacks-->

export async function  viewAllFeedbacks(request,response) 
{
    try{
             const  feedbackArray =await Feedback.find()//select* from feedback

             // feedbackArray-> array of object
             //sending this feedback array frontend(react)
             response.json({"feedbackData":feedbackArray})

    }
    catch(err){
        console.log(err);
        
    }
}


//<--Add Course Function-->

export async function addCourse(request, response) {
    try {
        
        
        const { name, duration, fees, description } = request.body;

        const course = new CourseModel({
            name,
            duration,
            fees,
            description
        });

        await course.save();

        response.status(201).json({
            message: "Course added successfully",
            course
        });

    } catch (error) {
        console.log(error);

        response.status(500).json({
            message: "Course not added",
            error: error.message
        });
    }
}
//----------Admin Edit Profile-------------------//

export async  function adminEditProfile(request,response)
{

  const newData=request.body //name ,phone,password
  const email=request.query.email 
  try{
  //update admin set name=nm,phone=ph,password=pass,where
  //email='sv@gmail.com'(filter condition)
    const {name,phone,password}=newData
    const filterCondition = { email: email }


      const modifiedData = {
      $set: {
        name: name,
        phone: phone
      }
    };

    if (password.trim() !== "") {
      modifiedData.$set.password = password;
    }

 

     const status=   await Admin.updateOne(filterCondition,modifiedData)

    console.log(`status is ${status}`);
     
   response.json({"updateStatus":status})
  }
  catch(error){

    console.log(error)
    
    
  }




}
//<---Notice function--->
export async function addNotice(request, response) {
    try {
        const noticeData = request.body;

        const noticeDoc = new Notice(noticeData);

        await noticeDoc.save();

        response.json({
            message: "Notice Added Successfully",
            status: "Success"
        });

    } catch (err) {
        console.log(err);

        response.json({
            message: "Notice Not Added",
            status: "Failed"
        });
    }
}