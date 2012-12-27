/**
 * Application router.
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['backbone'], function (Backbone) {
  var Router = Backbone.Router.extend({
      routes: { '': 'home' }

    , initialize: function () {
      console.log('init router')
    }
  })

  return new Router()
})