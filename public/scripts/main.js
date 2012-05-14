// Entry point to the whole app
require(
	{
		baseUrl: '/scripts'
	},
	[
	'members/em_app', 
	'members/em_controller',
	
	
	'app',
	'init',
	'lib/domReady!'
	], 
	function() {
		App.start();
	}
);






