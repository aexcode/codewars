// https://www.codewars.com/kata/52597aa56021e91c93000cb0

const moveZeros = (arr) => {
  const zeros = arr.filter((val) => val === 0)
  arr = arr.filter((val) => val !== 0)
  zeros.map((zero) => arr.push(zero))

  return arr
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']) // -> [false,1,1,2,1,3,"a",0,0]
