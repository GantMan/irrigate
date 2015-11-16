#! /usr/bin/env node
'use strict'

import colors from 'colors/safe'
import { NamedBase } from 'yeoman-generator'

export default class MyGenerator extends NamedBase {

  generateComponent () {
    console.log(colors.yellow('irrigate component - ' + this.name))
  }
}
