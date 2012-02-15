require({
	baseUrl: '/scripts'
},['chosen.jquery.min'], function() {
	require(['domReady!'], function(doc) {
		require(['new_event'], function() {});
	});			
});
