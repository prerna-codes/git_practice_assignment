let n = 121
let pali = 0
let rem
let temp = n
while (n != 0) {
  rem = n % 10
  pali = pali * 10 + rem
  n = parseInt(n / 10)
}
console.log(pali)
temp == pali ? console.log(true) : console.log(false)