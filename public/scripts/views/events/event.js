define([
	'text!templates/events/event.tmpl'
	], 
	function(new_event_text, Members) {
		return Backbone.View.extend({
			//el: '#new .current',
			events: {
				'click .create_button': 'create_event',
				'click #hours, #minutes' : 'do_something',				
			},				
			initialize: function() {
				_.bindAll(this);
				this.model.bind('change', this.render);				
				Handlebars.registerHelper('show_hours', function(selected) {
					var i, sel, res = "";
					for (i=0; i<24; i++) {
						if (selected === i) {
							sel = 'selected="selected"';
						}
						else {
							sel = "";
						}						
						res += '<option ' + sel + ' value="' + i + '">' + i + '</option>\n';
					}
					return new Handlebars.SafeString(res);				
				});					
				Handlebars.registerHelper('show_minutes', function(selected) {
					var i, sel, res = "";				
					for (i=0; i<60; i += 5) {						
						if (selected === i) {
							sel = 'selected="selected"';
						}
						else {
							sel = "";
						}
						res += '<option ' + sel + ' value="' + i + '">' + i + '</option>\n';						
					}		
					return new Handlebars.SafeString(res);	
				});		
				Handlebars.registerHelper('should_be_selected', function(current_member, selected_members) {
					if (!selected_members) {
						selected_members = [];
					}						
					if (_.include(selected_members, current_member.id)) {
						return "selected";
					} 
					return "";					
				});							
				this.template = Handlebars.compile(new_event_text);
				this.members = this.options.members;
			},
			render: function() {
				var html_string = this.template({all_members: this.members.toJSON(), model: this.model.attributes});
				//console.log(this.model.attributes);
				$(this.el).html(html_string);	
				$("select#members").chosen();
				this.slider();
				return this;
			},			
			create_event: function() {	
				var attr = {
					time_from: $('#time_from').val(),
					duration: $('#time_duration').val(),
					time_to: $('#time_to').val(),
					title: $('#title').val(),
					description: $('#description').val(),
					member: $('#members').val()
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
					scale: [0, '|', 4, '|', '8', '|', 16, '|', 24],
					heterogeneity: ['50/8', '75/16'],
					step: 0.5,
					round: 1,
					format: {format: '##.0', locale: 'de'},
					dimension: '&nbsp;hours',
					skin: "round",
					callback: function() {}
				});
			},
			do_something: function() {	
				//this.model.calculate_time();				
				console.log("do_something");
			}
		});
	}
);