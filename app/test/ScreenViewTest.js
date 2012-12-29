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
      self.screenView = new ScreenView({ id: self.screenId })

      $('#sandbox').html(self.screenView.render().el)

      done = true
    })

    waitsFor(function () {
      return done
    })
  })

  afterEach(function () {
    this.screenView.remove()
  })
})