/* 

Q) Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase B characters). Rewrite countBs to make use of this new function.

*/

function countBs(string) {
  // count no of char "B".
  return countChar(string, "B");
}

function countChar(string, char) {
  // count no of searching char.

  let count = 0,
    i = 0;

  while (i < string.length) {
    if (string[i] == char) count++;
    i++;
  }

  return count;
}

console.log(countBs("BOB"));

console.log(countChar("kkkrihgnlsiok kaefh9okkk1", "k"));
