// Задание 1: Напиши функцию add(a, b), которая принимает два аргумента и возвращает их сумму. Убедись, что функция работает корректно для разных типов данных (например, целых чисел и чисел с плавающей запятой).

function add(a, b) {
  return a + b;
}

const result1 = add(5, 10.56);
console.log(result1); // 15,56

// Задание 2: Напиши функцию isEven(number), которая принимает один аргумент — целое число — и возвращает true, если число чётное, и false, если нечётное.
// Требования к функции:
// - Функция должна возвращать только логические значения (true или false).
// - Функция должна корректно обрабатывать отрицательные числа.
// - Входные данные гарантированно будут целыми числами (проверка типа не требуется).

function isEven(number) {
  return number % 2 === 0;
}

const result2 = isEven(-3);
console.log(result2); // false

// Задание 3: Напиши функцию getGreeting(name), которая принимает один аргумент — имя пользователя — и возвращает строку приветствия. Если имя пустое или null, функция должна вернуть строку "Hello, Guest!". В противном случае она должна вернуть "Hello, [name]!", где [name] — это переданное имя.
// Требования к функции:
// - Функция должна корректно работать с пустыми строками и значением null.
// - Если имя передано, то функция возвращает "Hello, [name]!".
// - Если имя пустое или null, то функция возвращает "Hello, Guest!".
// Пример:
// getGreeting("Alice"); // "Hello, Alice!"
// getGreeting(""); // "Hello, Guest!"
// getGreeting(null); // "Hello, Guest!"

function getGreeting(name) {
  if (name === '' || name === null) {
    return `Hello, Guest!`;
  } else {
    return `Hello, ${name}!`;
  }
}

const result3 = getGreeting('Alice');
console.log(result3); // 'Hello, Alice!'

const result4 = getGreeting('');
console.log(result4); // 'Hello, Guest!'

const result5 = getGreeting(null);
console.log(result5); // 'Hello, Guest!'

// Задание 4: Напиши функцию findMax(a, b, c), которая принимает три числа и возвращает наибольшее из них.
// Требования к функции:
// - Функция должна корректно возвращать наибольшее число из трёх переданных.
// - Входные данные всегда будут числами (проверка типа не требуется).
// - Функция должна работать корректно даже для отрицательных чисел и чисел с плавающей точкой.
// Пример:
// findMax(5, 10, 3); // 10
// findMax(-1, -5, -3); // -1
// findMax(7.5, 2.8, 9.3); // 9.3

function findMax(a, b, c) {
  return Math.max(a, b, c);
}

const result6 = findMax(5, 10, 3);
console.log(result6); // 10

const result7 = findMax(-1, -5, -3);
console.log(result7); // -1

const result8 = findMax(7.5, 2.8, 9.3);
console.log(result8); // 9.3

// Задание 5: Напиши функцию repeatString(str, num), которая принимает строку str и целое число num, и возвращает строку, состоящую из str, повторённой num раз. Если num меньше или равно нулю, функция должна вернуть пустую строку "".
// Требования к функции:
// - Если num положительное, функция возвращает строку str, повторённую num раз.
// - Если num равно нулю или отрицательное, функция возвращает пустую строку "".
// - Функция должна корректно работать с пустой строкой в str.
// Пример:
// repeatString("hi", 3); // "hihihi"
// repeatString("hello", 0); // ""
// repeatString("abc", -2); // ""
// repeatString("", 5); // ""

function repeatString(str, num) {
  if (str === '' || num === 0 || num < 0) {
    return '';
  }

  return `${str.repeat(num)}`;
}

const result9 = repeatString('hi', 3);
console.log(result9); // 'hihihi'

const result10 = repeatString('hello', 0);
console.log(result10); // ''

const result11 = repeatString('abc', -2);
console.log(result11); // ''

const result12 = repeatString('', 5);
console.log(result12); // ''
