var request = require('request');
var http = require('http');

var server = http.createServer(function (req, res) {
    const args = process.argv;    
    request('http://maps.assessor.lacounty.gov/Geocortex/Essentials/REST/sites/PAIS/SQLAddressSearch?f=json&SANUM=' + args[2], function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        body = JSON.parse(body)
        request('http://maps.assessor.lacounty.gov/Geocortex/Essentials/REST/sites/PAIS/SQLAINSearch?f=json&AIN=' + body.results.AddressResults[0].AIN, function name(error, response, body) {
            console.log("2nd body--------", body);
            res.end(body);
        })
    });
    /* res.writeHead(200);
    res.end('Hi everybody!'); */
});
server.listen(8080);