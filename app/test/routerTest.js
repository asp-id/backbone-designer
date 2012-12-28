/**
 * Router test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

/**
 * Helper function that rebinds routes and
 * returns a spy for given route.
 */
function spyOnAction(router, action) {
  var spy = spyOn(router, action)

  // Backbone stores route callbacks in Backbone.history.handlers
  // so we have to clear them and rebind routes every time we want
  // to spy on route handler.
  Backbone.history.handlers = []
  router._bindRoutes()

  return spy
}

describe('Router', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['router'], function (router) {
      self.router = router
      Backbone.history.start({ silent: true })

      // change hash to be sure that hashChange is
      // triggered when other navigate calls are made
      self.router.navigate('foo')

      done = true
    })

    waitsFor(function () {
      return done
    })
  })

  afterEach(function () {
    Backbone.history.stop()
  })

  it('should have "routes" hash', function () {
    expect(this.router.routes).toBeDefined()
  })

  it('should have "initialize" method', function () {
    expect(typeof this.router.initialize).toBe('function')
  })

  describe('"" (root) route', function () {
    it('should call "designer" action', function () {
      var spy = spyOnAction(this.router, 'designer')
      this.router.navigate('', { trigger: true })
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('"editor" route', function () {
    it('should call "editor" action', function () {
      var spy = spyOnAction(this.router, 'editor')
      this.router.navigate('editor', { trigger: true })
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('"preview" route', function () {
    it('should call "preview" action', function () {
      var spy = spyOnAction(this.router, 'preview')
      this.router.navigate('preview', { trigger: true })
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('"notfound" action', function () {
    it('should be called for any undefined route', function () {
      var spy = spyOnAction(this.router, 'notfound')
      this.router.navigate('nonexistentroute', { trigger: true })
      expect(spy.calls.length).toEqual(1)
      this.router.navigate('nonexistentroute2', { trigger: true })
      expect(spy.calls.length).toEqual(2)
    })

    it('should not be called for defined routes', function () {
      var spy = spyOnAction(this.router, 'notfound')
      this.router.navigate('', { trigger: true })
      expect(spy.calls.length).toEqual(0)
    })
  })
})
