import Provider from "../models/I_ProviderModel.js";

//<--Provider Registration-->
export async function addProvider(request, response) {

    try {
        console.log("ADD PROVIDER API CALLED");
        console.log(request.body);

        const { companyName, email, password, phone,address} = request.body;

        const student = new Provider({
            companyName,
            email,
            phone,
            password,
            address,

        });

        await student.save();

        console.log("Provider saved in MongoDB");

        response.json({
            message: "Provider added successfully"
        });

    } catch (error) {

        console.log("PROVIDER ERROR:", error);

        response.status(500).json({
            message: "Provider data not added"
        });
    }
}