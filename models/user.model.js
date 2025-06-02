import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'User Name is Required'],
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        required:[true, 'Email is Required'],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,
        
    }
}, {timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;