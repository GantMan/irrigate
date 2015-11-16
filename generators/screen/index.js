#! /usr/bin/env node

'use strict';

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _yeomanGenerator2.default.NamedBase.extend({
  generateComponent: function generateComponent() {
    console.log(_safe2.default.yellow('irrigate screen - ' + this.name));
  }

});