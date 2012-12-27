/**
 * Build file for RequireJS Optimizer
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

({
    baseUrl : './'
  , dir : '../build'
  , paths: {
      jquery: 'vendor/jquery/jquery-1.8.3'
    , underscore: 'vendor/underscore/underscore'
    , backbone: 'vendor/backbone/backbone'
    , text: 'vendor/require/text'
  }
  , optimize: 'uglify'
  , modules: [
    {
        name: 'main'
      , exclude: ['jquery', 'underscore', 'backbone', 'text']
    }
  ]
})