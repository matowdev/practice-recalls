// Задание 9: Напиши функцию countVowels(str), которая принимает строку str и возвращает количество гласных букв в этой строке. Гласными считаются: a, e, i, o, u (и их заглавные версии).
// Требования к функции:
// - Функция должна быть нечувствительной к регистру (учитывать и заглавные, и строчные буквы).
// - Она должна возвращать только количество гласных букв в строке.
// - Функция должна корректно работать с пустой строкой, возвращая 0 в этом случае.
// Пример:
// countVowels("hello"); // 2
// countVowels("JavaScript"); // 3
// countVowels("AEIOUaeiou"); // 10
// countVowels(""); // 0

function countVowels(str) {
  const lowerStr = str.toLowerCase();
  const vowelsStr = 'aeiou';
  let count = 0;

  for (let i = 0; i < lowerStr.length; i++) {
    for (let j = 0; j < vowelsStr.length; j++) {
      if (lowerStr[i] === vowelsStr[j]) {
        count++;
      } else {
        continue;
      }
    }
  }

  // ? или, можно было через один цикл и метод includes:

  // for (let i = 0; i < lowerStr.length; i++) {
  //   if (vowelsStr.includes(lowerStr[i])) {
  //     count++;
  //   }
  // }

  return count;
}

const result1 = countVowels('hello');
console.log(result1); // 2

const result2 = countVowels('JavaScript');
console.log(result2); // 3

const result3 = countVowels('AEIOUaeiou');
console.log(result3); // 10

const result4 = countVowels('');
console.log(result4); // 0
