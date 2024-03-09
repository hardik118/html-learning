import express from "express";
const app= express();

app.get("/", (req,res) =>{
    //console.log(req.rawHeaders);
    res.send("<h3> hello world </h3>");
});
app.post("/register", (req,res) =>{
    //console.log(req.rawHeaders);
    res.sendStatus(201);
});
app.put("/user/hardik", (req,res) =>{
    //console.log(req.rawHeaders);
    res.sendStatus(200);
});
app.patch("/user/hardik", (req,res) =>{
    //console.log(req.rawHeaders);
    res.sendStatus(200);
});
app.delete("/user/hardik", (req,res) =>{
    //console.log(req.rawHeaders);
    res.sendStatus(200);
});


app.listen(8000,() =>{
    console.log("hello how are you doing");
});