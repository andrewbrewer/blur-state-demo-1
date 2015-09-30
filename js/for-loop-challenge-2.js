/*
 *The Hoover Dam has 19 generators of multiple types. For simplicity, let’s 
 * say that the first 4 of these generators output 62 megawatts, and the other 
 * 15 output 124 megawatts. In this file, the Dam Rangers have asked you to 
 * design a system of two loops that turns each generator on in progression, 
 * and prints the new total of megawatts generated.
 *
 *
 * They’d like the first loop to be a while loop handling the first 4 generators. 
 * Then, they’d like the second loop to be a for loop that handles the other 15 
 * generators. Each output line should resemble the following lines, with adjusted 
 * values for the currentGen and totalMW:
 *
 * "Generator #1 is on, adding 62 MW, for a total of 62 MW!"
 * "Generator #2 is on, adding 62 MW, for a total of 124 MW!"
 */

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
var smallGen = 64;
var largeGen = 124;

// First 4
while (currentGen <= 4) {
    totalMW += 62;

    if (currentGen % 2 == 0) {
        console.log('Generator #' + currentGen + ' is on, adding ' + 62 + 'MW, for a total of ' + totalMW + ' MW!');
    }
    currentGen++;
}

// Remaining 15
for(var start = 4; currentGen <= totalGen; currentGen++) {
    totalMW += 124;
    console.log('Generator #' + currentGen + ' is on, adding ' + 124 + 'MW, for a total of ' + totalMW + ' MW!');
}