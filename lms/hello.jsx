const User= require("../models/users");
const {v4: uuidv4}= require("uuid");
const {setUser}= require("../service/auth");
async function handleusersingup(req, res){
    const {name, email, password}= req.body;
    await User.create({
        name, 
        email, 
        password
    });
    return res.render("home");
}
async function handleuserlogin(req, res){
    const {email, password}= req.body;
   // console.log(req.user);
    const user= await User.findOne({email, password});
    if(!user) return res.render("login",{ 
        error: "invalid username or password",
    });
   
    const token = setUser(user);
    
    return res.json({token});
}
module.exports = {
    handleusersingup,
    handleuserlogin,
}