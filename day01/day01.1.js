// template.js
const { leftList, rightList } = require('./day01');

// example input
const a = [3, 4, 2, 1, 3, 3];
const b = [4, 3, 5, 3, 9, 3];

function sum_of_differences(list_one, list_two) {
    // order list_one and list_two from smallest to largest
    const sortedAList = [...list_one].sort((a, b) => a - b);  // Create a copy before sorting
    const sortedBList = [...list_two].sort((a, b) => a - b);  // Create a copy before sorting
    
    // for each order of ele in list_one and list_two, find the difference
    let total_sum = 0;
    for(let i = 0; i < sortedAList.length; i++) {  // Added 'let' declaration
        let result;  // Declared result variable
        if (sortedAList[i] < sortedBList[i]) {
            result = sortedBList[i] - sortedAList[i];
        } else {
            result = sortedAList[i] - sortedBList[i];
        }
        total_sum += result;
    }
    return total_sum;  // Added return statement
}

console.log(sum_of_differences(leftList, rightList));