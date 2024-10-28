import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import ProductRoute from "./routes/ProductRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
app.use(cors());


dotenv.config();
const PORT = process.env.PORT || 4000;

const URI=process.env.MongoDBURI;


app.use(express.json());
// connect to mongodb
try{
   mongoose.connect(URI);
   console.log("connected to mongodb");
}catch{
  console.log("Error: ",error);
}

// app.get('/', (req, res) => {
//   res.send('Hello Bivek!')
// })

app.use("/product",ProductRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})