/*
 * Use conditional statements to print one of the following statements given
 * a variable, vehicle:
 *
 * "Vehicle is car"
 * "Vehicle is truck"
 * "Vehicle is boat"
 * "Vehicle is not a car, boat, or truck"
 *
 */

var vehicle = 'motorcycle';

if (vehicle == 'truck') {
    console.log('Vehicle is truck');
} else if (vehicle == 'car') {
     console.log('Vehicle is car');
} else if (vehicle == 'boat') {
    console.log('Vehicle is boat');
} else {
    console.log('Vehicle is not a car, boat, or truck');
}

