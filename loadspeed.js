var page = require('webpage').create();
var system = require('system');
var t, address;

if (system.args.length === 1)
{
	console.log('Usage: loadspeed.js <URL>');
	phantom.exit();
}

t = Date.now();
address = system.args[1]; // The URL

page.open(address, function(status)
{
	if (status !== 'success')
	{
		console.log('FAIL! To load ' + address);
	}
	else
	{
		t = Date.now() - t;
		console.log('Loading ' + address);
		console.log('Loading time ' + t + ' msec');
	}
	phantom.exit();
});
