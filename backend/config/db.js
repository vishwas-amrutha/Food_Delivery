import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const dbName = 'food-del'; 
    const uri = "mongodb+srv://prudhvi:prudhvi@cluster0.jsp9u.mongodb.net/food-delivery?retryWrites=true&w=majority";

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to database: ${dbName}`);
  } catch (err) {
    console.error('Database connection error:', err);
  }
};
