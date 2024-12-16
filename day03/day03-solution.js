const { inputText } = require('./day03-input')

input = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"

pattern = /mul\(\d+\,\d+\)/g

let match = inputText.match(pattern)

let resultArray = []
if (match) {
  for (let i = 0; i < match.length; i++) {
    const pattern = /\d+/g
    const numberArray = match[i].match(pattern)
    const result = numberArray[0] * numberArray[1]
    resultArray.push(result)
  }
}

// console.log(resultArray)
let sum = 0
for (let i = 0; i < resultArray.length; i++) {
  sum = sum + resultArray[i]
}

console.log(sum)

