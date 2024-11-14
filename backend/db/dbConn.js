require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;  // Or wherever your MongoDB URI is defined
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

module.exports = connectDB;
