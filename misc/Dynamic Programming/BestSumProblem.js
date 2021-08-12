/**
 * Write a function bestSum(targetSum, numbers) that
 * -> returns an array containing the shortest combination of numbers that add up to eaxctly the targetSum.
 * -> In case of mulitple combinations of same length, return any.
 */

function bestSum(targetSum, numbers, memo = {}) {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    if(numbers.includes(targetSum)) return [targetSum];

    let shortestCombination = null;

    for(let num of numbers) {
        let nextSum = targetSum - num;
        let result = bestSum(nextSum, numbers, memo);
        if(result != null){
            const combination = [...result, num];
            if( shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    memo[targetSum] = shortestCombination;
    return shortestCombination;
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));