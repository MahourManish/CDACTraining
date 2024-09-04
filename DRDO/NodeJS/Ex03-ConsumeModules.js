const ext = require("./CustomModules")
const cart = require("./CartModule")
/* const readline = require('node:readline');
ext.simpleFunction(); */
/* const rl = readline.createInterface({input: process.stdin,output: process.stdout,});
rl.question(`Choose a number: `, num => {
    ext.mathTable(num);
    rl.close();
}); */

console.log(cart);
cart.addItem("Apple",1,20);
cart.addItem("Mango",2,30);
console.log(cart.getAll());
console.log(cart.totalBill());
console.log(cart.count());

