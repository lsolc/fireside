define [
	'text!templates/events/new_event.tmpl'
	], (new_event_text) -> 
	NewEvent = Backbone.Model.extend
		initialize: () ->

		
	NewEventView = Backbone.View.extend
		el: '#new .current',
		initialize: () ->		
			this.template = Handlebars.compile(new_event_text)
			
		render: () ->			
			html_string = this.template({display_name: new_event.get('display_name')})
			$(this.el).html(html_string)
			$("select").chosen()
			#$("select").chosen().change(() -> alert('fired by chosen'))	
			


	new_event = new NewEvent({display_name: "Nuria"})
	
	new_event_view = new NewEventView()	
	new_event_view.render()
	
	
	
	
	
	
	
	
	###
	members = $.getJSON "/members", (result) ->
			options = $("#options")
			$.each result, () -> 
				options.append($("<option />")).val(this.id).text(this.display_name)###
	
			
	
	
	

	
	
	
	
	
	
	
	


	
	