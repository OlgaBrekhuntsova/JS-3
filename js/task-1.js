// Задача 2 - 1
// Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из объединения(конкатенации) строк в формате ${ номер элемента } - ${ значение элемента } \n, где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления(конкатенации) строк внутри цикла for

const getItemsString = function (array) {
  'use strict';
  // Write code under this line
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    result = result + `${i + 1} - ${array[i]}\n`;
  }
  return result;
};

console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
