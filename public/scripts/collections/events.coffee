define ['models/event'], (Event) ->	
	Backbone.Collection.extend
		url: 'events',
		model: Event


