import express from "express";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import productRouter from "./router/productRouter.js";
import authorizeUser from "./lib/jwtMiddleware.js";

const mongoURI="mongodb+srv://ravindushehan200122_db_user:1234@cluster0.rnutf4q.mongodb.net/?appName=Cluster0";


mongoose.connect(mongoURI).then(
    ()=>{
        console.log("Connected to MongoDB");
    }
).catch(
    ()=>{
        console.log("Error connecting to MongoDB");
    }
)

const app = express();

app.use(express.json());

app.use(authorizeUser);

app.use("/users", userRouter);
app.use("/products", productRouter);




  

app.listen(4000,
     () => {
    console.log("Server is running on port 4000");
     })