define(['models/default_event', 'collections/members', 'views/events/new'], 
function(default_event, Members, NewEventView) {
	var members, new_event_view;
	members = new Members();	
	new_event_view = new NewEventView({model: default_event, members: members});	
	return members.fetch({
		success: function() {
			return new_event_view.render();
		}
	});
});

