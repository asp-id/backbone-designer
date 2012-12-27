/**
 * Application router.
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['backbone'], function (Backbone) {
  var Router = Backbone.Router.extend({
      routes: {
          '': 'designer'
        , 'editor': 'editor'
        , 'preview': 'preview'
      }

    , initialize: function () {
      console.log('init router')
    }

    , designer: function () {
      console.log('designer action')
    }

    , editor: function () {
      console.log('editor action')
    }

    , preview: function () {
      console.log('preview action')
    }
  })

  return new Router()
})