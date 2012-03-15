define([], function() {
	return Backbone.Model.extend({
		defaults: {},
		errors: [],
		from: new Date(),
		initialize: function() {
			this.bind('change', function() {
				console.log('change event: values for this model have changed');
			});				
			this.bind('error', function(model, error) {				
			});		
		},
		add_error: function(error) {
			this.errors.push(error);
			console.log(this.errors);
		},		
		validate: function(attr) {
			this.errors = [];
			this.time_from_validate(attr);
			this.duration_validate(attr);
			this.title_validate(attr);
			this.description_validate(attr);
			this.members_validate(attr);
			if (this.errors.length > 0) {
				return this.errors;
			}				
		},
		time_from_validate: function(attr) {
			if (attr.time_from === '') {
				this.add_error('Time from has not been set!');
			}
		},
		duration_validate: function(attr) {
			if (attr.duration === '') {
				this.add_error('Duration has not been set!');
			}
		},
		title_validate: function(attr) {
			if (attr.title === "") {
				this.add_error('Title is requiered field!');	
			}		
		}, 
		description_validate: function(attr) {
			if (attr.description === '') {
				this.add_error('Description is required field!');
			}
		},
		members_validate: function(attr) {
			if (attr.memember === null) {
				this.add_error('No member selected!');
			}		
		}		
	});
});

