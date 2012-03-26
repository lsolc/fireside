require({
	baseUrl: '/scripts'},
	[
	'lib/date',
	'lib/chosen.jquery.min', 
	'lib/jquery.slider.min'
	], 
	function() {
		require(['lib/domReady!'], function(doc) {
			require(['edit_event'], function() {				
			});
		});
	}
);
