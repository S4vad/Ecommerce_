import mongoose from "mongoose";

const addProductSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },

    Price: {
        type: Number, // Assuming price should be a number
        required: true
    },
    stock:{
        type:Number,
        require:true,

    },
    Images: [

    ],
    Categories:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required:true,
      },
    Brand:{
        type:String,
        require:true
    },
    Size:{
        type:String,
        require:true
    },
    




},{timestamps:true});//database time show cheyyan

const Product = mongoose.model('Product', addProductSchema);

export default Product;
