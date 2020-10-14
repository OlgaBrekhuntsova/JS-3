//Задача 2 - 3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
function findLongestWord(string = '') {
  // Write code under this line
  let maxWordLength = 0;
  let maxWordIndex = 0;
  string = string.split(' ');
  for (let i = 0; i < string.length; i += 1) {
    if (maxWordLength < string[i].length) {
      maxWordLength = string[i].length;
      maxWordIndex = i;
    }
  }
  return string[maxWordIndex];
}
console.log(findLongestWord(''));
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
