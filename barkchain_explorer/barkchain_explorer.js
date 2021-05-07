function onload() {
  var barkAddress = '0xB9E8550342eE0217E670eC2f1228F9fC0Ac9cbF5';
  var etherscanAPIKey = '2XE9BWCRVY4IVZUPATS95YI5UXMRQCEWS9';
  var url = 'https://api-ropsten.etherscan.io/api?module=logs&action=getLogs&fromBlock=1&toBlock=latest&address='
    + barkAddress + '&apikey=' + etherscanAPIKey;
  
  // Convert Hex to String, used on Bark contents.
  function hex2a(hexx) {
    var hex = hexx.toString();
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Fill in author address of this Bark. "data.result[0]" refers to the Bark() event log.
      document.getElementById('authorOfThisBark').innerHTML = "0x" + data.result[0].data.slice(26, 66);
      
      // Fill in content of this Bark.
      document.getElementById('contentOfThisBark').innerHTML = hex2a(data.result[0].data.slice(322, 386));
    
      var addressWhichGotBarkedAt = "0x" + data.result[0].data.slice(90, 130);
      var barkWhichGotBarkedAtUrl = 'https://api-ropsten.etherscan.io/api?module=logs&action=getLogs&fromBlock=1&toBlock=latest&address='
        + addressWhichGotBarkedAt + '&apikey=' + etherscanAPIKey;
      
        fetch(barkWhichGotBarkedAtUrl)
          .then(function(response2) {
            return response2.json();
          })
          .then(function(data2) {
            document.getElementById('authorWhoGotBarkedAt').innerHTML = "0x" + data2.result[0].data.slice(26, 66);
            document.getElementById('contentWhichGotBarkedAt').innerHTML = hex2a(data2.result[0].data.slice(322, 386));
          });
    });
}
