define(['events/model'], function(Event) {
	return Backbone.Collection.extend({
		url: 'events',
		model: Event
	});
});

