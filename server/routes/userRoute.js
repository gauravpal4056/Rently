import express from "express";
import { registerUser, updateProfile, loginUser,  } from "../controller/userController";
const router = express.Router();

router.post('/register', registerUser)
router.get('/login', loginUser)




export default router