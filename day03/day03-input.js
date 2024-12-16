// Read the file
const fs = require('fs');

function readInputFile(filename) {
    try {
        // Read the entire file as a single string
        const content = fs.readFileSync(filename, 'utf8');
        return content.trim(); // Remove any trailing whitespace
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}

// Example usage:
const inputText = readInputFile('day03-input.txt');

// // Now you can pass this to your processing function
// function processText(text) {
//     // Your processing logic here
//     console.log("Text length:", text.length);
//     // First few characters as a sample
//     console.log("Sample of text:", text.slice(0, 100));
// }

// if (inputText) {
//     processText(inputText);
// }

module.exports = {
    inputText
}