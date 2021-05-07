var eventLogDataOfThisBark = fetch(barkAddress, etherscanAPIKey);

var addressOfAuthorOfThisBark = "0x" + eventLogDataOfThisBark[0].data.slice(26, 66);
document.getElementById('authorOfThisBark').innerHTML = abridgedAddress(addressOfAuthorOfThisBark);

document.getElementById('contentOfThisBark').innerHTML = hexToText(eventLogDataOfThisBark[0].data.slice(322, 386));

var addressWhichGotBarkedAt = "0x" + eventLogDataOfThisBark[0].data.slice(90, 130);


var eventLogDataOfThatBark = fetch(addressWhichGotBarkedAt, etherscanAPIKey);

var addressOfAuthorOfThatBark = "0x" + eventLogDataOfThatBark[0].data.slice(26, 66);
document.getElementById('authorWhoGotBarkedAt').innerHTML = abridgedAddress(addressOfAuthorOfThatBark);

document.getElementById('contentWhichGotBarkedAt').innerHTML = hexToText(eventLogDataOfThatBark[0].data.slice(322, 386));