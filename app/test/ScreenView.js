/**
 * Screen View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('ScreenView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    this.screenId = 'test-screen'

    require(['views/ScreenView'], function (ScreenView) {
      self.view = new ScreenView({ id: self.screenId })
      $('#sandbox').html(self.view.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.view.remove() })
})
