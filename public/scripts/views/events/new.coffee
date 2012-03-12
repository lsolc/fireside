define ['text!templates/events/new_event.tmpl', 'collections/members'], (new_event_text, Members) ->
	Backbone.View.extend
		el: '#new .current',
		id: '#SliderSingle'
		events: {
			'click .from select' : 'date_field_changed',
			'click #SliderSingle': 'date_field_changed'
		}
		initialize: () ->         
			_.bindAll(this)
			#this.model.bind('change:id', this.slider_changed)              
			this.template = Handlebars.compile(new_event_text) 
			this.members = this.options.members	                    
		render: () ->                   
			html_string = this.template(members: this.members.toJSON(), event: this.default_event )
			$(this.el).html(html_string)
			this.time_from()
			this.current_date()
			$("select#options").chosen()
			$("#hours").val(this.model.hour_from);
			this.slider()              
			#$("select").chosen().change(() -> alert('fired by chosen'))
		time_from: () ->
			options = ""
			for i in [1..23]
				if i < 10 then i = "0" + i         
				options += "<option value=#{i}>#{i}</option>\n"
				$('#hours').html(options)
				options_m = ""
			for i in ["00", 15, 30, 45]
				options_m += "<option value=#{i}>#{i}</option>\n"
				$('#minutes').html(options_m)
		current_date: () ->
			date = new Date()
			date.getHours()              
		slider: () -> jQuery("#SliderSingle").slider({ from: 5, to: 50, step: 2.5, round: 1, format: { format: '##.0', locale: 'de' }, dimension: '&nbsp;€', skin: "round" });
		description_changed: () ->
			alert("description: " + this.get('description'))   
		hours_from: () ->
			hours = $('select#hours :selected').val()                        
		date_field_changed: (e) ->              
			hours_from = this.hours_from()
			console.log(hours_from)
			###
			model.minutes_from = this.minutes_from
			model.duration_secs = this.duration
			model.recalcute_date_to
			###
	