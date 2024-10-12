const express = require("express")
const jwt = require("jsonwebtoken")
const {UserModel,TodoModel} = require("./db");
const mongoose = require("mongoose");
const app = express();
jwtsecret = "lkjgih30497847"
/*mongoose.connect("mongodb+srv://aj265231:dMRMCeg4MSe1s6Yj@cluster0.cn9gp.mongodb.net/TODO7757")*/
mongoose.connect("mongodb+srv://aj265231:dMRMCeg4MSe1s6Yj@cluster0.cn9gp.mongodb.net/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

app.use(express.json());

app.post("/signup", async function(req,res){

    const username = req.body.username
    const password = req.body.password
    const name = req.body.name

  await  UserModel.create({
        username:username,
        password:password,
        name:name
    })
    console.log("Received signup request:"); // Add this line
    console.log("User created:"); // Add this line

    res.json({
        message: "logged in"
    })
});


app.post("/signin", async function(req,res){

    const username = req.body.username
    const password = req.body.password

    const user = await  UserModel.findOne({
        username: username,
        password:password
    })

    if (user) {
        const token = jwt.sign({
            id:user._id.toString
        },jwtsecret);
        res.json({
            token:token
        });
    }else{
        res.status(403).json({
            message:"incoreect credentials"
        })
    }
});


app.post("/todo", function(req,res){

});


app.get("/todos", function(req,res){

});

app.listen(3000);