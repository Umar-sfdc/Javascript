// To calculate sum of 10 numbers.

let count = 0,
  total = 0;
let num = Number(prompt("Sum upto your Number"));

// To add numbers.

if (!Number.isNaN(num)) {
  while (count <= num) {
    total += count;
    count += 1;
  }

  console.log("The sum of first " + num + " natural number is : " + total);
} else {
  console.log("Hey. Why didn't you give me a number?");
}


