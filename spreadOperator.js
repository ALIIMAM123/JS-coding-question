// spread operator:

// spread operator is used to unpack an array or object into individual elements

// let arr1 = [4, 5, 6];
// let arr2 = [1, 2, 3, ...arr1, 7, 8];

// console.log(arr2);

// spread operator is used to copy

// let person1 = { name: "rahul", age: 23 };
// let person2 = { ...person1, city: "hyderabad" };

// console.log(person2);

// // spread operator in function
//  spread operator syntax can be used to pass an array as an argument to the function .Extra value will be ignored if we pass more argument then function  parameter

// function add(a, b, c, d) {
// 	return a + b + c + d;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(add(...arr));

// Rest parameter
// Rest parameter is used is pack the multiple value into Array.

// function number(...arg) {
// 	console.log(arg);
// }

// number(1, 2, 3, 4);

// Destructuring Array and object using rest parameter

// const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];

// console.log(a);
// console.log(b);
// console.log(...rest);

// const { Myname, ...rest } = {
// 	Myname: "ali",
// 	age: 26,
// 	city: "delhi",
// };

// console.log(Myname);
// console.log(rest);

// ****Important****
// There are 6 primitive data type in js:
// undefined
// null
// number
// String
// Symbol]

// There are 3 referance data type

// Object
// Array
// function

// primitive data type:

// primitive type data store data as value to variable
let name = "john";
let name2 = name;

name2 = "doe";

console.log(name);
console.log(name2);

// Reference data type store value as object

// let person = {
// 	name: "ali",
// 	age: 26,
// };

// let person2 = person;
// person2.name = "jack";

// console.log(person, person2);
// console.log(person2.name);

// Conclusion: Reference data refers to same object . so we can't change value. so if we want to change object value ,
// then we need to make copy  copy of that object using spread operator
