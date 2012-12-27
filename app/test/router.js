/**
 * Router test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('Router', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['router'], function (router) {
      self.router = router
      done = true
    })

    waitsFor(function () {
      return done
    })
  })

  it('should have "routes" hash', function () {
    expect(this.router.routes).toBeDefined()
  })
  it('should have "initialize" method', function () {
    expect(typeof this.router.initialize).toBe('function')
  })
})
