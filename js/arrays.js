// var example = ['Andrew', 5, true];

// example.push('Test');
// console.log(example);

// example.pop();
// console.log(example);

// example.shift();
// console.log(example);

// example.unshift('Andrew');
// console.log(example);

var lineup = [];

// Add Jack White to lineup
lineup.push('Jack White');
lineup.push('Justin Bieber');
lineup.push('The Strokes');
lineup.push('Foo Fighters');
lineup.push('Alabama Shakes');
lineup.push('Blake Shelton');
console.log(lineup);

// Retrieve first artist
console.log(lineup[0]);

// Retrieve fourth artist
console.log(lineup[3]);

// Change first headliner to George Ezra
lineup.shift();
lineup.unshift('George Ezra');
console.log(lineup);

// The Fourth artist has dropped out, so get them off
// lineup.splice(3, 1);
// console.log(lineup);

// We booked a new headliner, Jack White, so let's put him where Foo Fighters was them on
lineup.splice(3, 1, 'Jack White');
console.log(lineup);

// Array of arrays?!?!?!? Mind blown...
var artists = [];
var headliners = ['Jack White', 'Foo Fighters'];
var nonHeadliners = ['Justin Bieber', 'Taylor Swift'];

artists.push(headliners);
artists.push(nonHeadliners);

console.log(artists);
console.log(artists[0][0]);

// Search an array for Jack White

for (var i = 0; i < lineup.length; i++) {
    if (lineup[i] == 'Jack White') {
        console.log('Jack White is in the lineup');
        break;
    } else if (i == lineup.length - 1 && !isFound) {
        console.log('Jack White is not in the lineup');
    }
}











