// Задание 6: Напиши функцию capitalizeFirstLetter(str), которая принимает строку str и возвращает новую строку, в которой первая буква каждого слова написана с заглавной буквы, а остальные буквы — с прописной.
// Требования к функции:
// - Функция должна возвращать строку, где только первая буква каждого слова — заглавная.
// - Слова разделяются пробелами.
// - Функция должна корректно обрабатывать строки, содержащие несколько пробелов между словами и ведущие/завершающие пробелы.
// Пример:
// capitalizeFirstLetter("hello world"); // "Hello World"
// capitalizeFirstLetter("  multiple  spaces  "); // "Multiple Spaces"
// capitalizeFirstLetter("javaScript is fun"); // "Javascript Is Fun"

function capitalizeFirstLetter(str) {
  const strWithoutSpaces = str.trim();
  const strArr = strWithoutSpaces.split(' ');
  const strArrWithoutEmptyStr = [];

  for (str of strArr) {
    if (str.length === 0) {
      continue;
    } else {
      const newStr = str.slice(0, 1).toUpperCase() + str.slice(1);
      strArrWithoutEmptyStr.push(newStr);
    }
  }

  return strArrWithoutEmptyStr.join(' ');
}

const result1 = capitalizeFirstLetter('hello world');
console.log(result1); // 'Hello World'

const result2 = capitalizeFirstLetter('  multiple  spaces  ');
console.log(result2); // 'Multiple Spaces'

const result3 = capitalizeFirstLetter('javaScript is fun');
console.log(result3); // 'JavaScript Is Fun'

// Задание 7: Напиши функцию filterNumbers(arr, threshold), которая принимает массив чисел arr и пороговое значение threshold, и возвращает новый массив, содержащий только числа, которые больше порогового значения.
// Требования к функции:
// - Функция должна возвращать новый массив чисел, которые больше threshold.
// - Если в массиве нет чисел, превышающих порог, функция должна вернуть пустой массив [].
// - Исходный массив не должен изменяться (используй методы, которые возвращают новый массив).
// Пример:
// filterNumbers([10, 20, 30, 40], 25); // [30, 40]
// filterNumbers([5, 8, 12, 3], 10); // [12]
// filterNumbers([1, 2, 3], 5); // []

function filterNumbers(arr, threshold) {
  // const newArr = arr.filter((num) => num > threshold);
  // return newArr;

  // ? или, вообще сразу возврат.. без переменных, сразу "новый" массив:

  return arr.filter((num) => num > threshold);
}

const result4 = filterNumbers([10, 20, 30, 40], 25);
console.log(result4); // [30, 40]

const result5 = filterNumbers([5, 8, 12, 3], 10);
console.log(result5); // [12]

const result6 = filterNumbers([1, 2, 3], 5);
console.log(result6); // []

// Задание 8: Напиши функцию reverseString(str), которая принимает строку str и возвращает новую строку, в которой символы идут в обратном порядке.
// Требования к функции:
// - Функция должна возвращать строку, где все символы расположены в обратном порядке.
// - Функция должна работать с пустыми строками, возвращая пустую строку в этом случае.
// - Не используй встроенный метод reverse() (для практики).
// Пример:
// reverseString("hello"); // "olleh"
// reverseString("JavaScript"); // "tpircSavaJ"
// reverseString(""); // ""

function reverseString(str) {
  const letterArr = str.split('');
  const newArr = [];

  for (letter of letterArr) {
    newArr.unshift(letter);
  }

  return newArr.join('');

  // ? или, можно было через "обратный" for:

  // let reversed = '';

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed += str[i];
  // }

  // return reversed;

  // ? или, вообще через reduce:

  // return str.split('').reduce((reversed, char) => char + reversed, '');
}

const result7 = reverseString('hello');
console.log(result7); // 'olleh'

const result8 = reverseString('JavaScript');
console.log(result8); // 'tpircSavaJ'

const result9 = reverseString('');
console.log(result9); // ''
