/**
 * Base View. All views should inherit from this view
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['backbone'], function (Backbone) {
  var BaseView = Backbone.View.extend({
      render: function () {
      if (this.template) {
        this.$el.html(this.template)
      }

      return this
    }
  })

  return BaseView
})
