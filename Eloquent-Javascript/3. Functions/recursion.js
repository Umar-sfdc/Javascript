/* 

Q) We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

- Zero is even.

- One is odd.

- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*/

let num = Number(prompt("Pick a Number"));

function isEven(num) {
  if (!Number.isNaN(num) || typeof num != "number") {
    if (num == 1) {
      return false;
    } else if (num == 0) {
      return true;
    } else if (num < 0) {
      return isEven(-num);
    } else return isEven(num - 2);
  } else console.log("your given input is not valid!");
}

console.log(isEven(num));
