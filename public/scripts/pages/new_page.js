require({
	baseUrl: '/scripts'},
	[
	'chosen.jquery.min', 
	'lib/jquery.slider.min'
	], 
	function() {
		require(['domReady!'], function(doc) {
			require(['new_event'], function() {
				
			});
		});
	}
);
