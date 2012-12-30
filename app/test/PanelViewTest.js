/**
 * Panel View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('PanelView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['views/PanelView'], function (PanelView) {
      self.panelView = new PanelView()
      $('#sandbox').html(self.panelView.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.panelView.remove() })

  it('should have position', function () {
    expect(this.panelView.position).toBeDefined()
  })

  it('should have width', function () {
    expect(this.panelView.width).toBeDefined()
  })

  it('should have height', function () {
    expect(this.panelView.height).toBeDefined()
  })

  it('should have background', function () {
    expect(this.panelView.background).toBeDefined()
  })
})