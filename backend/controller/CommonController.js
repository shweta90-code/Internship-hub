
import Contact from "../models/ContactModel.js";
import Feedback from "../models/FeedbackModel.js";
import Notice from "../models/NoticeModel.js";

// <-- Contact function-->
export async function addContact(request, response) {

    // Receiving contact data from React
    const { name, email, phone, question } = request.body;

    console.log(`name is ${name}`);
    console.log(`email is ${email}`);
    console.log(`phone is ${phone}`);
    console.log(`question is ${question}`);

    console.log("add contact function is executing");

    try {
        // Creating a new document
        const contactDoc = new Contact({
            name,
            email,
            phone,
            question
        });

        // Saving data into Contact collection
        await contactDoc.save();

        // Sending response to React
        response.json({
            message: "Contact Added Successfully",
            status: "Success"
        });

    } catch (err) {
        console.log(err);

        response.json({
            message: "Contact Not Added",
            status: "Failed"
        });
    }
}
// <-- FeedBack function-->
export async function addFeedback(request, response) {

    // Receiving feedback data from React
    const { name, email, rating, review } = request.body;

    console.log(`name is ${name}`);
    console.log(`email is ${email}`);
    console.log(`rating is ${rating}`);
    console.log(`review is ${review}`);

    try {
        // Creating a new Feedback document
        const feedbackDoc = new Feedback({
            name,
            email,
            rating,
            review
        });

        // Saving data into Feedback collection
        await feedbackDoc.save();

        response.json({
            message: "Feedback Added Successfully",
            status: "Success"
        });

    } catch (err) {
        console.log(err);

        response.json({
            message: "Feedback Not Added",
            status: "Failed"
        });
    }
}



//<--All Notice function-->

export async function  viewAllNotice(request,response) 
{
    try{
             const  noticeArray =await Notice.find()//select* from feedback
             console.log(noticeArray);
             

             // feedbackArray-> array of object
             //sending this feedback array frontend(react)
             response.json({"noticeData":noticeArray})

    }
    catch(err){
        console.log(err);
        
    }
}