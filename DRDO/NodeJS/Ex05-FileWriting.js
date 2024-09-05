
const cmd = require('prompt-sync')();
const fs = require("fs");
let obj = [];
const id = cmd("Enter the id: ");
const name = cmd("Enter the name: ");
const address = cmd("Enter the addrss: ");

obj = [id,name,address];
let txt = "\n";
obj.forEach(a => {
    txt += `"${a}",`;
})



fs.appendFile("./samplefile.csv",txt,"utf-8",(err) => {if(err) console.log(err.message)});
//fs.writeFile("./samplefile.txt",obj,"utf-8",(err) => {if(err) console.log(err.message)});

