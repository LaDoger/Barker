function onload() {
    fill();
}

function fill() {
	// Fill in all bark content.
    var addressOfThisBark;
    var addressOfTheBarkWhichGotBarkedAt;
    var unsortedBarkList = [];
    var addressesOfBarksBarkingAtThisBark = [];
    
    // Fill in "This Bark", and assign values for addressOfTheBarkWhichGotBarkedAt and unsortedBarkList.
    [addressOfTheBarkWhichGotBarkedAt, unsortedBarkList] = fillThisBark(addressOfThisBark);
    
    // Fill in "The Bark which got Barked at".
    fillTheBarkWhichGotBarkedAt(addressOfTheBarkWhichGotBarkedAt);
    
    // Sort the unsortedBarkList to get a clean list of replies.
    addressesOfBarksBarkingAtThisBark = sortOutTheRealBarks(unsortedBarkList);
    
    // Fill in "Barks Barking at this Bark".
    fillBarksBarkingAtThisBark(addressesOfBarksBarkingAtThisBark);
}

function fillThisBark(addressOfThisBark) {
    // Fill in "This Bark".
    // Returns 1) address of the bark which got barked at, and
    // 2) array of addresses that sent a tip to this bark.
    // (The array needs to be sorted because it might contain addresses of non-barks.)
    
    // (Code here)
    
    return [addressOfTheBarkWhichGotBarkedAt, unsortedBarkList];
}

function fillTheBarkWhichGotBarkedAt(addressOfTheBarkWhichGotBarkedAt) {
    // Fill in "The Bark which got Barked at".
    
    // (Code here)
}

function sortOutTheRealBarks(unsortedBarkList) {
    // Sort the unsortedBarkList to get a clean list of replies.
    // Returns an array of bark addresses.
    
    var sortedBarkList;
    
    // (Code here)
    
    return sortedBarkList;
}

function fillBarksBarkingAtThisBark(addressesOfBarksBarkingAtThisBark) {
    // Fill in "Barks Barking at this Bark"".
    
    // (Code here)
}
