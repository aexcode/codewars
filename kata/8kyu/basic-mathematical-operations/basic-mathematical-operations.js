// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

const basicOp = (operation, value1, value2) => {
  return eval(value1 + operation + value2)
}

basicOp('+', 4, 7) // -> 11
basicOp('-', 15, 18) // -> -3
basicOp('*', 5, 5) // -> 25
basicOp('/', 49, 7) // -> 7
