/**
 * Panel View. Renders the panel
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['views/ContainerView'], function (ContainerView) {
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
      options = options || {}

      this.position = options.position || { top: 0, left: 0 }
      this.width = options.width || '100%'
      this.height = options.height || '100%'
      this.background = options.background || null
    }
  })

  return PanelView
})
