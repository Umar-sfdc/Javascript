// To calculate factorial of N numbers.

let n = Number(prompt("Enter the factorial Number"));

if (!Number.isNaN(n)) {
  function fact(n) {
    if (n == 0) return 1;
    else return fact(n - 1) * n;
  }

  console.log(fact(n));
} else console.log("Hey. Why didn't you give me a number?");
