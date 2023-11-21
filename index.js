import express from "express";
import ejs from "ejs";

const app=express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",(req,res)=>{
   res.render("index");
});

app.get("/easy",(req,res)=>{
    res.render("easy");
 });

 app.get("/average",(req,res)=>{
    res.render("average");
 });

app.listen(process.env.PORT||3000,function(){
    console.log("Server started")
})
