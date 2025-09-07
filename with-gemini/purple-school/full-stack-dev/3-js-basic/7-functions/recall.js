// Задание 1:
// Напиши функцию calculateTotalPrice, которая принимает объект order. Этот объект может содержать свойства price (цена), quantity (количество) и discount (скидка в процентах).
// Требования:
// 1. Функция должна возвращать итоговую стоимость заказа.
// 2. Параметр quantity должен по умолчанию быть равен 1.
// 3. Параметр discount должен по умолчанию быть равен 0.
// 4. Если price не передан или равен нулю, функция должна сразу вернуть строку "Ошибка: не указана цена". Используй для этого паттерн "раннего возврата".
// 5. Используй синтаксис деструктуризации с параметрами по умолчанию прямо в аргументах функции.

function calculateTotalPrice({ price, quantity = 1, discount = 0 } = {}) {
  if (!price || price === 0) {
    return 'Ошибка: не указана цена';
  }

  const totalCost = quantity * price;
  const discountAmount = totalCost * (discount / 100);
  const finalPrice = totalCost - discountAmount;

  return finalPrice;
}

console.log(calculateTotalPrice({ price: 100, quantity: 2, discount: 10 })); // 180
console.log(calculateTotalPrice({ price: 50, quantity: 5 })); // 250
console.log(calculateTotalPrice({ price: 200 })); // 200
console.log(calculateTotalPrice({ discount: 15 })); // "Ошибка: не указана цена"

// Задание 2:
//
