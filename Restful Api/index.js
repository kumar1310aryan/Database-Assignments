const express =require("express");
const app=express();
const port =8000;
const path=require("path");

const {v4: uuidv4} = require('uuid');


let posts=[
    {
        id:uuidv4(),
        username:"Apna College",
        content:"I love coding!!"
    },
    {
        id:uuidv4(),
        username:"Aryan Kumar",
        content:"I got selected in Microsoft!!"
    },
]

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});



app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express</h1>");
});

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let id=uuidv4();
    let {username,content}=req.body;
    posts.push({username,content,id});
    res.redirect("posts");
})

app.get("/posts/:id",(req,res)=>{
    let {id} =req.params;
    let post=posts.find((p) => id===p.id);
    console.log(post);
    res.render("show.ejs",{post});
})