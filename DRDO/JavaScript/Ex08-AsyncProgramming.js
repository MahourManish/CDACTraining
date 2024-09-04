/* 
Async programming is a feature of executing multiple functions parallelly instead of one after the other.
This is required in calling functions that takes more time to return which could be making external calls to other servers using HTTP
REST APIs are functions that are available through URLs and accessible using HTTP. Typically, REST API URLs return data, not the actual page. With this data, the developer can create HTML DOcs and use JS APIs to fill the data into the HTML page. There will be clean seperation from the data and the UI.

*/

/* const test1 = () => {
    let start = Date.now();
    while(Date.now() - start < 5000)
    {
        //do nothing
    }
    return "Hello Sync Program";
};

console.log("Starting the App...")
let res = test1();
console.log(res);
console.log("Finishing the App...") */

//We need async programming for using callback functions, making calls to REST APIs using fetch or any other REST API calling functions and file read/write operations that we do in server side scripting.
//JS supportas Async programming using callbacks, promises and async/await statements.


//callbacks in js

/* const greet = (name) => {console.log(`Hi ${name}, How are you?`)};

const displayGreeting = (anotherFunc) => {
    const name = prompt("Enter the Name");
    anotherFunc(name);
};

displayGreeting(greet); */

//callbacks are difficult to maintain in nested callbacks.

const greet = (callback) => {
    setTimeout(function(){
        console.log("Hi Manish");
        callback();
    },2000);
    console.log("this code will be called first")
};


greet(function(){console.log("Hi Neeraj")});

console.log("Testing async code");


//Example of setTimeout function


