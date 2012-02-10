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
				many_items = list.length > 2
				html_string = this.template(events: list.toJSON(), many_items: many_items)
				$(this.el).html(html_string)
				
		window.EventItemView = Backbone.View.extend 
			events: {'click .event_item > header' : 'toggle_template'}
			initialize: () ->				
				this.partial_template = Handlebars.compile(events_partial_detail_text)
				this.full_template = Handlebars.compile(events_full_detail_text)			
			render: (model, state) ->
				html_string = this[state + '_template'](model.attributes)
				$(this.el).replaceWith(html_string) 	
			toggle_template:  (e) ->		
				item_el = $(e.currentTarget).closest('.event_item')
				data = item_el.data()
				model = list.get(data.id)
				this.el = item_el
				this.render(model, data.nextState)	
			
		item_view = new EventItemView({el: '#list'})	
				
		list = new EventItemList
		list_view = new EventItemListView()
		list.fetch({ success: () -> 
			list_view.render()
		})
		