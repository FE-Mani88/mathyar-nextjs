import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log('Already connected to MongoDB');

            return false;
        }

        console.log('Connected to MongoDB')
        await mongoose.connect('mongodb://localhost:27017/mathyar')
    } catch (error) {
        console.log('Failed to connect to MongoDB =>', error)
    }
}

export default connectDB