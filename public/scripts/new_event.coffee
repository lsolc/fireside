define [	
	'models/default_event',
	'collections/members',
	'views/events/new'
	], 
	(default_event, Members, NewEventView) ->
    
		#NewEvent = Backbone.Model
		#Member = Backbone.Model    
	
		members = new Members()    
		#new_event = new NewEvent()
		new_event_view = new NewEventView({model: default_event, members: members})    
		members.fetch({ success: () ->
			new_event_view.render()
			})
		