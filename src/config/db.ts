import mongoose from "mongoose";
import 'dotenv/config';

export default function connectDB() {
  const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rastq.mongodb.net/todoapp`;
  
//   try {
//     mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
//   } catch (err) {
//     console.log(err.message);
//     process.exit(1);
//   }

//   const dbConnection = mongoose.connection;

//   dbConnection.once("open", () => {
//     console.log(`Database connected: ${url}`);
//   });
 
//   dbConnection.on("error", (err) => {
//     console.error(`Connection error: ${err}`);
//   });
mongoose.connect(url)
  .then(() => {
    console.log('Connected to the remote todoapp database');
  })
  .catch((error) => {
    console.error('Error connecting to the database: ', error);
  });
}