require({
	baseUrl: '/scripts'
},
[

	
], function() {
	require(['domReady!'], function(doc) {
		require(['cs!plugins/events'], function() {});
	});			
});
