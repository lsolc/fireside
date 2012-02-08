define [ 
	'text!templates/events/partial_detail.tmpl',		
	'text!templates/events/full_detail.tmpl',
	'text!templates/events/list.tmpl'	
	], 
	(events_partial_detail_text, events_full_detail_text, events_list_text) ->
		window.EventItem = Backbone.Model.extend {}
			
		window.EventItemList = Backbone.Collection.extend
			url: 'events',
			model: EventItem
		
		window.EventItemListView = Backbone.View.extend
			el: '#events .current #list',
			initialize: () -> 
				Handlebars.registerPartial('partial_detail', events_partial_detail_text)
				Handlebars.registerPartial('full_detail', events_full_detail_text)
				this.template = Handlebars.compile(events_list_text)	
			render: () ->
				much_items = list.length > 2
				htmlString = this.template(events : list.toJSON(), much_items: much_items)
				$(this.el).html(htmlString)		
		
		window.EventItemView = Backbone.View.extend
			initialize: () ->
				this.partial_template = Handlebars.compile(events_partial_detail_text)		
				this.full_template = Handlebars.compile(events_full_detail_text)
			render: (state, data) -> 
				htmlString = this[state + '_template'](data)
				$(this.el).replaceWith(htmlString)
				
						
		
				
		$('.event_item > header').live 'click', () -> 
			item_el = $(this).closest('.event_item') 
			data = item_el.data()
			item = list.get(data.id)
			view = new EventItemView( el: item_el) 
			view.render(data.nextState, item.attributes)			
			 
		
		list = new EventItemList
		list_view = new EventItemListView()
		list.fetch({ success: () -> 
			list_view.render()
		})
		