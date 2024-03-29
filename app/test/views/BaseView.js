/**
 * Base View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('BaseView', function () {
  'use strict';

  beforeEach(function () {
    var self = this
      , done = false;

    require(['views/BaseView'], function (BaseView) {
      self.view = new BaseView();
      $('#sandbox').html(self.view.render().el);

      done = true;
    });

    waitsFor(function () { return done; });
  });

  afterEach(function () { this.view.remove(); });

  it('should render template if it is set', function () {
    var html = 'test';

    this.view.template = html;
    this.view.render();
    expect(this.view.$el.html()).toEqual(html);
  });

  it('should render data', function () {
    var html = '<%= data %>'
      , data = { data: 'test' };

    this.view.template = html;
    this.view.data = data;

    this.view.render();
    expect(this.view.$el.html()).toEqual(data.data);
  });
});
