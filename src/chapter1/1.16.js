const Math = require('mathjs')

function iterExp(b, n) {
  let a = 1

  while (n > 0) {
    if (n % 2 === 0) {
      // if n is even, then a*b^n = a*(b*b)^(n/2)
      n = n / 2
      b = b * b
    } else {
      // if n is odd, then a*b^n = (a*b)*b^(n-1)
      a = a * b
      n = n - 1
    }
  }

  // in the end, a*b^0 = a*1 = a
  return a
}

console.log(iterExp(5, 9), Math.pow(5, 9))
