require({
	baseUrl: '/scripts'
},
[

	
], function() {
	require(['domReady!'], function(doc) {
		require(['plugins/events'], function() {});
	});			
});
