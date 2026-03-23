const express = require("express");
const app = express();

app.get("/", (req,res)=>{
 res.send("Hello Render Deployment");
});

app.listen(3000,()=>{
 console.log("Server running");
});