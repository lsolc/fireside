require({
	baseUrl: '/scripts'},
	[
	'lib/date',	
	
	'lib/chosen.jquery.min', 
	'lib/jquery.slider.min'
	], 
	function() {
		require(['lib/domReady!'], function(doc) {
			require(['events'], function() {
			});
		});			
	}
);



/*
require({
	baseUrl: '/scripts'},
	[
	'lib/date',	
	], 
	function() {
		require(['lib/domReady!'], function(doc) {
			require(['events'], function() {
			});
		});			
	}
);
*/


