/**
 * Designer View. Renders the designer screen
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define([
  'views/ScreenView',
  'views/PanelView',
  'views/PanelSectionView'
], function (ScreenView, PanelView, PanelSectionView) {
  'use strict';

  var DesignerView = ScreenView.extend({
    initialize: function () {
      DesignerView.__super__.initialize.apply(this, arguments);

      this.widgetsPanel = new PanelView({
        position: { top: 0, right: 0, bottom: 0 },
        width: 280,
        background: 'linear-gradient(to right, #FFFFFF, #F8F8F8)'
      });

      this.widgetsSection = new PanelSectionView({
        title: 'widgets',
        height: '40%'
      });

      this.propertiesSection = new PanelSectionView({
        title: 'properties',
        height: '60%'
      });

      this.widgetsPanel.addContent([this.widgetsSection, this.propertiesSection]);

      this.addContent(this.widgetsPanel);
    }
  });

  return DesignerView;
});
