require({
	baseUrl: '/scripts'},
	[
	'lib/date',
	'lib/chosen.jquery.min', 
	'lib/jquery.slider.min'
	], 
	function() {
		require(['lib/domReady!'], function(doc) {
			require(['new_event'], function() {
				
			});
		});
	}
);