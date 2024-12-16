const { inputText } = require('./day03-input')

input = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"

dontPattern = /don\'t\(\)/g
doPattern = /do\(\)/g
mulPattern = /mul\(\d+\,\d+\)/g

let dontIdx = []
let doIdx = []
let mulIdx = {}

while ((result = dontPattern.exec(input))) {
  dontIdx.push(result.index)
}
while ((result = doPattern.exec(input))) {
  doIdx.push(result.index)
}
while ((result = mulPattern.exec(input))) {
  mulIdx[result.index] = result[0]
}

console.log("Do index: ", doIdx, "Don't index: ", dontIdx)
console.log("Mul index: ", mulIdx)

function getLatestDont(index) {
  if (dontIdx.length === 0) {
    return null
  }

  for (let i = 0; i < dontIdx.length; i++) {
    if (index > dontIdx[i]) {
      return dontIdx[i]
    }
  }

  return null
}

function getLatestDo(index) {
  if (doIdx.length === 0) {
    return null
  }

  for (let i = 0; i < doIdx.length; i++) {
    if (index > doIdx[i]) {
      return doIdx[i]
    }
  }
  return null
}

let doInstructionsArray = []
for (let key in mulIdx) {
  let value = mulIdx[key];

  if (getLatestDont(key) > getLatestDo(key)) {
    console.log(`This index ${value} comes after dont.`)
  } else {
    console.log(`This index ${value} comes after do and/or before dont.`)
    doInstructionsArray.push(value)
  }
}

console.log(doInstructionsArray)

let resultArray = []
for (let i = 0; i < doInstructionsArray.length; i++) {
  const numbers = /\d+/g
  const numberArray = doInstructionsArray[i].match(numbers)
  const result = numberArray[0] * numberArray[1]
  resultArray.push(result)
}

console.log(resultArray)

let sum = 0
for (let i = 0; i < resultArray.length; i++) {
  sum = sum + resultArray[i]
}

console.log(sum)