/**
 * Write a function `howSum(targetSum, numbers)` so that, 
 * it returns an array containing any combination of elements that add up to exactly the targetSum,
 * if not found, return null.
 * in case of multiple combinations, return any one.
 */

function howSum(targetSum, numbers, memo = {}){
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    if(numbers.includes(targetSum)) return [targetSum];
    for(let num of numbers){
        let remainder = targetSum - num;
        const res = howSum(remainder, numbers, memo);
        if(res != null && Array.isArray(res)){
            memo[targetSum] = [...res, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));