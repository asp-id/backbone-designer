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
      self.view = new DesignerView()
      $('#sandbox').html(self.view.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.view.remove() })

  it('should contain widgets panel', function () {
    expect(this.view.widgetsPanel).toBeDefined()
  })
})