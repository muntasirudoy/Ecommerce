
import mongoose from 'mongoose'



 const connection = async()=>{
    await mongoose.connect("mongodb+srv://ecommerce:8u5qgGf7dec5l7AA@cluster0.jjwmo.mongodb.net/users?retryWrites=true&w=majority").then(()=>{
        console.log("DB Contected")
    });
}


export default connection




