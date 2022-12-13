let a = 5;
var b = 5;  // не рекомендуется использовать var
const c = 5;
// const c; - константа не проинициализирована  
// c = 6; - значение константы постоянно 


let company = "Бюро \"Рога и копыта\"";
let company1 = "Бюро 'Рога и копыта'";
let company2 = 'Бюро "Рога и копыта"';


let user = "Tom";
let age = 37;
let isMarried = false;
let text = `Name: ${user}   Age: ${age}   IsMarried: ${isMarried}`;
console.log(text);  // Name: Tom   Age: 37   IsMarried: false


let isAlive;
console.log(isAlive); // undefined
isAlive = null;
console.log(isAlive); // null
isAlive = undefined;  // снова установим тип undefined
console.log(isAlive); // undefined
// undefined указывает, что значение не определено или не установлено
// null означает, что у переменной отсутствует значение


let a = 45;  // тип number
let b = a + 5;
console.log(b); // 50
     
a = "45"; // тип string
let c = a + 5
console.log(c); // 455
// Операция сложения между строкой и числом 5 невозможна. 
// Поэтому число 5 будет преобразовываться к строке, и будет происходить операция объединения строк. 
// Поэтому во втором случае результатом выражения a + 5 будет стока "455".


let id;
console.log(typeof id);  // undefined
id = 45;
console.log(typeof id);  // number
id = 45n;
console.log(typeof id);  // bigint
id = "45";
console.log(typeof id);  // string



