const express=require("express");
const app=express();
let port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
const path=require("path");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static("/public"));

//const path = require("path");
//app.set("view engine","ejs");
// app.use(express.static(path.join(__dirname,"/public")));
app.listen(port,()=>{
    console.log("listening on port 3000");
});
// app.get("/",(req,res)=>{
//     res.render("insta.ejs");
// });
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    //let array=["nithya","swaroop","goggi"];
    console.log(`${username}`);
    const igdata=require("./data.json");
    // console.log(igdata);
    const data=igdata[username];
    //console.log(data);
    res.render("insta.ejs",{data});
        //res.render("igg.ejs",{data});
});