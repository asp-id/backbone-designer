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

  it('should have "" route', function () {
    expect(this.router.routes['']).toBeDefined()
  })

  it('should call "designer" action for "" route', function () {
    expect(this.router.routes['']).toEqual('designer')
    expect(typeof this.router.designer).toBe('function')
  })

  it('should have "editor" route', function () {
    expect(this.router.routes['editor']).toBeDefined()
  })

  it('should call "editor" action for "editor" route', function () {
    expect(this.router.routes['editor']).toEqual('editor')
    expect(typeof this.router.editor).toBe('function')
  })

  it('should have "preview" route', function () {
    expect(this.router.routes['preview']).toBeDefined()
  })

  it('should call "preview" action for "preview" route', function () {
    expect(this.router.routes['preview']).toEqual('preview')
    expect(typeof this.router.preview).toBe('function')
  })
})
