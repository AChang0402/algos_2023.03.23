/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

const nums5 = [];

// take 5-8 mins to write the pseudocode here:
/*
Write a function that accepts an array
    
    create a variable containing an empty array
    create a variable containing an empty object(hashmap)
    loop through array
        if value is not a key in the object
            make value a key in the object (assign key any value)
    push each key into empty array
    return array
*/

function dedupe(arr){
    var unique = []
    var object = {}
    for (var i=0; i<arr.length; i++){
        if (object.hasOwnProperty(arr[i]) == false){
            object[arr[i]]="unique"
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(dedupe(nums1))
console.log(dedupe(nums2))
console.log(dedupe(nums3))
console.log(dedupe(nums4))
console.log(dedupe(nums5))

/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA6 = [1, 2, 3];
const arrB6 = ["a", "b", "c"];
const expected6 = [1, "a", 2, "b", 3, "c"];

const arrA7 = [1, 3];
const arrB7 = [2, 4, 6, 8];
const expected7 = [1, 2, 3, 4, 6, 8];

const arrA8 = [1, 3, 5, 7];
const arrB8 = [2, 4];
const expected8 = [1, 2, 3, 4, 5, 7];

const arrA9 = [];
const arrB9 = [42, 0, 6];
const expected9 = [42, 0, 6];

function combine(arrA, arrB){
    var answer = []
    if (arrA.length - arrB.length >= 0){
        var long = arrA
        var short = arrB
    }
    else {
        var long = arrB
        var short = arrA
    }
    for (var i = 0; i<short.length; i++){
        answer.push(arrA[i])
        answer.push(arrB[i])
    }
    for (var j = short.length; j<long.length; j++){
        answer.push(long[j])
    }
    return answer
}

console.log(combine(arrA6,arrB6))
console.log(combine(arrA7,arrB7))
console.log(combine(arrA8,arrB8))
console.log(combine(arrA9,arrB9))

// take 5-8 mins to write the pseudocode here:
/* 
Create a function that accepts 2 arrays
set variable answer = []
Find which array is longer
set variable long = longer array
set variable match equal to longer array length - shorter array length
loop through both arrays from 0 to match
    push value at first array into answer
    push value at second array into answer
loop through longer array from match to its length
    push value into answer
*/