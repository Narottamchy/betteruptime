import express from "express";
import v1Router from "./routes/v1"

const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/api/v1",v1Router);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});