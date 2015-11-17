#! /usr/bin/env node
'use strict'

import colors from 'colors/safe'
import { NamedBase } from 'yeoman-generator'

class AppGenerator extends NamedBase {

  generateApp () {
    console.log(colors.yellow('irrigate app - ' + this.name))
  }
}

module.exports = AppGenerator
