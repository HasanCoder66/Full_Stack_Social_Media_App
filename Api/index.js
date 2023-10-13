import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoute.js'
import followRoutes from './routes/followRoute.js'
import postRoutes from './routes/postRoute.js'

const uri = 'mongodb+srv://66CoderHasan:rRfk3uauLRHm2Jv5@cluster0.xrkrjyp.mongodb.net/66CoderHasan?retryWrites=true&w=majority'
dotenv.config()

const connectDb = () => {
    console.log('MongoDB Connected')
    return mongoose.connect(uri, {
        useNewUrlParser : true,
    })
}
const app = express();
app.use(cors())
const port = 8800

// MiddleWares

app.use(express.json());
app.use(morgan('common'));
app.use(helmet());

// get post Api
app.use("/api/auth", authRoutes)
app.use("/api/follow", followRoutes)
app.use("/api/post", postRoutes)
app.use("/api/user", userRoutes)


app.listen(port, () => {
    console.log(`backend server works live ${port}` )
    connectDb()
});



