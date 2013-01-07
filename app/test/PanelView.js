/**
 * Panel View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('PanelView', function () {
  'use strict';

  beforeEach(function () {
    var self = this
      , done = false;

    require(['views/PanelView'], function (PanelView) {
      self.view = new PanelView();
      $('#sandbox').html(self.view.render().el);

      done = true;
    });

    waitsFor(function () { return done; });
  });

  afterEach(function () { this.view.remove(); });

  it('should have position', function () {
    expect(this.view.position).toBeDefined();
  });

  it('should have width', function () {
    expect(this.view.width).toBeDefined();
  });

  it('should have height', function () {
    expect(this.view.height).toBeDefined();
  });

  it('should have background', function () {
    expect(this.view.background).toBeDefined();
  });

  it('should render the right position', function () {
    var position = { top: 10, left: 10 };

    this.view.initialize({ position: position });
    this.view.render();
    expect(_.isEqual(this.view.$el.position(), position)).toBeTruthy();
  });

  it('should render the right width', function () {
    var width = 100;

    this.view.initialize({ width: width });
    this.view.render();
    expect(this.view.$el.width()).toEqual(width);
  });

  it('should render the right height', function () {
    var height = 100;

    this.view.initialize({ height: height });
    this.view.render();
    expect(this.view.$el.height()).toEqual(height);
  });

  it('should render the right background', function () {
    var background = 'linear-gradient(to right, rgb(255, 255, 255), rgb(248, 248, 248))';

    this.view.initialize({ background: background });
    this.view.render();
    expect(this.view.$el.css('background-image')).toEqual(background);
  });
});
