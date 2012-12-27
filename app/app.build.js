/**
 * Build file for RequireJS Optimizer
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

({
    baseUrl : './'
  , dir : '../build'
  , mainConfigFile: 'main.js'
  , optimize: 'uglify'
  , modules: [
    {
        name: 'main'
      , exclude: ['jquery', 'underscore', 'backbone', 'text']
    }
  ]
  , fileExclusionRegExp: /^(\.)|(test)|(app\.build\.js)|(test\.js)|(test\.html)|(jasmine)/
})