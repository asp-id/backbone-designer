/**
 * PanelSectionView. Renders the panel section
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2013
 */

define([
    'underscore'
  , 'views/ContainerView'
  , 'text!templates/panelSectionView.html'
], function (_, ContainerView, template) {
  var PanelSectionView = ContainerView.extend({
      className: 'panel-section'

    , initialize: function (options) {
      PanelSectionView.__super__.initialize.apply(this, arguments)
      options = options || {}

      this.title = options.title || 'default title'
      this.height = options.height || '100%'
      this.template = template
      this.data = {
        title: this.title
      }
      this.container = '.panel-section-content'
    }

    , render: function () {
      PanelSectionView.__super__.render.apply(this, arguments)

      this.$el.css('height', this.height)

      return this
    }
  })

  return PanelSectionView
})
