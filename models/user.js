import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true,
        enum: ["customer", "admin"],
        default: "customer"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/dxj0gqv1f/image/upload/v1690919823/default-user-image_ozkq4r.png",
        required: false 
    }
});

const User = mongoose.model("User", userSchema);

export default User;