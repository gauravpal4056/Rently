import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name:{
            type: String,
            required: [true, 'Please provide a Product Name']
        },
        password:{
            type: String,
            required: [true, 'Please provide a Product Description']
        },
        createdAt :{
            type: Date,
            default:Date.now
        },
})

export default mongoose.model('user', userSchema)