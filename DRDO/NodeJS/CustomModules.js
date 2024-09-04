//All modules are created using a command called module.export

module.exports.simpleFunction = () => console.log("A simple function")

module.exports.mathTable = (a) => {
    console.log(`Multiplication Table of ${a}`);
    for(let i = 1; i <= 10; i++)
    {
        console.log(`${a} X ${i}\t = ${a*i}`)   
    }
}