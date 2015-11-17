#! /usr/bin/env node
'use strict'

import colors from 'colors/safe'
import { NamedBase } from 'yeoman-generator'

class ScreenGenerator extends NamedBase {

  generateScreen () {
    console.log(colors.yellow('irrigate screen - ' + this.name))
  }
}

module.exports = ScreenGenerator
