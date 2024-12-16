

const fs = require('fs');
const inputText = fs.readFileSync('day02-input.txt', 'utf8');

const reports = inputText
    .trim()
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
        return line
            .trim()
            .split(' ')
            .map(num => parseInt(num));
    });

// Print reports with each array on one line

// console.log('[');
// reports.forEach(report => {
//     console.log('  ' + JSON.stringify(report) + ',');
// });
// console.log(']');

module.exports = {
    reports
}