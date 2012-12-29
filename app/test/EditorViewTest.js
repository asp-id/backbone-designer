/**
 * Editor View test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

describe('EditorView', function () {
  beforeEach(function () {
    var self = this
      , done = false

    require(['views/EditorView'], function (EditorView) {
      self.editorView = new EditorView()
      $('#sandbox').html(self.editorView.render().el)

      done = true
    })

    waitsFor(function () { return done })
  })

  afterEach(function () { this.editorView.remove() })
})