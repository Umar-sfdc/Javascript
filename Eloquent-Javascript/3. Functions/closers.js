function outerFunction() {
    let count = 0; // count is in the lexical scope of outerFunction

    function innerFunction() {
        count++; // Inner function accesses 'count' from outerFunction
        console.log(count);
    }

    return innerFunction; // Returning innerFunction instead of calling it
}

const counter = outerFunction(); // outerFunction executes and returns innerFunction
counter(); // → 1
counter(); // → 2
counter(); // → 3

console.log(counter);
