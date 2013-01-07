/**
 * Panel View. Renders the panel
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['underscore', 'views/ContainerView'], function (_, ContainerView) {
  var PanelView = ContainerView.extend({
      className: 'panel'

    /**
     * Panel view initializer
     *
     * @param {Object} options Panel view settings
     * @param {Object} options.position Panel position
     * @param {Number|String} options.position.top
     * @param {Number|String} options.position.bottom
     * @param {Number|String} options.position.left
     * @param {Number|String} options.position.right
     * @param {Number|String} options.width
     * @param {Number|String} options.height
     * @param {String} options.background
     */
    , initialize: function (options) {
      PanelView.__super__.initialize.apply(this, arguments)
      options = options || {}

      this.position = options.position || { top: 0, left: 0 }
      this.width = options.width || 'auto'
      this.height = options.height || 'auto'
      this.background = options.background || null
    }

    , render: function () {
      this.$el.css(_.extend({
          width: this.width
        , height: this.height
        , 'background-image': this.background
        , position: 'absolute' // position should be absolute to work without css file
      }, this.position))

      return PanelView.__super__.render.apply(this, arguments)
    }
  })

  return PanelView
})
