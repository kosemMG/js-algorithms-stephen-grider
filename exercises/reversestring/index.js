// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
// function reverse(str) {
//   let reversedString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//
//   return reversedString;
// }

// Solution 2
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution 3
// function reverse(str) {
//   let reversed = '';
//   for (const char of str) {
//     reversed = char + reversed;
//   }
//
//   return reversed;
// }

// Solution 4
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
