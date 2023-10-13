import express from 'express'
import { register , login} from '../controllers/authController.js'

// import send from 'send'

 const authRoutes = express.Router()

//  localhost:8800/api/register
 authRoutes.post('/register', register)
 
 //  localhost:8800/api/login
 authRoutes.post('/login', login)

 export default authRoutes 


 