(function() {

  define(['text!templates/events/partial_detail.tmpl', 'text!templates/events/full_detail.tmpl', 'text!templates/events/list.tmpl'], function(events_partial_detail_text, events_full_detail_text, events_list_text) {
    var list, list_view;
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
        var htmlString, much_items;
        much_items = list.length > 2;
        htmlString = this.template({
          events: list.toJSON(),
          much_items: much_items
        });
        return $(this.el).html(htmlString);
      }
    });
    window.EventItemView = Backbone.View.extend({
      initialize: function() {
        this.partial_template = Handlebars.compile(events_partial_detail_text);
        return this.full_template = Handlebars.compile(events_full_detail_text);
      },
      render: function(state, data) {
        var htmlString;
        htmlString = this[state + '_template'](data);
        return $(this.el).replaceWith(htmlString);
      }
    });
    $('.event_item > header').live('click', function() {
      var data, item, item_el, view;
      item_el = $(this).closest('.event_item');
      data = item_el.data();
      item = list.get(data.id);
      view = new EventItemView({
        el: item_el
      });
      return view.render(data.nextState, item.attributes);
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
