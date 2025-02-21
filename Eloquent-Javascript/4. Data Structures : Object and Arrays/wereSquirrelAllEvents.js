/* 

=========================   WERESQUIRREL PROBLEM =========================


Correlation is a measure of dependence between statistical variables. A statistical variable is not quite the same as a programming variable. In statistics you typically have a set of measurements, and each variable is measured for every measurement. Correlation between variables is usually expressed as a value that ranges from -1 to 1. Zero correlation means the variables are not related. A correlation of 1 indicates that the two are perfectly related—if you know one, you also know the other. Negative 1 also means that the variables are perfectly related but are opposites—when one is true, the other is false.

To compute the measure of correlation between two Boolean variables, we can use the phi coefficient (ϕ). This is a formula whose input is a frequency table containing the number of times the different combinations of the variables were observed. The output of the formula is a number between -1 and 1 that describes the correlation.

We could take the event of eating pizza and put that in a frequency table like this, where each number indicates the number of times that combination occurred in our measurements.

If we call that table n, we can compute ϕ using the following formula:

        ϕ =	  n11n00 − n10n01
              ---------------
              √ n1•n0•n•1n•0

(If at this point you’re putting the book down to focus on a terrible flashback to 10th grade math class—hold on! I do not intend to torture you with endless pages of cryptic notation—it’s just this one formula for now. And even with this one, all we do is turn it into JavaScript.)

The notation n01 indicates the number of measurements where the first variable (squirrelness) is false (0) and the second variable (pizza) is true (1). In the pizza table, n01 is 9.

The value n1• refers to the sum of all measurements where the first variable is true, which is 5 in the example table. Likewise, n•0 refers to the sum of the measurements where the second variable is false.

So for the pizza table, the part above the division line (the dividend) would be 1×76−4×9 = 40, and the part below it (the divisor) would be the square root of 5×85×10×80, or √340,000. This comes out to ϕ ≈ 0.069, which is tiny. Eating pizza does not appear to have influence on the transformations.


webpage link : https://eloquentjavascript.net/04_data.html#p-EedDVNQ30H

*/

// Global Data.
var JOURNAL = [
    { events: ["carrot", "exercise", "weekend"], squirrel: false },
    {
      events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"],
      squirrel: false,
    },
    {
      events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"],
      squirrel: false,
    },
    {
      events: [
        "brussel sprouts",
        "ice cream",
        "brushed teeth",
        "computer",
        "weekend",
      ],
      squirrel: false,
    },
    {
      events: [
        "potatoes",
        "candy",
        "brushed teeth",
        "exercise",
        "weekend",
        "dentist",
      ],
      squirrel: false,
    },
    {
      events: [
        "brussel sprouts",
        "pudding",
        "brushed teeth",
        "running",
        "weekend",
      ],
      squirrel: false,
    },
    {
      events: ["pizza", "brushed teeth", "computer", "work", "touched tree"],
      squirrel: false,
    },
    {
      events: ["bread", "beer", "brushed teeth", "cycling", "work"],
      squirrel: false,
    },
    { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
    { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
    { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
    { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
    {
      events: ["lettuce", "brushed teeth", "television", "weekend"],
      squirrel: false,
    },
    { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
    { events: ["brushed teeth", "computer", "work"], squirrel: false },
    { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
    { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["brushed teeth", "work"], squirrel: false },
    { events: ["cauliflower", "reading", "weekend"], squirrel: false },
    { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
    { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
    {
      events: ["spaghetti", "brushed teeth", "reading", "work"],
      squirrel: false,
    },
    {
      events: ["carrot", "ice cream", "brushed teeth", "television", "work"],
      squirrel: false,
    },
    { events: ["spaghetti", "nachos", "work"], squirrel: false },
    {
      events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"],
      squirrel: false,
    },
    { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
    {
      events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"],
      squirrel: false,
    },
    {
      events: ["potatoes", "ice cream", "brushed teeth", "work"],
      squirrel: false,
    },
    { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["potatoes", "exercise", "work"], squirrel: false },
    { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
    { events: ["lasagna", "ice cream", "work"], squirrel: false },
    { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
    {
      events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"],
      squirrel: false,
    },
    { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
    { events: ["carrot", "work"], squirrel: false },
    { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
    { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
    {
      events: ["spaghetti", "brushed teeth", "reading", "work"],
      squirrel: false,
    },
    {
      events: ["spaghetti", "pudding", "television", "weekend"],
      squirrel: false,
    },
    {
      events: ["bread", "brushed teeth", "exercise", "weekend"],
      squirrel: false,
    },
    { events: ["lasagna", "peanuts", "work"], squirrel: true },
    { events: ["pizza", "work"], squirrel: false },
    { events: ["potatoes", "exercise", "work"], squirrel: false },
    { events: ["brushed teeth", "exercise", "work"], squirrel: false },
    {
      events: ["spaghetti", "brushed teeth", "television", "work"],
      squirrel: false,
    },
    { events: ["pizza", "cycling", "weekend"], squirrel: false },
    { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
    { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
    { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
    {
      events: ["carrot", "peanuts", "brushed teeth", "reading", "work"],
      squirrel: false,
    },
    { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
    {
      events: ["carrot", "nachos", "brushed teeth", "exercise", "work"],
      squirrel: false,
    },
    {
      events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"],
      squirrel: false,
    },
    {
      events: ["lasagna", "brushed teeth", "cycling", "weekend"],
      squirrel: false,
    },
    {
      events: [
        "cauliflower",
        "peanuts",
        "brushed teeth",
        "computer",
        "work",
        "touched tree",
      ],
      squirrel: false,
    },
    {
      events: ["lettuce", "brushed teeth", "television", "work"],
      squirrel: false,
    },
    {
      events: ["potatoes", "brushed teeth", "computer", "work"],
      squirrel: false,
    },
    { events: ["bread", "candy", "work"], squirrel: false },
    { events: ["potatoes", "nachos", "work"], squirrel: false },
    {
      events: ["carrot", "pudding", "brushed teeth", "weekend"],
      squirrel: false,
    },
    {
      events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"],
      squirrel: false,
    },
    { events: ["brussel sprouts", "running", "work"], squirrel: false },
    { events: ["brushed teeth", "work"], squirrel: false },
    { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["candy", "brushed teeth", "work"], squirrel: false },
    {
      events: ["brussel sprouts", "brushed teeth", "computer", "work"],
      squirrel: false,
    },
    { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
    { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
    {
      events: ["spaghetti", "candy", "television", "work", "touched tree"],
      squirrel: false,
    },
    { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
    { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
    {
      events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"],
      squirrel: false,
    },
    { events: ["pizza", "brushed teeth", "work"], squirrel: false },
    { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
    {
      events: ["bread", "beer", "computer", "weekend", "touched tree"],
      squirrel: false,
    },
    { events: ["brushed teeth", "running", "work"], squirrel: false },
    {
      events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"],
      squirrel: false,
    },
    {
      events: ["lasagna", "brushed teeth", "television", "work"],
      squirrel: false,
    },
    {
      events: ["cauliflower", "brushed teeth", "running", "work"],
      squirrel: false,
    },
    { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["carrot", "reading", "weekend"], squirrel: false },
    { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
    { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
    {
      events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"],
      squirrel: false,
    },
    { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
    { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
    {
      events: ["bread", "brushed teeth", "television", "weekend"],
      squirrel: false,
    },
    {
      events: ["cauliflower", "peanuts", "brushed teeth", "weekend"],
      squirrel: false,
    },
  ];
  
  function tableFor(event, JOURNAL) {
    // {"events":["carrot","exercise","weekend"],"squirrel":false},
  
    let table = [0, 0, 0, 0];
  
    for (let i = 0; i < JOURNAL.length; i++) {
      let obj = JOURNAL[i],
        index = 0;
  
      if (obj.events.includes(event)) index += 1;
      if (obj.squirrel) index += 2;
  
      table[index] += 1;
    }
  
    return table;
  }
  
  function phi(table) {
    return (
      (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt(
        (table[2] + table[3]) *
          (table[0] + table[1]) *
          (table[1] + table[3]) *
          (table[0] + table[2])
      )
    );
  }
  
  
  function journalEvents(JOURNAL)
  {
      let events = [];
      for(let entry of JOURNAL)
      {
          for(let event of entry.events)
          {
              if(!events.includes(event)) events.push(event);
          }
      }
  
      return events;
  }
  
// for(let event of journalEvents(JOURNAL))
// {
//     console.log(event + " : ", phi(tableFor(event, JOURNAL)));
// }

for(let event of journalEvents(JOURNAL))
{
    let correlation = phi(tableFor(event, JOURNAL))

    if(correlation > 0.1 || correlation < -0.1)
    {
        console.log(event + " : ", correlation);
    }
}
      
/* 

weekend :  0.13719886811400708
brushed teeth :  -0.3805211953235953
candy :  0.12964074471043288
work :  -0.13719886811400708
spaghetti :  0.242535625036333
reading :  0.11068280537595927
peanuts :  0.59026798116852

*/

  
