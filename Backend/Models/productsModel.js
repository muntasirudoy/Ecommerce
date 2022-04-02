import mongoose from 'mongoose';

const Schema = mongoose.Schema


const productsSchema = new Schema({
  
    pname:{
        type : String,
        require: true,
    },
    pdetails:{
        type : String,
        require: true,
    },
    price:{
        type : Number,
        require: true,
    },
    review:{
        type : Number,
        require: false,
    },
    rating:{
        type : Number,
        require: false,
    },
    slug:{
        type : String,
        require: false,
    },

    img:{
        type : String,
        require: false,
    },
    stock:{
        type : Number,
        require: true,
    },
    sold:{
        type : Number,
        require: false,
    },
    description:{
        type : String,
        require: true,
    },
    discout:{
        type : Number,
        require: true,
    },

    cupon:{
        type : String,
        require: true,
    },

    shipping:{
        type : Number,
        require: false,
    },

    category:{
        type : Number,
        require: true,
    },


})


const productsModel = mongoose.model('Products', productsSchema )


export default productsModel