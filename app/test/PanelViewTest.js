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

  it('should render the right position', function () {
    var position = { top: 10, left: 10 }
    this.panelView.initialize({ position: position })
    this.panelView.render()
    expect(_.isEqual(this.panelView.$el.position(), position)).toBeTruthy()
  })

  it('should render the right width', function () {
    var width = 100
    this.panelView.initialize({ width: width })
    this.panelView.render()
    expect(this.panelView.$el.width()).toEqual(width)
  })

  it('should render the right height', function () {
    var height = 100
    this.panelView.initialize({ height: height })
    this.panelView.render()
    expect(this.panelView.$el.height()).toEqual(height)
  })

  it('should render the right background', function () {
    var background = 'linear-gradient(to right, rgb(255, 255, 255), rgb(248, 248, 248))'
    this.panelView.initialize({ background: background })
    this.panelView.render()
    expect(this.panelView.$el.css('background-image')).toEqual(background)
  })
})