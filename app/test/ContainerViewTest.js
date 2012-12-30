/**
 * Container View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('ContainerView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['views/ContainerView'], function (ContainerView) {
      self.containerView = new ContainerView()
      $('#sandbox').html(self.containerView.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.containerView.remove() })

  it('should have content', function () {
    expect(this.containerView.content).toBeDefined()
  })

  it('should have addContent method', function () {
    expect(typeof this.containerView.addContent).toEqual('function')
  })

  describe('addContent', function () {
    it('should add content', function () {
      var view = new Backbone.View()
      this.containerView.addContent(view)
      expect(this.containerView.content).toContain(view)
    })
  })

  describe('render', function () {
    it('should render content', function () {
      var view = new Backbone.View()
        , spy = spyOn(view, 'render').andCallThrough()

      this.containerView.addContent(view)
      this.containerView.render()
      expect(spy).toHaveBeenCalled()
    })
  })
})