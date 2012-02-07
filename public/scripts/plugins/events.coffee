define [ 
		'text!templates/events/partial_detail.tmpl'
	], 
	(events_full_detail_text) ->
		window.EventList = Backbone.Collection.extend
			url: 'events'
		window.EventView = Backbone.View.extend
			el: '#events .current #list',
			initialize: () ->
				this.template = Handlebars.compile(events_full_detail_text)
			render: () ->
				htmlString = this.template(events : list.toJSON())
				$(this.el).html(htmlString)
				###
				$('div#button_header').click ()	->
									header = $(this)
									detail = header.parent().find('.content')	
									detail.toggleClass('hidden')
								this	###
				

		list = new EventList
		view = new EventView
		list.fetch ({success: () -> view.render()})