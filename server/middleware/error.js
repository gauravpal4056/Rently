import ErrorHandler from "../utils/errorhandler";

module.export =  (err, req, res, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({
        success: false,
        message:err.message
    })
}