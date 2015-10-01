/*
 * Using a single for loop, print out the operational status of
 * 12 trains, where only the first 4 are operational.
 * 
 * For each train, your loop should print one of the following
 * statements:
 * 
 * Train X is operational
 * Train X is not operational
 */

 var numTrains = 12;
 var dayOfWeek = 'Friday';

console.log('Today is ' + dayOfWeek);
 for (var train = 1; train <= numTrains; train++) {
    if (train <= 4) {
        console.log('Train ' + train + ' is operational');
    } else if (dayOfWeek == 'Friday' && train == 5) {
        console.log('Train ' + train + ' is operational');
    } else {
        console.log('Train ' + train + ' is not operational');
    }
 }