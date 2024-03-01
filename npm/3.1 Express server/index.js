import express from "express";
const app = express();

app.get("/", (req, res) =>{
    console.log("hello world!")
})
app.listen(3000,() =>{
    console.log("Server Runnig On Port 3000");
});
