const mongoose = require('mongoose');

const connectionURL = 'mongodb+srv://peheliya:Peheliya7198@cluster0.t0ujn52.mongodb.net/Engine-Clinic?retryWrites=true&w=majority&appName=Cluster0';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(connectionURL);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectMongoDB;