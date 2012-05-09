define([
	], 
	function() {
		return Backbone.Model.extend({
			defaults: {},
			urlRoot: '/members',
			errors: [],
			initialize: function() {
				this.bind('change', function() {
					console.log('change event: values for member model has changed');
					
				});
				//this.bind('error', function(model, error) {});
			},
			add_error: function(error) {
				this.errors.push(error);
				console.log(this.errors);
					
			},
			validate: function(attr) {
				this.errors = [];
				this.household_validate(attr);
				this.name_validate(attr);
				if (this.errors.length > 0) {
					return this.errors;
				}
			},
			household_validate: function(attr) {
				if (attr.household === "") {
					this.add_error('Household cannot be blank!');
				}
			},
			name_validate: function(attr) {
				if (attr.name === "") {
					this.add_error('Name cannot be blank!');
				}
			}
		});
	}
);

