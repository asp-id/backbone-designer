/**
 * Container View. All views with nested content should inherit from this view
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['jquery', 'underscore', 'views/BaseView'], function ($, _, BaseView) {
  var ContainerView = BaseView.extend({
      initialize: function (options) {
      options = options || {}

      // Holds the embedded views
      this.content = []

      // set container element for the content
      this.container = options.container || null
    }
    /**
     * Renders all the content
     *
     * @return {ContainerView}
     */
    , render: function () {
      ContainerView.__super__.render.apply(this, arguments)

      // set DOM element for the container
      var container = this.container ? $(this.container, this.el) : this.$el

      _.each(this.content, function (item) {
        container.append(item.render().el)
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
