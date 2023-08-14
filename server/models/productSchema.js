import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
        name:{
            type: String,
            required: [true, 'Please provide a Product Name']
        },
        description:{
            type: String,
            required: [true, 'Please provide a Product Description']
        },
        price:{
            type: Number,
            required: [true, 'Please provide a Product Price']
        },
        category:{
            type:String
        },
        size:String,
        gender:String,
        seller:{
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        rentPrice:{
            typeof: Number
        },
        condition:{
            type: String,
            required: [true, 'Please provide a Product Condition']
        },
        createdAt :{
            type: Date,
            default:Date.now
        },
        location:{
            latitude:{
                type:String
            },
            longitude:{
                type:String
            }
        }
})

export default mongoose.model('item', productSchema)