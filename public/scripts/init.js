define([], function() {
  Backbone.Marionette.ItemView.prototype.render = function(){
    if (this.beforeRender) { 
      this.beforeRender();
    }
    var data = this.serializeData();
    this.trigger("item:before:render", this);
    var html = this.template(data);
    this.$el.html(html);
    if (this.onRender) {
      this.onRender();
    }
    this.trigger("item:rendered", this);
    this.trigger("render", this);
    return this;
  };


});
