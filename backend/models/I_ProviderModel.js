import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
 

    companyName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    
});

const Provider = mongoose.model("Provider", providerSchema);

export default Provider;