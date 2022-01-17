
let character: string;
let age2: number;
let isLogged: boolean;


let greet: Function
greet = () => {
    console.log("hello world")
}

const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
}



type person = { name: string, surname: string, age: number }

const salut = (user: person) => {
    console.log(`Hello ${user.name} ${user.surname}, i hear your age is ${user.age}`);
}

salut({
    name: "Agbor",
    surname: "belynda",
    age: 19
});