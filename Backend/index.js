const express = require("express");

const app=express();
require("dotenv").config();
require("./Models/db.js");
const PORT =process.env.PORT || 8080;
const cors =require("cors");
const TaskRouter= require("./Routes/TaskRouter.js");
const bodyParser = require("body-parser");

app.get("/",(req,res)=>{
    res.send("Hello from the server")
})

app.use(cors());
app.use(bodyParser.json());
app.use("/tasks",TaskRouter);




app.listen(PORT,()=>{
    console.log(`Server is running on : ${PORT}`);
});
