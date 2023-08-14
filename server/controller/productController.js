import Product from '../models/productSchema.js';
import ErrorHandler from '../utils/errorhandler.js';
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ApiFeatures from '../utils/apifeatures.js';

export const getAllProducts = catchAsyncErrors(async (req, res) => {
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter();

    let products = await apiFeature.query;

    let filteredProductsCount = products.length;

    apiFeature.pagination(resultPerPage);

    products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    });
    
})

export const getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
        if(!product){
            return next(new ErrorHandler("Product not found", 404))
        }
        res.status(200).json({
            success: true,
            product
        })
})

export const createProduct = catchAsyncErrors(async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        })
        console.log("created");
    } catch (error) {
        res.status(500).json({
            successs:false,
            product:null
        })
    }
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