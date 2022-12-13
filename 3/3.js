function goodMorning(){
    console.log("Доброе утро");
}
function goodEvening(){
    console.log("Добрый вечер");
}
let message = goodMorning;  // присваиваем переменной message функцию goodMorning
message();  // Доброе утро
message = goodEvening;  // меняем функцию в переменной message
message();  // Добрый вечер


let message = function(){
    console.log("Hello JavaScript");
}
message();  // Hello JavaScript


function sum(x, y){
 
    if(y === undefined) y = 5;
    if(x === undefined) x = 8;
    const z = x + y;
    console.log(z);
}
sum();          // 13
sum(6);         // 11
sum(6, 4)       // 10


function sum(x = 8, y = 5){
    const z = x + y;
    console.log(z);
}
sum();      // 13
sum(6);     // 11
sum(6, 4)   // 10


function display(season, ...temps){
    console.log(season);
    for(index in temps){
        console.log(temps[index]);
    }
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);


function sum(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function operation(x, y, func){
    const result = func(x, y);
    console.log(result);
}
console.log("Sum");
operation(10, 6, sum);  // 16
console.log("Subtract");
operation(10, 6, subtract); // 4


function sum (a, b) {
  return a + b;
}
let num1 = sum(2, 4);
console.log(num1);  // 6
const num2 = sum(6, 34);
console.log(num2);  // 40


var a = 5;
let b = 8;
const c = 9;
function displaySum(){
  
    var d = a + b + c;
    console.log(d);
}
displaySum(); // 22


function print(){
    var a = 5;
    let b = 8;
    const c = 9;
    console.log("Function print: a =", a);
    console.log("Function print: b =", b);
    console.log("Function print: c =", c);
}
print();
console.log("Global: a =", a);  // Uncaught ReferenceError: a is not defined

// Переменная, объявленная с помощью var, может использоваться вне блока
// Блок кода должен срабатывать, чтобы инициализировать переменную. 
// безымянный блок
{
    var a = 5;
}
console.log("a =", a);  // a = 5
// условная конструкция
if(true){
    var b = 6;
}
console.log("b =", b);  // b = 6
// цикл
for(var i = 0; i < 5; i++){
    var c = 7;
}
console.log("c =", c);  // c = 7


if(false){
    var b = 6;
}
console.log("b =", b);  // b = undefined
// цикл
for(var i = 1; i < 0; i++){
    var c = 7;
}
console.log("c =", c);  // c = undefined


// Переменные let и const, определенные внутри блока кода, можно использовать только внутри этого блока кода.
{
    let a = 5;
}
console.log("a =", a);  // Uncaught ReferenceError: a is not defined


// В этом случае в функции будет использоваться та переменная z, которая определена в функции.
var z = 89;
function print(){
    var z = 10;
    console.log(z); // 10
}
print(); // 10


// Выше было указано, что var определяет переменную уровня функции.
// Поэтому с помощью оператора var мы НЕ можем определить одновременно две переменных с одним и тем же именем и в функции, 
// и в блоке кода в этой функции. Если мы это сделаем, то при объявлении переменной на уровне блока мы меняем значение переменной уровня функции:
function displayZ(){
    var z = 20;
    {
        var z = 30; // Не определяет новую переменную, а изменяет значение переменной z уровня функции
        console.log("Block:", z);  // 30
    }
    console.log("Function:", z);  // 30
}
displayZ();


// Как писалось выше, оператор let определяет переменную уровня блока кода.
let z = 10;
function displayZ(){
    let z = 20;
    {
        let z = 30;
        console.log("Block:", z);  // 30
    }
    console.log("Function:", z);  // 20
}
displayZ();
console.log("Global:", z);  // 10


// Все, что относится к оператору let, относится и к оператору const, 
// который определяет константы уровня блока кода.
const z = 10;
function displayZ(){
    const z = 20;
    {
        const z = 30;
        console.log("Block:", z);   // 30
    }
    console.log("Function:", z);    // 20
}
displayZ();
console.log("Global:", z);  // 10

// Если мы не используем это ключевое слово при определении переменной в функции, 
// то такая переменная будет глобальной. 
function bar(){
    foo = "25";
}
bar();
console.log(foo);   // 25


// Несмотря на то, что вне функции bar переменная foo нигде не определяется, тем не менее она доступна вне функции во внешнем контексте. 
// Единственное условие - мы вызываем функцию, где определена такая переменная.
// Однако если мы не вызовем функцию, переменная будет не определена:
function bar(){
    foo = "25";
}
// bar();   Функция НЕ вызывается
console.log(foo);   // ошибка - Uncaught ReferenceError: foo is not defined


// Ту же ошибку мы получили бы, если бы мы не только присваивали значение переменной, но и определяли бы ее:
function bar(){
    var foo = "25";
}
bar();
console.log(foo);   // ошибка - Uncaught ReferenceError: foo is not defined
