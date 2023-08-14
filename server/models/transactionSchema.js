import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
        buyerId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        sellerId: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        product: {
            type: mongoose.Schema.ObjectId,
            ref: "Product",
            required: true,
        },
        status:{
            type: String,
        },
        amount:{
            type: String,
        },
        createdAt :{
            type: Date,
            default:Date.now
        },
})

export default mongoose.model('transaction', transactionSchema)