/**
 * Designer View. Renders the designer screen
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['views/ScreenView', 'views/PanelView'], function (ScreenView, PanelView) {
  var DesignerView = ScreenView.extend({
      initialize: function () {
      DesignerView.__super__.initialize.apply(this, arguments)

      this.widgetsPanel = new PanelView({
          position: { top: 0, right: 2, bottom: 0 }
        , width: 280
        , background: 'linear-gradient(to right, #FFFFFF, #F8F8F8)'
      })

      this.addContent(this.widgetsPanel)
    }
  })

  return DesignerView
})
