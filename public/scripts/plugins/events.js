(function() {

  define(['text!templates/events/partial_detail.tmpl', 'text!templates/events/full_detail.tmpl', 'text!templates/events/list.tmpl'], function(events_partial_detail_text, events_full_detail_text, events_list_text) {
    var item_view, list, list_view;
    window.EventItem = Backbone.Model.extend({});
    window.EventItemList = Backbone.Collection.extend({
      url: 'events',
      model: EventItem
    });
    window.EventItemListView = Backbone.View.extend({
      el: '#events .current #list',
      initialize: function() {
        Handlebars.registerPartial('partial_detail', events_partial_detail_text);
        Handlebars.registerPartial('full_detail', events_full_detail_text);
        return this.template = Handlebars.compile(events_list_text);
      },
      render: function() {
        var html_string, many_items;
        many_items = list.length > 2;
        html_string = this.template({
          events: list.toJSON(),
          many_items: many_items
        });
        return $(this.el).html(html_string);
      }
    });
    window.EventItemView = Backbone.View.extend({
      events: {
        'click .event_item > header': 'toggle_template'
      },
      initialize: function() {
        this.partial_template = Handlebars.compile(events_partial_detail_text);
        return this.full_template = Handlebars.compile(events_full_detail_text);
      },
      render: function(model, state) {
        var html_string;
        html_string = this[state + '_template'](model.attributes);
        return $(this.el).replaceWith(html_string);
      },
      toggle_template: function(e) {
        var data, item_el, model;
        item_el = $(e.currentTarget).closest('.event_item');
        data = item_el.data();
        model = list.get(data.id);
        this.el = item_el;
        return this.render(model, data.nextState);
      }
    });
    item_view = new EventItemView({
      el: '#list'
    });
    list = new EventItemList;
    list_view = new EventItemListView();
    return list.fetch({
      success: function() {
        return list_view.render();
      }
    });
  });

}).call(this);
