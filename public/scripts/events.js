define([
	'collections/events', 
	'views/events/show', 
	'views/events/list'
	], 
	function(List, ShowView, ListView) {
		var list, list_view, show_view;
		list = new List;
		//show_view = new ShowView({el: '#list', list: list});
		show_view = new ShowView({el: '#index .current_day .current', list: list});
		
		list_view = new ListView({list: list});
		return list.fetch({
			success: function() {
				return list_view.render();
			}
		});
	}
);

