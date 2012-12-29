/**
 * Spec runner
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

require.config({
    baseUrl: './'
  , urlArgs: Math.random() // to prevent caching
  , paths: {
      jquery: 'vendor/jquery/jquery-1.8.3'
    , underscore: 'vendor/underscore/underscore'
    , backbone: 'vendor/backbone/backbone'
    , text: 'vendor/require/text'
    , jasmine: 'vendor/jasmine/jasmine'
    , 'jasmine-html': 'vendor/jasmine/jasmine-html'
  }
  , shim: {
      'underscore': { exports: '_' }
    , 'backbone': {
        deps: ['underscore', 'jquery']
      , exports: 'Backbone'
    }
    , jasmine: { exports: 'jasmine' }
    , 'jasmine-html': {
        deps: ['jasmine']
      , exports: 'jasmine'
    }
  }
})

require(['underscore', 'jquery', 'jasmine-html'], function (_, $, jasmine) {
  var jasmineEnv = jasmine.getEnv()
    , htmlReporter = new jasmine.HtmlReporter()
    , specs = []

  jasmineEnv.updateInterval = 1000
  jasmineEnv.addReporter(htmlReporter)
  jasmineEnv.specFilter = function (spec) {
    return htmlReporter.specFilter(spec)
  }

  // load the specs we are going to run
  specs.push('test/routerTest')
  specs.push('test/NavigationViewTest')
  specs.push('test/ScreenViewTest')
  specs.push('test/DesignerViewTest')
  specs.push('test/EditorViewTest')
  specs.push('test/PreviewViewTest')

  $(function () {
    require(specs, function () {
      jasmineEnv.execute()
    })
  })
})
