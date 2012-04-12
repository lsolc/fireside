define([
	'models/event', 
	'collections/members', 
	'views/events/event'
	],
	function(Event, Members, EventView) {	
		var members = new Members();
		var new_event_view = new EventView({el: '#index .content', model: new Event(), members: members});	
		return members.fetch({
			success: function() {
				return new_event_view.render();
			}
		}
	);
});
