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








// misc. functions


function hexToText(hexx) {
  // Used to turn Ethereum event log "content" hex data into text format.
  var hex = hexx.toString();
  var str = '';
  for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

// Not sure if this works.
function fetchEventLogs(smartContractAddress, etherscanAPIKey) {
  // Get event logs of a smart contract using the etherscan API.
  // Returns an the "data" object from the API.
  var eventLogData;
  var url = 'https://api-ropsten.etherscan.io/api?module=logs&action=getLogs&fromBlock=1&toBlock=latest&address='
    + barkAddress + '&apikey=' + etherscanAPIKey;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
	  eventLogData = data.results;
    });

  return eventLogData;
}


function abridgedAddress(address) {
  // Returns an abridged version of an ethereum address (or any other 0x.... hash).
  // Return format "0x0000...0000"
  return address.slice(0, 6) + "..." + address.slice(-5, -1);
}