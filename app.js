const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const app= express();

var items = []
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.get("/",function(req,res){
    var today = new Date();

    var options = {
        weekday : "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);
    res.render("list",{kindofday: day, newListItems: items})
})

app.post("/", function(req,res){
    var item = req.body.newItem;
    if(item.length==0){
        
        res.redirect("/")
    }
    else{
        items.push(item);
        res.redirect("/")
    }
    
    
})
 app.listen(3000,function(req,res){
     console.log("server started...")
 })