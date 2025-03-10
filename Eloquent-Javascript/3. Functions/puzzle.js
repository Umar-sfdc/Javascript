/* 

Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

*/


function findSolution(target) {
    function find(current, history) {
      if (current == target) {
        return history;
      } else if (current > target) {
        return null;
      } else {
        return find(current + 5, `(${history} + 5)`) ??
               find(current * 3, `(${history} * 3)`);
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24));
  // → (((1 * 3) + 5) * 3)
