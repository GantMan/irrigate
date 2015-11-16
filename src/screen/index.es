#! /usr/bin/env node
'use strict'

import colors from 'colors/safe'
import generators from 'yeoman-generator'

module.exports = generators.NamedBase.extend({
  generateComponent: function () {
    console.log(colors.yellow('irrigate screen - ' + this.name))
  }

})
