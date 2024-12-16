// day01.js
const fs = require('fs');
const inputText = fs.readFileSync('./day01-input.txt', 'utf8');

function parseInput(inputText) {
    const lines = inputText
        .trim()
        .split('\n')
        .filter(line => line.trim());
    
    const leftNumbers = [];
    const rightNumbers = [];
    
    lines.forEach(line => {
        const [left, right] = line.trim().split(/\s+/);
        leftNumbers.push(parseInt(left));
        rightNumbers.push(parseInt(right));
    });
    
    return [leftNumbers, rightNumbers];
}

const [leftList, rightList] = parseInput(inputText);

// Using CommonJS exports since we're using require
module.exports = {
    leftList,
    rightList
};