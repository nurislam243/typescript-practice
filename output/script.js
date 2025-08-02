"use strict";
// console.log("hello");
// const country = "bangladesh Usa India ";
// console.log(country);
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
userDetails(113, { name: "Islam", age: 32 });
sayHello({ name: "Islam", age: 34 });
