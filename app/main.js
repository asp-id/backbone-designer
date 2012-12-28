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
    // Test for pushState support
    var pushState = false
    if (history.pushState) {
      pushState = true
      try {
        history.replaceState(null, null, 'test')
      } catch (e) {
        pushState = false
      }

      if (pushState) {
        history.replaceState(null, null, '/')
      }
    }

    if (pushState) {
      // Globally capture clicks. If they are internal and not in the pass
      // through list, route them through Backbone's navigate method.
      $(document).on('click', "a[href^='#']", function (e) {
        href = $(e.currentTarget).attr('href')

        // Allow shift+click for new tabs, etc.
        if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
          e.preventDefault()
        }

        // Remove leading slashes and hash bangs (backward compatibility)
        url = href.replace(/^\//, '').replace('\#', '')

        // Instruct Backbone to trigger routing events
        router.navigate(url, { trigger: true })

        return false
      })
    }

    // Start the routing and load the default route
    Backbone.history.start({ pushState: pushState })
  })
})
