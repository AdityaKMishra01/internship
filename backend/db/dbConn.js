require("dotenv").config();

const mongoose = require('mongoose');
url = "mongodb+srv://adityamishra1872:adi1111@cluster0.5subt.mongodb.net/internshipassignment?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to Database');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
