/* 

The following example shows both concat and slice in action. It takes an array and an index and returns a new array that is a copy of the original array with the element at the given index removed.

console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

*/

function remove(arr, index)
{
    return arr.slice(0, index)
    .concat(arr.slice(index + 1));
}


let arr = ["a", "b", "c", "d", "e"];
console.log(remove(arr, 2));


