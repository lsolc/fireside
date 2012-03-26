define([
	'models/event',
	'collections/members',
	'collections/events',
	'views/events/event'
	], 
	function(Event, Members, Events, EventView) {
		var events = new Events();
		var members = new Members();
		var members_loaded, events_loaded;
		var model;
		var show_model = function() {		
			if (!members_loaded || !events_loaded) {
				return;
			}
			var edit_event_view = new EventView({el: '#edit .current', model: model, members: members, events: events});
			edit_event_view.render();
		};
		members.fetch({ 
			success: function() {
				members_loaded = true;
				show_model();
			} 
		});
		events.fetch({
			success: function() {	
				events_loaded = true;			
				model = events.models[0];
				show_model();
			}
		}
	)			
});

