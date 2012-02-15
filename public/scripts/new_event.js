(function() {

  define([], function() {
    var NewEvent, new_event;
    NewEvent = Backbone.Model.extend({
      title: 'title',
      description: '',
      initialize: function() {
        return {};
      }
    });
    new_event = new NewEvent({
      title: "Zajit do servisu",
      description: "Some text........"
    });
    $("select").chosen();
    return $("select").chosen().change(function() {
      return alert('fired by chosen');
    });
  });

}).call(this);
