/**
 * Editor View. Renders the editor screen
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['views/ScreenView', 'views/PanelView'], function (ScreenView, PanelView) {
  var EditorView = ScreenView.extend({
      initialize: function () {
      EditorView.__super__.initialize.apply(this, arguments)

      this.projectPanel =  new PanelView({
          position: { top: 0, left: 0, bottom: 0 }
        , width: 280
        , background: 'linear-gradient(to left, #FFFFFF, #F8F8F8)'
      })
      this.editorPanel = new PanelView({
          position: { top: 0, left: 286, bottom: 0, right: 0 }
      })

      this.addContent([this.projectPanel, this.editorPanel])
    }
  })

  return EditorView
})
