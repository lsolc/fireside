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
			urlRoot: '/events',
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

