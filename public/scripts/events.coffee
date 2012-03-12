define [ 
	'collections/events',
	'views/events/show',
	'views/events/list'	
	], 
	(List, ShowView, ListView) ->				
		list = new List
		show_view = new ShowView({el: '#list', list: list})			
		list_view = new ListView({ list: list })
		
		
		
		list.fetch({ success: () -> 
			list_view.render()
		})
		