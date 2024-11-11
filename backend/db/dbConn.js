<<<<<<< HEAD
require("dotenv").config()

const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL)
        console.log('Connected to DataBase')
    }
    catch(err){
        console.log(err)
=======
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Database');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit process with failure
>>>>>>> 045065fceb086462963a71fe26a94bd98ab1f02f
    }
};

module.exports = connectDB;
