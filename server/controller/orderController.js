import Product from '../models/productSchema.js';
import Transaction from '../models/transactionSchema.js'
import ErrorHandler from '../utils/errorhandler.js';
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ApiFeatures from '../utils/apifeatures.js';

export const getAllOrders = catchAsyncErrors(async (req, res, next) => {

    const transactions = Transaction.find({buyerId: req.params.buyer}) 
    if(!transactions)
        return next(new ErrorHandler("Product not found", 404))

    const orders = []
    transactions.map((transac) => {
        let order = Product.find({_id: transac.product });
        orders.push({transaction: transac, order})
    })

    res.status(200).json({
        success: true,
        orders
    });
    
})

export const orderDetails = catchAsyncErrors(async (req, res, next) => {
    const transaction = Transaction.find({buyerId: req.params.transactionId}) 
    if(!transaction)
        return next(new ErrorHandler("Product not found", 404))
    const product = Product.find({_id: transaction.product})

    res.status(200).json({
        success: true,
        res: {transaction, product}
    });
})

export const allProductsSeller = catchAsyncErrors(async (req, res, next) => {
    const products = Product.find({seller: req.params.seller}) 
    if(!products)
        return next(new ErrorHandler("no products found", 404))

    res.status(200).json({
        success: true,
        products
    });
    
})

export const updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        product
    })
})

export const deleteProduct = catchAsyncErrors(async (req, res) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }
    product = await Product.remove()
    res.status(200).json({
        success: true,
        message:"Product removed successfully"
    })
})