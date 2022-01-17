"use strict";
let character;
let age2;
let isLogged;
let greet;
greet = () => {
    console.log("hello world");
};
const add = (a, b, c) => {
    console.log(a + b);
};
const salut = (user) => {
    console.log(`Hello ${user.name} ${user.surname}, i hear your age is ${user.age}`);
};
salut({
    name: "Agbor",
    surname: "belynda",
    age: 19
});
