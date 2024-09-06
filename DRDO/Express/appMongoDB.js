const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;
//app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/SampleDB").then(() => console.log("Connected to Database")).catch(err => console.log(err));

const empSchema = new mongoose.Schema({
    id: {type: Number, require: true},
    name: {type: String, require: true},
    address: {type: String, require: true},
    salary: {type: Number, require: true},
});

const emp = mongoose.model('Employee',empSchema);

app.get("/employees",async (req, res) => {
    const data = await emp.find();
    res.json(data);
})

app.get("/employees/:id",async (req, res) => {
    const {id} = req.params;
    const data = await emp.findOne({id: id});
    res.json(data);
})

app.post("/employees",async (req,res) => {
    const obj = new emp(req.body);
    obj.save()
    /* const {id, name, address, salary} = req.body;
    await emp.insertMany([{id: id, name: name, address: address, salary: salary}], { rawResult: true });
    const obj = await emp.findOne({id: id}); */
    res.json(obj);
    
})

app.put("/employees/:id",async (req,res) => {
    const obj = await emp.findOneAndUpdate({id: req.params.id}, req.body)
    res.json(obj);
})

app.delete("/employees/:id",async (req,res) => {
    await emp.findOneAndDelete({id: req.params.id});
    res.json("Deleted Successfully");
})

app.listen(port,()=>{
    console.log("Server is running at " + port);
})