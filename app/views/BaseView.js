/**
 * Base View. All views should inherit from this view
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['backbone'], function (Backbone) {
  var BaseView = Backbone.View.extend({
      render: function () {
      if (this.template) {
        this.data = this.data || {}
        this.$el.html(_.template(this.template, this.data))
      }

      return this
    }
  })

  return BaseView
})
