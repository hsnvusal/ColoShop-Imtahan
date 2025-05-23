import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image:String,
    title:String,
    price:String
})

export default mongoose.model("Products",productSchema)