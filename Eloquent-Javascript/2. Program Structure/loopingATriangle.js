/*

Q) Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

// hold no. of lines to print.
let num = Number(prompt("Pick a Number to print traingle"))


// print the traingle & check the conditions.
if(!Number.isNaN(num) && num > 0)
{
    for(let line = "#"; line.length<=num; line += "#")
    {
        console.log(line);
    }
} else console.log("Hey. Why didn't you give me a number or your giving me the wrong input?");
