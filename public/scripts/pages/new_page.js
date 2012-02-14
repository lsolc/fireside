require({
	baseUrl: '/scripts'
},
[], function() {
	require(['domReady!'], function(doc) {
		require([], function() {});
	});			
});
