import express from "express";
import connectDB from "./connection/db.ts";
     
          
  
const app = express();
const PORT = 8000;

connectDB()
 app.get('/',(req,res)=>{
    res.send("hello")
 })

connectDB()

app.listen(PORT, () => {
  console.log(`server startedd...`);
});
