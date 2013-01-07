/**
 * Navigation View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('NavigationView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['views/NavigationView', 'router'], function (NavigationView, router) {
      self.router = router
      self.navigationMenu = router.navigationMenu

      // remove #top-menu created by router from DOM
      $('body > #top-menu').remove()
      $('#sandbox').html(self.navigationMenu.render().el)

      Backbone.history.start({ silent: true })

      // change hash to be sure that hashChange is triggered when other navigate calls are made
      self.router.navigate('foo')

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () {
    this.navigationMenu.remove()
    Backbone.history.stop()
  })

  it('should activate menu entry on route match event', function () {
    this.router.navigate('', { trigger: true })
    expect(this.navigationMenu.$el.find('.designer-link').hasClass('active')).toBeTruthy()
  })

  it('should have only one active item', function () {
    this.router.navigate('editor', { trigger: true })
    this.router.navigate('preview', { trigger: true })
    this.router.navigate('', { trigger: true })
    expect(this.navigationMenu.$el.find('.active').length).toEqual(1)
  })
})