/**
 * Application router.
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define([
    'jquery'
  , 'backbone'
  , 'views/NavigationView'
  , 'views/DesignerView'
  , 'views/EditorView'
  , 'views/PreviewView'
], function ($
           , Backbone
           , NavigationView
           , DesignerView
           , EditorView
           , PreviewView) {
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
      // render navigation menu
      this.navigationMenu = new NavigationView({ router: this })
      $('body').prepend(this.navigationMenu .render().el)

      // create screen views
      this.designerScreen = new DesignerView({ id: 'designer-screen' })
      this.editorScreen = new EditorView({ id: 'editor-screen' })
      this.previewScreen = new PreviewView({ id: 'preview-screen' })
    }

    , designer: function () {
      $(this.container).html(this.designerScreen.render().el)
    }

    , editor: function () {
      $(this.container).html(this.editorScreen.render().el)
    }

    , preview: function () {
      $(this.container).html(this.previewScreen.render().el)
    }

    , notfound: function (route) {
      console.log('route "' + route + '" not found')
    }
  })

  return new Router()
})