// Если условие в первом операнде равно true, то возвращается второй операнд; 
// если условие равно false, то третий. 
const a = 1;
const b = 2;
const result = a < b ?a :b;
console.log(result); // 1

// Оператор возвращает значение левого операнда, если оно НЕ равно null и undefined. 
// Иначе возвращается значение правого операнда. 
const result2 = 0 ?? 5;
console.log(result2);   // 0
 
const result3 = "" ?? "javascript";
console.log(result3);   // "" - пустая строка
 
const result4 = false ?? true;
console.log(result4);   // false
 
const result5 = null ?? "not null";
console.log(result5);   // not null
 
const result6 = undefined ?? "defined";
console.log(result6);   // defined
 
let message = null;
const hello = "Hi JavaScript";
const result7 = message ?? hello;
console.log(result7);   // Hi JavaScript

// -------

let number1 = "56";
let number2 = 4;
let result = number1 + String(number2);
console.log(result); // 564

let number1 = "56";
let number2 = 4;
let result = parseInt(number1) + number2;
console.log(result); // 60

let num1 = "123hello23";
let num2 = parseInt(num1);
console.log(num2); // 123

// -------

let num1 = "javascript";
let num2 = "22";
let result = isNaN(num1);
console.log(result); // true - num1 не является числом
result = isNaN(num2);
console.log(result); //  false - num2 - это число

let num1 = "110";
let num2 = parseInt(num1, 2);
console.log(num2); // 6

let number1 = "46.07";
let number2 = "4.98";
let result = parseFloat(number1) + parseFloat(number2);
console.log(result); //51.05

// -------

const myArray = [];

const people = ["Tom", "Alice", "Sam"];
console.log(people);    // ["Tom", "Alice", "Sam"];

const people = ["Tom", "Alice", "Sam"];
console.log(people[0]); // Tom
const person3 = people[2]; // Sam
console.log(person3); // Sam

const people = ["Tom", "Alice", "Sam"];
console.log(people[7]); // undefined

const people = ["Tom", "Alice", "Sam"];
console.log(people[0]); // Tom
people[0] = "Bob";
console.log(people[0]); // Bob

const people = ["Tom", "Alice", "Sam"];
console.log(people[7]); // undefined - в массиве только три элемента
people[7] = "Bob";
console.log(people[7]); // Bob

const objects = ["Tom", 12, true, 3.14, false];
console.log(objects);

const numbers1 = [0, 1, 2, 3, 4, 5 ]; // одномерный массив
const numbers2 = [[0, 1, 2], [3, 4, 5] ]; // двумерный массив

const people = [
        ["Tom", 25, false],
        ["Bill", 38, true],
        ["Alice", 21, false]
];
console.log(people[0]); // ["Tom", 25, false]
console.log(people[1]); // ["Bill", 38, true]
console.log("Имя: " + people[0][0]); // Tom
console.log("Возраст: " + people[0][1]); // 25

// -------

const income = 100;
if(income > 50) {
    console.log("доход больше 50");
}

const income = 100;
if(income > 50) console.log("доход больше 50");

const income = 45;
if(income > 50){
    console.log("Доход больше 50");
}
else{
    console.log("Доход меньше или равен 50");
}

const income = 45;
if(income > 50) console.log("Доход больше 50");
else console.log("Доход меньше или равен 50");

const income = 500;
if(income < 200){
    console.log("Доход ниже среднего");
}
else if(income>=200 && income<300){
    console.log("Чуть ниже среднего");
}
else if(income>=300 && income<400){
    console.log("Средний доход");
}
else{
    console.log("Доход выше среднего");
}

const income = 300;
switch(income){
    case 100 : 
        console.log("Доход равен 100");
        break;
    case 200 : 
        console.log("Доход равен 200");
        break;
    case 300 : 
        console.log("Доход равен 300");
        break;
}

// -------

for(let i = 0; i<5; i++){
    console.log(i);
}

for(let i = 1, j=1; i < 5, j < 4; i++, j++){
    console.log(i + j);
}

for(let i=1; i <= 5; i++){
     for(let j = 1; j <=5; j++){
        console.log(i * j);
     }
}

let i = 1;
while(i <=5){
    console.log(i);
    i++;
}

for(let i=1; i <= 10; i++){
     if(i===6) break;
     console.log(i);
}

for(let i=1; i <= 10; i++){
     if(i===6) continue;
     console.log(i);
}

const person = {name: "Tom", age: 37};
for(prop in person){
     console.log(prop);
}

const website = "erik";
for(ch of website){
     console.log(ch);
}

const people = ["Tom", "Sam", "Bob"];
for(const person of people) {
    console.log(person);
}
