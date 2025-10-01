'use strict';

// Задание 1:
// У нас есть объект counter. У него есть свойство count и метод increment, который увеличивает это свойство на единицу.
// Твоя задача: Добавить в этот объект новый метод incrementAfterDelay(delay). Этот метод должен принимать delay (задержку в миллисекундах) и вызывать оригинальный метод increment спустя указанное время.
// Намёк/Предупреждение: setTimeout — это функция, которая вызывает переданный ей колбэк в "особых условиях". Подумай, чему будет равен this внутри функции, когда setTimeout её вызовет, и как это можно исправить.

const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  },
};

function incrementAfterDelay(delay) {
  setTimeout(() => this.increment(), delay);
}

counter.incrementAfterDelay = incrementAfterDelay;

counter.incrementAfterDelay(1000); // 1

// ?? пример отработки/увязки с bind() методом

const newCounter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  },
  incrementAfterDelay(delay) {
    setTimeout(this.increment.bind(this), delay);
  },
};

newCounter.incrementAfterDelay(2000); // 1

// Задание 2:
// Напиши функцию createLogger(prefix). Эта функция должна принимать один аргумент — строку prefix. В результате своего вызова она должна возвращать другую функцию.
// Возвращённая функция, в свою очередь, должна принимать один аргумент — строку message — и выводить в консоль сообщение в формате: [prefix] message.
// Эта задача проверит твоё понимание того, как вложенные функции "помнят" переменные из своей родительской области видимости.

const warningLogger = createLogger('[WARNING]:');
warningLogger('Что-то пошло не так!'); // [WARNING]: Что-то пошло не так!

const infoLogger = createLogger('[INFO]:');
infoLogger('Это информационное сообщение.'); // [INFO]: Это информационное сообщение.
