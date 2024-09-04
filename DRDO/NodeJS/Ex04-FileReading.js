const fs = require("fs");
const os = require("os");
const content = fs.readFileSync("./Ex04-FileReading.js","utf-8");
console.log(content);
console.log(os.platform());