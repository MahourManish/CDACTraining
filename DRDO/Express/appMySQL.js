const express = require('express');
const mysql = require('mysql');
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

app.use(express.json())

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

app.get("/employees/:id",(req, res) => {
    const {id} = req.params
    const query = `Select * From Employee Where id = ${id}`;
    db.query(query, (e,r) => {
        if(e) return res.status(500).json({error: e.message});
        if(r.length == 0){
            return res.status(404).json({message: 'Record not found'})
        }
        res.json(r[0]);
    })
})

app.post("/employees",(req,res) => {
    const {name, address, salary} = req.body;
    const query = "insert into Employee(name, address, salary) values(?,?,?)";
    db.query(query,[name, address, salary],(e,r) => {
        if(e) return res.status(500).json({error: e.message});
        res.json({id: r.insertId, name: name, address: address, salary: salary});
    })
})

app.put("/employees/:id",(req,res) => {
    const {id} = req.params;
    const {name, address, salary} = req.body;
    const query = "update Employee set name = ?, address = ?, salary = ? where id = ?";
    db.query(query,[name, address, salary, id],(e,r) => {
        if(e) return res.status(500).json({error: e.message});
        if(r.affectedRows == 0){
            return res.status(404).json({message: 'Record not found'})
        }
        res.json({message: 'Updated Successfully'});
    })
})

app.delete("/employees/:id",(req,res) => {
    const {id} = req.params;
    const query = `delete from  Employee where id = ${id}`;
    db.query(query,(e,r) => {
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