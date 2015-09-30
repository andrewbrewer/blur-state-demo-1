var actualLineup = [];

// Create a function that adds an artist to the end of our lineup
// NOTE: Check that artist doesn't already exist in lineup

function addArtist (artistName, lineup) {
    // Check that artist is not already in lineup
    if (lineup.length > 0) {
       for (var i = 0; i < lineup.length; i++) {
            if (lineup[i] == artistName) {
                console.log('Artist already in lineup');
                break;
            } else if (i == lineup.length - 1) {
                lineup.push(artistName);
                break;
            }
        } 
    } else {
        lineup.push(artistName);
    }

    return lineup;
}

actualLineup = addArtist('Foo Fighters', actualLineup);
console.log(actualLineup);

actualLineup = addArtist('Jack White', actualLineup);
console.log(actualLineup);

