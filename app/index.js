#! /usr/bin/env node
'use strict'
var generators = require('yeoman-generator')

module.exports = generators.NamedBase.extend({
  method1: function () {
    console.log('method 1 just ran - name was ' + this.name)
  }

})
