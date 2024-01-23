console.log("Hello World");


// This is an example of how tedious async functions look on the back end
async function hello(){
    return "Hello World";
}

let number = 10;
number = 2000;

function pow(x:number, y:number):string {
    return Math.pow(x,y).toString();
}

pow(5, 10);

type MyList = [number?, string?, boolean?];
const arr: MyList = [];

arr.push(1);
arr.push("Georgi");
arr.push(false);

let numbers: number[] = [];
numbers[0] = 1;
numbers[1] = 2;

let user: [number, string] = [23, "Ernie"];

// const small = 1;
// const medium = 2;
// const large = 3;

enum Size {Small = "s", Medium = "m", Large = "l"}
let mySize: Size = Size.Medium;
let Tig: Size;
let Hanan: Size;

type Employee = {
    readonly id: number,
    name: string,
}

let employee: Employee = {
    id: 1,
    name: "Patricia",
}

console.log(employee);

function howHeavyIsIt(weight: number | string):number{
    // if (typeof weight === "number") {
    //     return weight * 2.2;
    // }
    // else {
    //     return parseInt(weight) * 2.2;
    // }
    return typeof weight === "number" ? weight * 2.2 : parseInt(weight) * 2.2; 
}

howHeavyIsIt(10);
console.log(howHeavyIsIt("10kg"));
