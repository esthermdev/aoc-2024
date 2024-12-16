const { leftList, rightList } = require('./day01-input');

// example input
const a_list = [3, 4, 2, 1, 3, 3];
const b_list = [4, 3, 5, 3, 9, 3];

function similarity_score(list_one, list_two) {
    // for each ele in list one, does it exist in list2
    let total_sum = 0
    for (let i = 0; i < list_one.length; i++) {
        let result;
        const element = list_one[i];
        // if it exists, how many times does it occur in list2
        let count = 0;
        for (let j = 0; j < list_two.length; j++) {
            if (list_one[i] === list_two[j])  {
                count += 1
            }
        }
        result = element * count;
        total_sum += result;
    }
    return total_sum
}

console.log(similarity_score(leftList, rightList));