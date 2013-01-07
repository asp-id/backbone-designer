/**
 * Container View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('ContainerView', function () {
  'use strict';

  beforeEach(function () {
    var self = this
      , done = false;

    require(['views/ContainerView'], function (ContainerView) {
      self.view = new ContainerView();
      $('#sandbox').html(self.view.render().el);

      done = true;
    });

    waitsFor(function () { return done; });
  });

  afterEach(function () { this.view.remove(); });

  it('should have content', function () {
    expect(this.view.content).toBeDefined();
  });

  it('should have container element', function () {
    expect(this.view.container).toBeDefined();
  });

  it('should have addContent method', function () {
    expect(typeof this.view.addContent).toEqual('function');
  });

  describe('addContent', function () {
    it('should add content', function () {
      var view = new Backbone.View();

      this.view.addContent(view);
      expect(this.view.content).toContain(view);
    });
  });

  describe('render', function () {
    it('should render content', function () {
      var view = new Backbone.View()
        , spy = spyOn(view, 'render').andCallThrough();

      this.view.addContent(view);
      this.view.render();
      expect(spy).toHaveBeenCalled();
    });

    it('should render content in right container', function () {
      var view = new Backbone.View({
        className: 'test'
      });

      this.view.template = '<div class="test-container"></div>';
      this.view.initialize({
        container: '.test-container'
      });

      this.view.addContent(view);
      this.view.render();

      expect($('.test-container', this.view.el).find('.test').length).toEqual(1);
    });
  });
});
