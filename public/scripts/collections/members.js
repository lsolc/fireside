(function() {

  define([], function() {
    return Backbone.Collection.extend({
      url: 'members'
    });
  });

  /*
  define ['models/member'], (Member) ->	
  	Backbone.Collection.extend
  		url: 'members',
  		model: Member
  */

}).call(this);
