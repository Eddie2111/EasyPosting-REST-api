
//Connection file to mongo db
const mongoose =require ("mongoose");
const colors = require ("colors");
mongoose.set('strictQuery',true),
 connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {  
       
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;