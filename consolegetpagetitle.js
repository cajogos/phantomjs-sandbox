var page = require('webpage').create();
var url = 'https://carlos.fyi';

page.onConsoleMessage = function(msg)
{
	console.log('Page title is: ' + msg);
};

page.open(url, function(status)
{
	page.evaluate(function()
	{
		console.log(document.title);
	});
	phantom.exit();
});
