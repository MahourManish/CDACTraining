const fs = require("fs");
const fileName = "./Ex04-FileReading.js";
const encodingMode = "utf-8";

fs.readFile(fileName,encodingMode,(err, data) => {
    if(err)
        console.log(err.message);
    else
        console.log(data + "\n\n####### Async Code Ends Here ########## \n\n");

});

const content = fs.readFileSync(fileName,encodingMode);
console.log(content + "\n\n####### Sync Code Ends Here ########## \n\n");
