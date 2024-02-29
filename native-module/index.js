const fs= require("fs");
/*fs.writeFile("message.txt","hello file is created", (err) =>{
    if(err) throw err;
    console.log("the file hasd been cxarated ");
});*/
fs.readFile("./message.txt","utf8", (err, data) =>{
    if (err) throw err;
    console.log(data);
});
