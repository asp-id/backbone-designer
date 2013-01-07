/**
 * Preview View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('PreviewView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['views/PreviewView'], function (PreviewView) {
      self.view = new PreviewView()
      $('#sandbox').html(self.view.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.view.remove() })
})
