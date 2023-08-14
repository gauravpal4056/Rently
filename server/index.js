import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from  "dotenv";
import mongoose from "mongoose"
import product from "./routes/productsRoute.js"
import user from './routes/userRoute.js'
import errMiddleware from './middleware/error.js'

const app = express();
app.use(express.json())
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(
    cors({
        origin: "http://localhost:5173",
        method:"GET,POST,PUT,DELETE ",
        credentials: true,
    })
)

//routes
app.use('/api/v1', product)
app.use('/api/v1', user)
//  Middleware for erors
app.use(errMiddleware)


// app.use('/auth', auth)
// app.use('/profile', profile)
// app.use('/create', createRoom)
// app.use('/user', user)
// app.use('/whispers', whispers)

//data base and local host
const PORT = process.env.PORT || 3000

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    app.listen(PORT, () => {
        console.log("server started on port " + PORT);
    })
}).catch(err => console.log(err));
