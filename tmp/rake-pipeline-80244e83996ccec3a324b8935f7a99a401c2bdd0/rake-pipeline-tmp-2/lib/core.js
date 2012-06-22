
loader.register('app/core', function(require) {
require('jquery');
require('ember');
require('ember-data');
require('app/ext');
require('app/templates');

Ember.ENV.CP_DEFAULT_CACHEABLE = true;
Ember.ENV.VIEW_PRESERVES_CONTEXT = true;

App = Ember.Application.create({
  VERSION: '0.1'
});


});
