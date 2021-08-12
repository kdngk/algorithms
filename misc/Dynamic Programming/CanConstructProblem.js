/**
 * Write a function `canConstruct(target, wordBank)` so that it,
 *  -> returns boolean indicating whether or not the target can be constructed using words in the wordBank.
 *  -> resuse any word any number of times.
 */

function canConstruct(target, wordbank, memo = {}) {
    if(target === '') return true;

    for(let word of wordbank){
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordbank) === true){
                return true;
            }
        }
    }
    return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "def", "cd", "abcd"]));