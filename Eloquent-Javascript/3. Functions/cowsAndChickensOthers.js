/* 

But just as we are about to send the farmer the code (along with a hefty invoice), she calls and tells us she’s also started keeping pigs, and couldn’t we please extend the software to also print gaot?

also, print cows, chickens and goat.

*/


function printFarmInventory(cows, chickens, goat)
{
    console.log(`${zerosPadding(cows, 4)} cows`);
    console.log(`${zerosPadding(chickens, 4)} chickens`);
    console.log(`${zerosPadding(goat, 4)} goat`);
}

function zerosPadding(qantity, iteration)
{
    let string = String(qantity);

    while(string.length < iteration)
    {
        string = "0" + string;
    }

    return string;
}

printFarmInventory(7, 30, 17);


