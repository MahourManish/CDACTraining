const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@123',
    database: 'SampleDB'
});
app.use(cors());
app.use(express.json())

db.connect(e => {
    if(e){
        console.error(e.message);
        return;
    }
    console.log("Connected to Database");
})



const getAllQry = "Select * from customers";
const getOneQry = "Select * from customers Where id = ?";
const insertQry = "insert into customers(name, address, age) values(?,?,?)";
const updateQry = "update customers set name = ?, address = ?, age = ? where id = ?";
const deleteQry = `delete from customers where id = ?`;
    

app.get("/customer",(req, res) => {
    db.query(getAllQry, (e,r) => {
        if(e) return res.status(500).json({error: e.message});
        res.json(r);
    })
})

app.get("/customer/:id",(req, res) => {
    const {id} = req.params
    db.query(getOneQry,id, (e,r) => {
        if(e) return res.status(500).json({error: e.message});
        if(r.length == 0){
            return res.status(404).json({message: 'Record not found'})
        }
        res.json(r[0]);
    })
})

app.post("/customer",(req,res) => {
    const {name, address, age} = req.body;
    db.query(insertQry,[name, address, age],(e,r) => {
        if(e) return res.status(500).json({error: e.message});
        res.json({id: r.insertId, name: name, address: address, age: age});
    })
})

app.put("/customer/:id",(req,res) => {
    const {id} = req.params;
    const {name, address, age} = req.body;
    
    db.query(updateQry,[name, address, age, id],(e,r) => {
        if(e) return res.status(500).json({error: e.message});
        if(r.affectedRows == 0){
            return res.status(404).json({message: 'Record not found'})
        }
        res.json({message: 'Updated Successfully'});
    })
})

app.delete("/customer/:id",(req,res) => {
    const {id} = req.params;
    db.query(deleteQry, id,(e,r) => {
        if(e) return res.status(500).json({error: e.message});
        if(r.affectedRows == 0){
            return res.status(404).json({message: 'Record not found'})
        }
        res.json({message: 'Deleted Successfully'});
    })
})

app.listen(port,()=>{
    console.log("Server is running at " + port);
})