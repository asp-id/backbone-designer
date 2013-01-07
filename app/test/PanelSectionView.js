/**
 * Panel Section View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('PanelSectionView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['views/PanelSectionView'], function (PanelSectionView) {
      self.view = new PanelSectionView()
      $('#sandbox').html(self.view.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.view.remove() })

  it('should have title', function () {
    expect(this.view.title).toBeDefined()
  })

  it('should have height', function () {
    expect(this.view.height).toBeDefined()
  })

  it('should render content in right container', function () {
    expect(this.view.container).toEqual('.panel-section-content', this.view.el)
  })

  it('should have the right className', function () {
    expect(this.view.$el.hasClass('panel-section')).toBeTruthy()
  })

  it('should render the right title', function () {
    var title = 'test'

    this.view.initialize({ title: title })
    this.view.render()

    expect($('.panel-section-header .panel-section-label', this.view.el).html()).toEqual(title)
  })
})
