const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'SampleDB'
});

db.connect(e => {
    if(e){
        console.error("Not Connected");
        return;
    }
    console.error("Connected to Database");
})

app.get("/employees",(req, res) => {
    const query = "Select * from Employee";
    db.query(query, (e,r) => {
        if(e) return res.status(500).json({error: e.message});
        res.json(r);
    })
})

app.listen(port,()=>{
    console.log("Server is running at " + port);
})