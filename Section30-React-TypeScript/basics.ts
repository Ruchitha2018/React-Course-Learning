//Primitives: number, string, boolean

let age:number;
age=12

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

//More Complex Types: Arrays and Objects

let hobbies: string[];

//Type Alias
type Person = {
    name: string;
    age: number
}
let person: Person
person = {
    name: 'Ruchi',
    age: 32
}
let people: Person[]

//Type Interference
//TypeScript's type inference allows for concise code by automatically determining types without explicit annotations. 


//Union Types: Allows more than one type

let course:string|number = 'React Course';
course= 123;

//Functions and Types
function add(a:number,b:number):number {
  return a+b;
}
//void is similar to null and undefined. But its conjuction to functions. it means it does
//not return anything
function print(value: any):void {
    console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b'], '1');

//updatedArray[0].split('')





