/**
 * Navigation View. Renders the navigation menu
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2012
 */

define(['views/BaseView', 'text!templates/navigationView.html'], function (BaseView, template) {
  'use strict';

  var NavigationView = BaseView.extend({
    id: 'top-menu',

    className: 'toolbar',

    /**
     * Navigation view initializer
     *
     * @param {Object} options Expects options to contain router object
     */
    initialize: function (options) {
      this.router = options.router;
      this.template = template;

      // activate menu items on route match event
      this.router.on('route:designer', function () { this._activate('designer'); }, this);
      this.router.on('route:editor', function () { this._activate('editor'); }, this);
      this.router.on('route:preview', function () { this._activate('preview'); }, this);

      // set current active item to null
      this.activeItem = null;
    },

    /**
     * Activates menu item and deactivates the previous one
     *
     * @private
     * @param {String} item
     */
    _activate: function (item) {
      var itemClass = item + '-link'
        , itemElement = this.$el.find('.' + itemClass);

      if (this.activeItem) {
        this.activeItem.removeClass('active');
      }

      itemElement.addClass('active');
      this.activeItem = itemElement;
    }
  });

  return NavigationView;
});
