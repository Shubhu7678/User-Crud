import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => { 

    try {
         
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected successfully");

    } catch (error) { 
      
        console.log("Database connection failed");
        process.exit(1);

    }

}

export default connectDB