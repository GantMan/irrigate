#! /usr/bin/env node

'use strict';

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _yeomanGenerator2.default.NamedBase.extend({
  method1: function method1() {
    console.log('method 1 just ran - name was ' + this.name);
  }

});