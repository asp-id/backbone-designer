/**
 * Spec runner
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

require.config({
  baseUrl: './',
  urlArgs: Math.random(), // to prevent caching
  paths: {
    jquery: 'vendor/jquery/jquery-1.8.3',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone/backbone',
    text: 'vendor/require/text',
    jasmine: 'vendor/jasmine/jasmine',
    'jasmine-html': 'vendor/jasmine/jasmine-html'
  },
  shim: {
    'underscore': { exports: '_' },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
  },
    jasmine: { exports: 'jasmine' },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    }
  }
});

require(['underscore', 'jquery', 'jasmine-html'], function (_, $, jasmine) {
  'use strict';

  var jasmineEnv = jasmine.getEnv()
    , htmlReporter = new jasmine.HtmlReporter()
    , specs = [];

  jasmineEnv.updateInterval = 1000;
  jasmineEnv.addReporter(htmlReporter);
  jasmineEnv.specFilter = function (spec) {
    return htmlReporter.specFilter(spec);
  };

  // load the specs we are going to run
  specs.push('test/router');
  specs.push('test/views/BaseView');
  specs.push('test/views/NavigationView');
  specs.push('test/views/ScreenView');
  specs.push('test/views/DesignerView');
  specs.push('test/views/EditorView');
  specs.push('test/views/PreviewView');
  specs.push('test/views/PanelView');
  specs.push('test/views/ContainerView');
  specs.push('test/views/PanelSectionView');

  $(function () {
    require(specs, function () {
      jasmineEnv.execute();
    });
  });
});
