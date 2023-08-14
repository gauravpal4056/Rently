import ErrorHandler from '../utils/errorhandler.js';
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ApiFeatures from '../utils/apifeatures.js';

import User from '../models/userSchema.js'

export const registerUser = catchAsyncErrors(async (req, res, next) => {
    const {name, email, password} = req.body
    let user = User.findOne({email})
    if(user){
        return next(new ErrorHandler("Account already exists ", 400));
    }
    user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
    });
    
    sendToken(user, 201, res);
});


export const updateProfile = catchAsyncErrors(async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    };

    if (req.body.avatar !== "") {
        const user = await User.findById(req.user.id);

        const imageId = user.avatar.public_id;

        await cloudinary.v2.uploader.destroy(imageId);

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
        });

        newUserData.avatar = {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        };
    }

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
    });
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    // checking if user has given password and email both

    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    // sendToken(user, 200, res);
    res.status(200).json({
        success: true,
        user,
    });
});

// export const logout = catchAsyncErrors(async (req, res, next) => {
//     res.cookie("token", null, {
//         expires: new Date(Date.now()),
//         httpOnly: true,
//     });

//     res.status(200).json({
//       success: true,
//       message: "Logged Out",
//     });
//   });