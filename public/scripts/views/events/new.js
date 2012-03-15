define([
	'text!templates/events/new_event.tmpl', 
	'collections/members'
	], 
	function(new_event_text, Members) {
		return Backbone.View.extend({
			el: '#new .current',
			//id: '#SliderSingle',
			events: {
				/*
				'change #title, #description': 'title_description_changed',
								'change select#options': 'members_changed',
								'click .from select': 'date_field_changed',
								'click #SliderSingle': 'date_field_changed',*/
				
				'click .create_button': 'create_event'
			},			
			initialize: function() {
				_.bindAll(this);
				this.model.bind('change', this.render);
				this.template = Handlebars.compile(new_event_text);
				this.members = this.options.members;
			},
			create_event: function() {				
				var attr = {
					time_from: $('#time_from').val(),
					duration: $('#time_duration').val(),
					time_to: $('#time_to').val(),
					title: $('#title').val(),
					description: $('#description').val(),
					memember: $('#members').val()
				}				
				this.model.set(attr);
				//this.model.set(attr, {silent: true});				
				if (this.model.errors.length === 0) {
					//this.model.save();
					alert("OK");	
				}
				else {
					var errors_template = Handlebars.compile('{{#each errors}}<li>{{this}}</li>{{/each}}');
					$('#errors').html(errors_template(this.model));
				}
				console.log(this.model.toJSON());							
			},
			render: function() {
				var html_string;
				html_string = this.template({
					members: this.members.toJSON(),
					//event: this.default_event
				});
				$(this.el).html(html_string);
				//this.time_from();				
				$("select#members").chosen();
				$("#hours").val(this.model.hour_from);
				this.slider();
				return this;
			},
			time_from: function() {			
			},				
			slider: function() {
				return jQuery("#SliderSingle").slider({
					from: 5,
					to: 50,
					step: 2.5,
					round: 1,
					format: {
						format: '##.0',
						locale: 'de'
					},
					dimension: '&nbsp;€',
					skin: "round"
				});
			},
			title_description_changed: function(e) {
				var field = $(e.currentTarget);
				var data = {};
				data[field.attr('id')] = field.val();
				this.model.set(data, {silent: true});
				//this.model.set(data);
				console.log('title or description has changed');
				console.log(this.model.toJSON());
			},
			members_changed: function() {
				console.log('members has changed');				
			},			
			hours_from: function() {
				var hours;
				return hours = $('select#hours :selected').val();
			},
			date_field_changed: function(e) {
				var hours_from;
				hours_from = this.hours_from();
				console.log(hours_from);				
				/*
				model.minutes_from = this.minutes_from
				model.duration_secs = this.duration
				model.recalcute_date_to
				*/			
			}
		});
	}
);

/*

selection_changed: function(e) {
	var field = $(e.currentTarget);
	var value = $('option:selected', field).val();
	var data = {};
	data[field.attr('id')] = field.val();
	this.model.set(data, {silent: true});	
	console.log(this.model.toJSON());								
}*/


