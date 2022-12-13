let x = 10;
let y = x + 50;

let x = 100;
let y = x - 50;

let x = 4;
let y = 5;
let z = x * y;

let x = 5;
let y = 2;
let z = x / y;
console.log(z); // 2.5

let x = 5;
let y = 2;
let z = x % y;
console.log(z); // 1

const n = 2 ** 3;
console.log(n);  // 8

let x = 5;
x++; // x = 6

// префиксный инкремент
let x = 5;
let z = ++x;
console.log(x); // 6
console.log(z); // 6
     
// постфиксный инкремент
let a = 5;
let b = a++;
console.log(a); // 6
console.log(b); // 5

a = a + 1; // a++

// префиксный декремент
let x = 5;
let z = --x;
console.log(x); // 4
console.log(z); // 4
     
// постфиксный декремент
let a = 5;
let b = a--;
console.log(a); // 4
console.log(b); // 5

// -----------------

// Все операторы довольно просты, наверное, за исключением оператора равенства и оператора тождественности. 
// Они оба сравнивают два значения, но оператор тождественности также принимает во внимание и тип значения. 
// Например:

let income = 100;
let strIncome = "100";
let result = income == strIncome;
console.log(result); //true

// Переменная result здесь будет равна true, так как фактически и income, и strIncome представляют число 100.
// Но оператор тождественности возвратит в этом случае false, так как данные имеют разные тип:

let income = 100;
let strIncome = "100";
let result = income === strIncome;
console.log(result); // false

// Аналогично работают операторы неравенства != и !==.

// -----------------

let income = 100;
let percent = 10;
let result = income > 50 && percent < 12;
console.log(result); //true

let income = 100;
let isDeposit = true;
let result = income > 50 || isDeposit == true;
console.log(result); //true

let income = 100;
let result1 = !(income > 50);
console.log(result1); // false, так как income > 50 возвращает true
 
let isDeposit = false;
let result2 = !isDeposit;
console.log(result2); // true

// -----------------

let x = 5;

let a = 23;
a += 5; // аналогично a = a + 5
console.log(a); // 28

let a = 28;
a -= 10; // аналогично a = a - 10
console.log(a); // 18

let x = 20;
x *= 2; // аналогично x = x * 2
console.log(x); // 40

let x = 5;
x **= 2;
console.log(x);  // 25

let x = 40;
x /= 4; // аналогично x = x / 4
console.log(x); // 10

let x = 10;
x %= 3; // аналогично x = x % 3
console.log(x); // 1, так как 10 - 3*3 = 1

let x = true;
let y = false;
y &&= x;
console.log(y); // false
 
let c = false;
let d = true;
c &&= d;
console.log(c); // false
 
let a = true;
let b = true;
a &&= b;
console.log(a); // true
 
let e = false;
let f = false;
e &&= f;
console.log(e); // false

let x = true;
let y = false;
y ||= x;
console.log(y); // true
 
let a = true;
let b = true;
a ||= b;
console.log(a); // true
 
let c = false;
let d = true;
c ||= d;
console.log(c); // true
 
let e = false;
let f = false;
e ||= f;
console.log(e); // false