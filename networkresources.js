var page = require('webpage').create();

var url = 'https://carlos.fyi';

page.onResourceRequested = function(request)
{
	console.log('Request: ' + JSON.stringify(request, undefined, 4));
};

page.onResourceReceived = function(response)
{
	console.log('Receive: ' + JSON.stringify(response, undefined, 4));
};

page.open(url);

// phantom.exit(); - Using phantom.exit() will permaturely stop the requesting and retrieval of the resources
