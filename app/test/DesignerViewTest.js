/**
 * Designer View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('DesignerView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['views/DesignerView'], function (DesignerView) {
      self.designerView = new DesignerView()
      $('#sandbox').html(self.designerView.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.designerView.remove() })
})