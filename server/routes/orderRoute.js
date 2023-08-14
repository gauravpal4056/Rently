import express from "express";
const router = express.Router();

router.post('/register', registerUser)
router.get('/login', loginUser)




export default router