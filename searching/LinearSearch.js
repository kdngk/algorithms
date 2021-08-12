"use strict";

const arr = [1, 8, 7, 9, 2, 13];
const x = 2;

/**
 * Linear Search with time complexity for worst case: O(n)
 * @param {input array} arr 
 * @param {value to be searched} x 
 */
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x){
            console.log(`x is present at index: ${i}`);
            break;
        }
    }
}

//linearSearch(arr, x);

/**
 * Linear Search with time complexity for worst case: O(n/2) = O(n)
 * Even if element is at last: O(1)
 * @param {input array} arr 
 * @param {value to be searched} x 
 */
function linearSearchFromBothEnds(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let position = -1;

    while(left < right) {
        if(arr[left] === x){
            position = left;
            console.log(`Element found at ${position} in ${left + 1} attempts from left.`);
            break;
        }

        if(arr[right] === x){
            position = right;
            console.log(`Element found at ${position} in ${arr.length - right} attempts from right.`);
            break;
        }
        left++;
        right--;
    }

    if(position == -1){
        console.log("Element not found in array.");
    }
}

linearSearchFromBothEnds(arr, x);