/* 

We want to write a program that prints two numbers: the numbers of cows and chickens on a farm, with the words Cows and Chickens after them and zeros padded before both numbers so that they are always three digits long:

007 Cows
011 Chickens

This asks for a function of two arguments—the number of cows and the number of chickens.

*/

function printFarmInventory(cows, chickens)
{

    // for cows
    let cowString = String(cows);
    
    while(cowString.length < 3)
        {
            cowString = "0" + cowString;
        }
    console.log(`${cowString} cows`);

    // for chickens
    let chickenString = String(chickens);

    while(chickenString.length < 3)
        {
            chickenString = "0" + chickenString;
        }
    console.log(`${chickenString} chickens`);
}

printFarmInventory(7, 25);

