import express from 'express'
import {followUser, unFollowUser} from '../controllers/followController.js'

const followRoutes = express.Router()


// localhost:8800/api/:id/follow
followRoutes.put('/:id/follow' , followUser)


// localhost:8800/api/:id/unfollow
followRoutes.put('/:id/unfollow' , unFollowUser)


export default followRoutes