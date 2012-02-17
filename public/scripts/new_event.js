(function() {

  define(['text!templates/events/new_event.tmpl'], function(new_event_text) {
    var NewEvent, NewEventView, new_event, new_event_view;
    NewEvent = Backbone.Model.extend({
      initialize: function() {}
    });
    NewEventView = Backbone.View.extend({
      el: '#new .current',
      initialize: function() {
        return this.template = Handlebars.compile(new_event_text);
      },
      render: function() {
        var html_string;
        html_string = this.template({
          display_name: new_event.get('display_name')
        });
        $(this.el).html(html_string);
        return $("select").chosen();
      }
    });
    new_event = new NewEvent({
      display_name: "Nuria"
    });
    new_event_view = new NewEventView();
    return new_event_view.render();
    /*
    	members = $.getJSON "/members", (result) ->
    			options = $("#options")
    			$.each result, () -> 
    				options.append($("<option />")).val(this.id).text(this.display_name)
    */
  });

}).call(this);
