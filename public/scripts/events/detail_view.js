define([
	'hbs!template/events/event',
	'lib/date',	
	'lib/chosen.jquery.min', 
	'lib/jquery.slider.min'
	], 
	function(template) {
		return Backbone.View.extend({
			events: {
				'click .create_button': 'create_event',
				'click .jslider-pointer, #hours, #minutes' : 'show_end_date'			
			},				
			initialize: function() {
				_.bindAll(this);
				this.model.bind('change', this.render);	
				this.template = template;
			},
			render: function() {
				var that = this;
				$.when( App.members.deferred ).then( function() {
      
					var html_string = that.template({all_members: App.members.toJSON(), model: that.model.attributes});
					//console.log(this.model.attributes);
					$(that.el).html(html_string);	
					$("select#members").chosen();
					that.slider();
				});
				return this;
			},			
			create_event: function() {	
				var attr = {
					duration_minutes: $('#SliderSingle').slider('value'),
					title: $('#title').val(),
					description: $('#description').val(),
					members: $('#members').val()
				}	
				this.model.set(attr);					
				if (this.model.errors.length === 0) {
					//this.model.save();
					alert("OK");	

				}
				else {
					var errors_template = Handlebars.compile('{{#each errors}}<li>{{this}}</li>{{/each}}');
					$('#errors').html(errors_template(this.model));
				}	
			},
			slider: function() {				
				jQuery("#SliderSingle").slider({					
					from: 0,
					to: 24,
					limits: false,
					scale: [0, '|', '1', '|','2', '|','3', '|','4', '|','6','|', 8,'|', '16', '|',24],
					heterogeneity: ['50/4', '75/8'],
					step: 0.5,
					round: 1,
					format: {format: '##.0', locale: 'de'},
					dimension: '&nbsp;hours',
					skin: "round",
					callback: function(value) {console.log(value);}
				});
			},
			show_end_date: function() {
				var dur_min = 60 * $('#SliderSingle').slider('value');
				var from_h = $('#hours').val();
				var from_m = $('#minutes').val();
				this.model.set({duration_minutes: dur_min, from_hours: from_h, from_minutes: from_m}, {silent: true});				
				this.model.calculate_dates();		
				$('span#date_till').html(this.model.till.toString('ddd dd.MM.yyyy - HH:mm'));
			}
		});
	}
);
