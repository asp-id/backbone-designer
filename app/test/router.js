/**
 * Router test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

/**
 * Helper function that rebinds routes and returns a spy for given route.
 */
function spyOnAction(router, action) {
  'use strict';

  var spy = spyOn(router, action);

  // Backbone stores route callbacks in Backbone.history.handlers  so we
  // have to clear them and rebind routes every time we want  to spy on route handler.
  Backbone.history.handlers = [];
  router._bindRoutes();

  return spy;
}

describe('Router', function () {
  'use strict';

  beforeEach(function () {
    var self = this
      , done = false;

    require(['router'], function (router) {
      self.router = router;
      Backbone.history.start({ silent: true });

      // change hash to be sure that hashChange is triggered when other navigate calls are made
      self.router.navigate('foo');

      done = true;
    });

    waitsFor(function () { return done; });
  });

  afterEach(function () { Backbone.history.stop(); });

  it('should have "routes" hash', function () {
    expect(this.router.routes).toBeDefined();
  });

  it('should have the "container" selector', function () {
    expect(this.router.container).toBeDefined();
  });

  it('should have "designer" screen', function () {
    expect(this.router.designerScreen).toBeDefined();
  });

  it('should have "editor" screen', function () {
    expect(this.router.editorScreen).toBeDefined();
  });

  it('should have "preview" screen', function () {
    expect(this.router.previewScreen).toBeDefined();
  });

  it('should have navigation menu', function () {
    expect(this.router.navigationMenu).toBeDefined();
  });

  describe('"designer" action', function () {
    it('should be called for "" route', function () {
      var spy = spyOnAction(this.router, 'designer');

      this.router.navigate('', { trigger: true });
      expect(spy).toHaveBeenCalled();
    });

    it('should render designerScreen', function () {
      var spy = spyOn(this.router.designerScreen, 'render').andCallThrough();

      this.router.designer();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('"editor" action', function () {
    it('should be called for "editor" route', function () {
      var spy = spyOnAction(this.router, 'editor');

      this.router.navigate('editor', { trigger: true });
      expect(spy).toHaveBeenCalled();
    });

    it('should render editorScreen', function () {
      var spy = spyOn(this.router.editorScreen, 'render').andCallThrough();

      this.router.editor();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('"preview" action', function () {
    it('should be called for "preview" route', function () {
      var spy = spyOnAction(this.router, 'preview');

      this.router.navigate('preview', { trigger: true });
      expect(spy).toHaveBeenCalled();
    });

    it('should render previewScreen', function () {
      var spy = spyOn(this.router.previewScreen, 'render').andCallThrough();

      this.router.preview();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('"notfound" action', function () {
    it('should be called for any undefined route', function () {
      var spy = spyOnAction(this.router, 'notfound');

      this.router.navigate('nonexistentroute', { trigger: true });
      expect(spy.calls.length).toEqual(1);
      this.router.navigate('nonexistentroute2', { trigger: true });
      expect(spy.calls.length).toEqual(2);
    });

    it('should not be called for defined routes', function () {
      var spy = spyOnAction(this.router, 'notfound');

      this.router.navigate('', { trigger: true });
      expect(spy.calls.length).toEqual(0);
    });
  });
});
