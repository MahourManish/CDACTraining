const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;
//app.use(express.urlencoded({extended: true}));
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


const getAllQry = "Select * from Employee";
const getOneQry = "Select * from Employee Where id = ?";
const insertQry = "insert into Employee(name, address, salary, empPic) values(?,?,?,?)";
const updateQry = "update Employee set name = ?, address = ?, salary = ?, empPic = ? where id = ?";
const deleteQry = `delete from  Employee where id = ?`;
    

app.get("/employees",(req, res) => {
    db.query(getAllQry, (e,r) => {
        if(e) return res.status(500).json({error: e.message});
        res.json(r);
    })
})

app.get("/employees/:id",(req, res) => {
    const {id} = req.params
    db.query(getOneQry,id, (e,r) => {
        if(e) return res.status(500).json({error: e.message});
        if(r.length == 0){
            return res.status(404).json({message: 'Record not found'})
        }
        res.json(r[0]);
    })
})

app.post("/employees",(req,res) => {
    const {name, address, salary, empPic} = req.body;
    db.query(insertQry,[name, address, salary, empPic],(e,r) => {
        if(e) return res.status(500).json({error: e.message});
        res.json({id: r.insertId, name: name, address: address, salary: salary});
    })
})

app.put("/employees/:id",(req,res) => {
    const {id} = req.params;
    const {name, address, salary} = req.body;
    
    db.query(updateQry,[name, address, salary, id],(e,r) => {
        if(e) return res.status(500).json({error: e.message});
        if(r.affectedRows == 0){
            return res.status(404).json({message: 'Record not found'})
        }
        res.json({message: 'Updated Successfully'});
    })
})

app.delete("/employees/:id",(req,res) => {
    const {id} = req.params;
    db.query(deleteQry,(e,r) => {
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