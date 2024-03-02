import express from "express";
const app= express();

app.get("/", (req,res) =>{
    console.log("hello world this is live");
});

app.listen(8000,() =>{
    console.log("hello how are you doing");
});