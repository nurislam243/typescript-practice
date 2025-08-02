// console.log("hello");
// const country = "bangladesh Usa India ";
// console.log(country);

// let playerName = "Mashrafi";
// let age = 35;
// age = 48;

// console.log(playerName);
// console.log(age);


// function multiply(a : number, b: number){
//     return a * b;
// }
// console.log(multiply(3, 5));

// let fruits = ['apple', 'banana', 'orange ']

// fruits.push('jackfruit');
// console.log(fruits);


// let mixed = ['rahim', 323, true];

// mixed.push("karim");
// console.log(mixed);

// let person = {
//     name: "Sakib",
//     age: 35,
//     isCaptain: true
// }
// console.log(person.age);

// console.log(person);

// person.age= 40;

// console.log(person.age);


// let a: string;
// let b: number;

// a = "Nur islam";
// b= 23;

// let arr: (string | boolean)[] = [];

// arr.push("WebDev")
// arr.push(true);

// let var1: string | number;
// var1 = "Abdul";
// console.log(var1);

// var1 = 7374;
// console.log(var1);

// let c: {
//     name: string,
//     age: number,
//     isAllrounder?: boolean
// }

// c={
//     name: "tamim",
//     age: 37,
//     // isAllrounder: false
// }

// console.log(c);


// let myFunc: Function;

// myFunc = () => {
//     console.log("hello");
// }

// const myFunc1 = (a: string, b: string, c: string = "How Are You") => {
//     console.log(`Hello ${a} ${b}`);
// }

// myFunc1("Nur", "islam");


type stringOrNum = string | number;
type userType = { name: string; age: number }

const userDetails = (
    id: stringOrNum,
    user: userType
) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
}

userDetails(113, { name: "Islam", age: 32 });
sayHello({ name: "Islam", age: 34 });