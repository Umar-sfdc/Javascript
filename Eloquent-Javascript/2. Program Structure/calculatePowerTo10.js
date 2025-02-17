// WAP to calculate the power of 2 to the 10.

let power = 10, count = 1, result = 1;
let number = Number(prompt("Enter Number to the power 10"));

if(!Number.isNaN(number))
{
    while(count <= 10)
    {
        result *= number;
        count += 1;
    }

    console.log("-> " + result);
}
else console.log("Hey. Why didn't you give me a number?");

