require({
	baseUrl: '/scripts'
	},
	[
		"lib/jquery",		
		"lib/handlebars"
	
	], function() {
		require(['lib/backbone'], function() {
			require(['domReady!'], function(doc) {
				require(['cs!plugins/fireside'], function() {});
			});			
		});
});