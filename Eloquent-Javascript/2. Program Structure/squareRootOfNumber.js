// conditional execution.

let theNumber = Number(prompt("Pick a Number"));

if (!Number.isNaN(theNumber)) {
  console.log("Your Number is square root of " + Math.sqrt(theNumber));
} else {
  console.log("Hey. Why didn't you give me a number?");
}
