const jsonFile = require("./data.json");

for(const i of jsonFile)
    console.log(`${i.title} by ${i.author}`)