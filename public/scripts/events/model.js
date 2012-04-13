define(
  [
    'lib/date'
  ], 
  function() {
	return Backbone.Model.extend({
		defaults: {
			title: 'New event', 
			description: 'Some description text...', 
			from_date: Date.now().toString('yyyy-MM-dd'), 
			from_hours: Date.now().getHours(), 
			from_minutes: 0
		},
		errors: [],
		from: null,
		till: null,
		initialize: function() {
			this.bind('change', function() {
				console.log('change event: values for this model have changed');
			});				
			this.bind('error', function(model, error) {				
			});	
			this.calculate_dates();
		},
		add_error: function(error) {
			this.errors.push(error);
			console.log(this.errors);
		},		
		validate: function(attr) {
			this.errors = [];
			this.duration_validate(attr);
			this.title_validate(attr);
			this.description_validate(attr);
			this.members_validate(attr);
			if (this.errors.length > 0) {
				return this.errors;
			}				
		},
		duration_validate: function(attr) {
			if (attr.duration_minutes === '0') {
				this.add_error('Duration has not been set!');
			}
		},
		title_validate: function(attr) {
			if (attr.title === '') {
				this.add_error('Title is requiered field!');	
			}		
		}, 
		description_validate: function(attr) {
			if (attr.description === '') {
				this.add_error('Description is required field!');
			}
		},
		members_validate: function(attr) {
			if (attr.members === null) {
				this.add_error('No member selected!');
			}		
		},
		update_from_date: function() {
			this.from = Date.parse(this.attributes.from_date).addHours(this.attributes.from_hours).addMinutes(this.attributes.from_minutes);
		},
		calculate_dates: function() {
			this.update_from_date();
			console.log('from: ' + this.from);			
			this.till = this.from.addMinutes(this.attributes.duration_minutes);
			console.log('till: ' + this.till);
		}	
	});
});

