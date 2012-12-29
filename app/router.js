/**
 * Application router.
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define([
  'backbone',
  'views/DesignerView'
], function (Backbone, DesignerView) {
  var Router = Backbone.Router.extend({
    // DOM element to contain screen views
      container: '#main-container'

    , routes: {
        '': 'designer'
      , 'editor': 'editor'
      , 'preview': 'preview'
      , '*route': 'notfound'
    }

    /**
     * Bootstraps the router
     */
    , initialize: function () {
      this.designerScreen = new DesignerView({ id: 'designer-screen' })
    }

    , designer: function () {
      $(this.container).html(this.designerScreen.render().el)
    }

    , editor: function () {
      console.log('editor action')
    }

    , preview: function () {
      console.log('preview action')
    }

    , notfound: function (route) {
      console.log('route "' + route + '" not found')
    }
  })

  return new Router()
})