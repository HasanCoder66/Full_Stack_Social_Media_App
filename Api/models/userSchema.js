import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },

    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },

    password: {
        type: String,
        required: true,
        min: 6,
    },

    profilePicture: {
        type: String,
        default: ""
    },

    coverPicture: {
        type: String,
        default: ""
    },

    followers: {
        type: Array,
        default: []
    },

    followings: {
        type: Array,
        default: []
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    desc : {
        type : String,
        max : 50
    },

    city : {
        type : String,
        max : 50 
    },

    from : {
        type : String,
        max : 50 
    },

    relationship : {
        type : Number,
        enum : [1,2,3]
    },

},
    { timestamps: true }
)

export default mongoose.model('user', userSchema)


