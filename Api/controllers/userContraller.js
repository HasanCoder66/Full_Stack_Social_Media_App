import User from '../models/userSchema.js'
import bcrypt from 'bcrypt'


// update user
// localhost:8800/api/:id
export const userUpdate = async (req , res) => {
    if ( req.body.userId  === req.params.id || req.user.isAdmin){
        if( req.body.password){
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password , salt)

            } catch (error) {
                res.status(500).json(error)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set : req.body,
            })
            res.status(200).json("Account Has been Updated")
        } catch (error) {
           res.status(500).json(error)
        }
    } else {
        return res.status(403).json("You can update only your account")
    }
}

// delete user
// localhost:8800/api/:id
export const userDelete = async (req , res) => {
    if ( req.body.userId  === req.params.id || req.body.isAdmin){
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account Has been Delete Successfully")
        } catch (error) {
           res.status(500).json(error)
        }
    } else {
        return res.status(403).json("Your can delete only your account ")
    }
}


// getUsers
// localhost:8800/api/:id
export const getUsers = async (req , res ) => {
    const userId = req.query.userId;
    const userName = req.query.userName
    try {
        const user = userId 
        ? await User.findById(userId) 
        : await User.findOne({userName: userName})
        const {password , updatedAt , ...others} = user._doc
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
}

