/**
 * Base View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('BaseView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['views/BaseView'], function (BaseView) {
      self.baseView = new BaseView()
      $('#sandbox').html(self.baseView.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.baseView.remove() })

  it('should render template if it is set', function () {
    var html = 'test'

    this.baseView.template = html
    this.baseView.render()
    expect(this.baseView.$el.html()).toEqual(html)
  })
})
