/**
 * Container View. All views with nested content should inherit from this view
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['underscore', 'views/BaseView'], function (_, BaseView) {
  var ContainerView = BaseView.extend({
      initialize: function () {
      // Holds the embedded views
      this.content = []
    }
    /**
     * Renders all the content
     *
     * @return {ContainerView}
     */
    , render: function () {
      ContainerView.__super__.render.apply(this, arguments)

      _.each(this.content, function (item) {
        this.$el.append(item.render().el)
      }, this)

      return this
    }

    /**
     * Adds content to the view
     *
     * @param {Backbone.View|Array} item Backbone view, or array of views
     */
    , addContent: function (item) {
      this.content = this.content.concat(item)
    }
  })

  return ContainerView
})
