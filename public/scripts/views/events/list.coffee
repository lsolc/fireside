define [ 
	'text!templates/events/partial_detail.tmpl',		
	'text!templates/events/full_detail.tmpl',
	'text!templates/events/list.tmpl'
	], 
	(events_partial_detail_text, events_full_detail_text, events_list_text) ->		
		Backbone.View.extend
			el: '#events .current #list',
			initialize: () -> 
				Handlebars.registerPartial('partial_detail', events_partial_detail_text)
				Handlebars.registerPartial('full_detail', events_full_detail_text)
				this.template = Handlebars.compile(events_list_text)
				this.list = this.options.list	
			render: () ->
				many_items = this.list.length > 2
				html_string = this.template(events: this.list.toJSON(), many_items: many_items)
				$(this.el).html(html_string)
