/*
* Write a function `canSum(targetSum, numbers)`
* -> should return a boolean indicating whether or not it is possible to generate the targetSum using no. in array
* -> you may use an element as many times as needed
* -> you may assume the numbers in array are non-negative.
*/

function canSum(targetSum, numbers, memo = {}){
    if(numbers.includes(targetSum)) return true;
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for (const element of numbers) {
        const nextSum = targetSum - element;
        if(canSum(nextSum, numbers, memo) === true){
            memo[targetSum] = true;
            return memo[targetSum];
        };
    }
    memo[targetSum] = false;
    return memo[targetSum];    
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));