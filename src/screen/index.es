#! /usr/bin/env node
'use strict'

import Generator from '../Generator'
import { NamedBase } from 'yeoman-generator'

class ScreenGenerator extends NamedBase {

  generateFile () {
    console.log('IRrigate screen - ' + this.name)
    Generator.hydrateComponent('Screens', this.name)
  }
}

module.exports = ScreenGenerator
