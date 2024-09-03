/* 
Class is a user defined data type that is used to represents a collection of data of various types and a set of functions which can be used to manipulate that data of the class

A Class is used in the form of objects, variables of the type  (UDT), technically we call the variables of the class as object. Object is an instance of the class, each instance shall have its own set of data. A class is more like a blueprint where many instances can be created with the same blue print

Objects in javascript can be created in 3 ways
Singleton objects,
function based classes (prior to ES6),
using class keyword

*/

const emp = {empId: 123, empName: "Manish", empAddress: "Delhi"};
emp.gender = "Male";
emp.salary = 80000;
console.log(emp)

for (const key in emp) {
    const content = `The PropertyName ${key}: ${emp[key]}`;
    console.log(content)
}

const emp2 = emp; //Copy with reference
const emp3 = {...emp}; //Copy only data

emp.empAddress = "New Delhi";
console.log(emp2.empAddress) //New Delhi
console.log(emp3.empAddress) //Delhi

emp.workLocation = "Noida";
console.log(emp2.workLocation) //Noida
console.log(emp3.workLocation) //undefined


const employee = function(id,name,address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;
}
const employeeAlt = (id,name,address) => {
    return {empId: id, empName: name, empAddress: address};
}

const firstObj = new employee(2,"Neeraj","Delhi");
const secondObj = employeeAlt(3,"Pankaj","Noida");

console.log(firstObj);
console.log(secondObj);

//ES 6 Syntax

class Customer{
    constructor(id, name, address, amount){
        this.id = id;
        this.name = name;
        this.address = address;
        this.amount = amount;
    }

    display = () => `${this.name} is from ${this.address} and has raied the bill for Rs. ${this.amount}`;

}


const cst = new Customer(1,"Neeraj","Delhi",100);
console.log(cst.display());


