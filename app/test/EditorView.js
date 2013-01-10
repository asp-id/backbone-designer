/**
 * Editor View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('EditorView', function () {
  'use strict';

  beforeEach(function () {
    var self = this
      , done = false;

    require(['views/EditorView'], function (EditorView) {
      self.view = new EditorView();
      $('#sandbox').html(self.view.render().el);

      done = true;
    });

    waitsFor(function () { return done; });
  });

  afterEach(function () { this.view.remove(); });

  it('should contain project panel', function () {
    expect(this.view.projectPanel).toBeDefined();
  });

  it('should contain editor panel', function () {
    expect(this.view.editorPanel).toBeDefined();
  });

  it('should contain project section', function () {
    expect(this.view.projectSection).toBeDefined();
  });

  it('should contain editor section', function () {
    expect(this.view.editorSection).toBeDefined();
  });
});
