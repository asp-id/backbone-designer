/**
 * Application main file.
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

require.config({
    paths: {
      jquery: 'vendor/jquery/jquery-1.8.3'
    , underscore: 'vendor/underscore/underscore'
    , backbone: 'vendor/backbone/backbone'
    , text: 'vendor/require/text'
  }
  , shim: {
      'underscore': { exports: '_' }
    , 'backbone': {
        deps: ['underscore', 'jquery']
      , exports: 'Backbone'
    }
  }
})

require(['jquery', 'backbone', 'router'], function ($, Backbone, router) {
  $(function () {
    // Start the routing and load the default route
    Backbone.history.start()
  })
})
