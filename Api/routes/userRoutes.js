import express from 'express'
import {userUpdate, userDelete , getUsers}  from '../controllers/userContraller.js'

 const userRoutes = express.Router()

// localhost:8800/api/:id
 userRoutes.put('/:id', userUpdate)

 // localhost:8800/api/:id
 userRoutes.delete('/:id', userDelete)

 // localhost:8800/api/:id
 userRoutes.get('/:id', getUsers)

 export default userRoutes 


 