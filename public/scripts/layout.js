define(
  [
    'hbs!template/layout'
  ], 
  function(layout_template) {
    return Backbone.Marionette.Layout.extend({
      template: layout_template,

      regions: {
        current_day: ".current_day > .current",
        detail_form: ".detail_form"
      },

      initialize: function(){
      }
    });

  }
);
