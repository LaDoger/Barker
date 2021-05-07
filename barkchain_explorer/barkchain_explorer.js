function apiurl(address){
    // Takes in an ethereum address and returns the etherscan API URL.
    // (etherscanAPIKey might change)
    var etherscanAPIKey = '2XE9BWCRVY4IVZUPATS95YI5UXMRQCEWS9';
    return 'https://api-ropsten.etherscan.io/api?module=logs&action=getLogs&fromBlock=1&toBlock=latest&address=' + address + '&apikey=' + etherscanAPIKey;
}

function hexToText(hexx) {
    // Used to turn Ethereum event log "content" hex data into text format.
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function abridgedAddress(address) {
    // Returns an abridged version of an ethereum address (or any other 0x.... hash).
    // Return format "0x0000...0000"
    return address.slice(0, 6) + "..." + address.slice(-5, -1);
}

function onload() {
    var barkAddress = '0xB9E8550342eE0217E670eC2f1228F9fC0Ac9cbF5';
    var url = apiurl(barkAddress);

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Fill in author address of this Bark. "data.result[0]" refers to the Bark() event log.
            var addressOfAuthorOfThisBark = "0x" + data.result[0].data.slice(26, 66);
            document.getElementById('authorOfThisBark').innerHTML = abridgedAddress(addressOfAuthorOfThisBark);

            // Fill in content of this Bark.
            document.getElementById('contentOfThisBark').innerHTML = hexToText(data.result[0].data.slice(322, 386));

            var addressWhichGotBarkedAt = "0x" + data.result[0].data.slice(90, 130);
            var barkWhichGotBarkedAtUrl = apiurl(addressWhichGotBarkedAt);

            // Now get data of the barked bark.
            fetch(barkWhichGotBarkedAtUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    var addressOfAuthorOfThatBark = "0x" + data.result[0].data.slice(26, 66);
                    document.getElementById('authorWhoGotBarkedAt').innerHTML = abridgedAddress(addressOfAuthorOfThatBark);
                    document.getElementById('contentWhichGotBarkedAt').innerHTML = hexToText(data.result[0].data.slice(322, 386));
                });
        });
}
