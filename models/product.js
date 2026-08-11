import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    altName: {
        type: [String],
        default: []
    },
    price: {
        type: Number,
        required: true
    },
    labeledPrice: {
        type: Number,
    },
    category: {
        type: String,
        default: "Others"
    },        
    images: {
        type: [String],
        default: ["https://res.cloudinary.com/dxjv0gq2f/image/upload/v1690911685/placeholder-image_uxbq3r.png","https://res.cloudinary.com/dxjv0gq2f/image/upload/v1690911685/placeholder-image_uxbq3r.png"]
    },
    isVisible: {
        type: Boolean,
        default: true,
        required: true
    },
    brandName: {
        type: String,
        default: "Generic"
    },
    model: {
        type: String,
        default: "Generic"
    }
})

const Product = mongoose.model("Product", productSchema);

export default Product;