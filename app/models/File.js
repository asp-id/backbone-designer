/**
 * File. Model description.
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2013
 */

define(['underscore', 'models/BaseModel'], function (_, BaseModel) {
  'use strict';

  var File = BaseModel.extend({
    defaults: {
      parent: null
    },

    initialize: function (attrs) {
      attrs = attrs || {};

      var error = this.validate(attrs);

      if (error) {
        throw error;
      }
    },

    validate: function (attrs) {
      if (_.isEmpty(attrs.name)) {
        return 'name should not be empty';
      }

      if (attrs.parent && !(attrs.parent instanceof File)) {
        return 'parent should be instance of File';
      }

      if (attrs.type === File.TEXT && _.isEmpty(attrs.parent)) {
        return 'parent should not be empty';
      }

      if (attrs.type === File.TEXT && attrs.parent.get('type') !== File.DIRECTORY) {
        return 'parent should be directory';
      }
    }
  });

  /**
   * File type constants
   */
  File.DIRECTORY = 0;
  File.TEXT = 1;

  return File;
});
