const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017/internshipassinment')
        console.log('Connected to DataBase')
    }
    catch(err){
        console.log(err)
    }

}


module.exports = connectDB;