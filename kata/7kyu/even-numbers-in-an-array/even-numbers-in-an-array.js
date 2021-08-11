// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c

function evenNumbers(array, number) {
  return array.filter((n) => n % 2 === 0).slice(-number)
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) // ->  [4, 6, 8]
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) // ->  [-8, 26]
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) // ->  [6]
