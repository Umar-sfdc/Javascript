/* 

Q) The standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.

ex, 

console.log(min(20, 0));
// 0

console.log(min(10, -1));
// -1

*/

function min(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return `${num1} and ${num2} are not valid numbers!`;
    }

    return num1 < num2 ? num1 : num2;
}

console.log(min(10, "something"));  // "10 and something are not valid numbers!"
console.log(min(20, 0));           // 0
console.log(min(10, -1));          // -1

