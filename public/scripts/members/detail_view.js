define ([
	'hbs!template/members/member_form',
	], 
	function(template) {
		return Backbone.View.extend({
			events: {
				'click .create_button' : 'create_member',
			},
			initialize: function() {
				_.bindAll(this);
				this.model.bind('change', this.render);	
				this.template = template;				
			},
			render: function() {
				
				var html_string = this.template({model: this.model.attributes});
				$(this.el).html(html_string);
			},
			create_member: function() {
				var attr = {
					household: $('#household').val(),
					name: $('#name').val()
				}
				this.model.set(attr);
				if (this.model.errors.length === 0) {
					//this.model.save();
					alert('0K');
				}
				else {
					var errors_template = Handlebars.compile('{{#each errors}}<li>{{this}}</li>{{/each}}');
					$('#errors').html(errors_template(this.model));
				}
			}
		});
	}
);