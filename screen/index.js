#! /usr/bin/env node
'use strict'

var colors = require('colors/safe')
var generators = require('yeoman-generator')

module.exports = generators.NamedBase.extend({
  generateComponent: function () {
    console.log(colors.yellow('irrigate screen - ' + this.name))
  }

})
