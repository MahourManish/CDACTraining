const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

const root = __dirname;


//app. get("*", function (req, res) { res.render("Error_page"); })
app.get("/",(req,res) => res.send("Hi from Express"));

app.get("/Employee",(req,res) => res.send("<h1>Employee Page</h1>"));
app.get("/Customer",(req,res) => res.send("<h1>Customer Page</h1>"));
app.get("/Payroll",(req,res) => res.send("<h1>Payroll Page</h1>"));
app.get("/Product",(req,res) => res.send("<h1>Product Page</h1>"));
app.get("/Register",(req,res) => res.sendFile(root + "/RegPage.html"));
app.post("/Register",(req,res) => {
    res.send(`Details<br/>
            Name: ${req.body.name} <br/>
            Email: ${req.body.email} <br/>
            Location: ${req.body.location} <br/>
        `);
});


app.listen(3000,() =>{
    console.log("Server is running at " + port)
})