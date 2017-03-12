var page = require('webpage').create();

page.open('https://carlos.fyi', function(status)
{
	console.log('Status: ' + status);
	if (status === 'success')
	{
		page.render('page.png');
	}
	phantom.exit();
});
