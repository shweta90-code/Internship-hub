import mongoose from "mongoose";

const DataBaseName="InternshipDB1"
const DBURL=`mongodb://localhost:27017/${DataBaseName}`

export async function dbConnect()
{
try{

    await mongoose.connect(DBURL)

    console.log("Database Connection Esatblised successfully");
   
}
catch(err)
{
    console.log(err);
    
}


}