/**
 * File. Model description.
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2013
 */

define(['underscore', 'models/BaseModel'], function (_, BaseModel) {
  'use strict';

  /**
   * File type constants
   */
  var DIRECTORY = 0
    , TEXT = 1;

  var File = BaseModel.extend({
    defaults: {
      parent: null,
      type: TEXT
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

      if (attrs.type === TEXT && _.isEmpty(attrs.parent)) {
        return 'parent should not be empty';
      }

      if (attrs.type === TEXT && attrs.parent.get('type') !== DIRECTORY) {
        return 'parent should be directory';
      }
    },

    isDir: function () {
      return this.get('type') === DIRECTORY;
    },

    /**
     *
     * @return {String} File path
     */
    getPath: function () {
      var path
        , parent
        , node = this;

      // builds file path
      while (node.get('parent') !== null) {
        parent = node.get('parent');

        path = '/' + [parent.get('name'), path].join('/');
        node = parent;
      }

      // trim trailing slash
      path = path ? path.slice(0, -1) : '/';

      return path;
    }
  });

  /**
   * Export file type constants
   */
  File.DIRECTORY = DIRECTORY;
  File.TEXT = TEXT;

  return File;
});
