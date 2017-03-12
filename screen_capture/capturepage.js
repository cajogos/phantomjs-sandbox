var page = require('webpage').create();
var system = require('system');

if (system.args.length !== 2)
{
	console.log('Usage: capturepage.js <URL>');
	phantom.exit();
}

var address = system.args[1];

// Working out the date for the file name
var d = new Date(Date.now());
var month = d.getUTCMonth() + 1;
month = (month < 10) ? '0' + month : month;
var day = d.getUTCDate();
day = (day < 10) ? '0' + day : day;
var hours = d.getUTCHours();
hours = (hours < 10) ? '0' + hours : hours;
var minutes = d.getUTCMinutes();
minutes = (minutes < 10) ? '0' + minutes : minutes;
var seconds = d.getUTCSeconds();
seconds = (seconds < 10) ? '0' + seconds : seconds;

var dateString = '' + d.getUTCFullYear() + month + day + '-' + hours + minutes + seconds;

// Setting viewport size to 1080p screens
page.viewportSize = { width: 1920, height: 1080 };

page.open(address, function(status)
{
	console.log('Status: ' + status);

	if (status === 'success')
	{
		// Generate a suitable screenshot name
		var screenshotName = address.replace('http://', 'http_');
		screenshotName = screenshotName.replace('https://', 'https_');
		screenshotName = screenshotName.replace('.', '_');
		screenshotName = screenshotName.replace(/\//g, '_');
		screenshotName = 'screenshots/ ' + screenshotName + '_' + dateString + '.png';

		var renderOptions = { format: 'PNG', quality: 100 };
		page.render(screenshotName, renderOptions);
	}
	else
	{
		console.log('Failed to render screenshot for: ' + address);
	}

	phantom.exit();
});
