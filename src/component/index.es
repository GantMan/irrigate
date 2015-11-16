#! /usr/bin/env babel-node
'use strict'

import colors from 'colors/safe'
import { NamedBase } from 'yeoman-generator'
// var generators = require('yeoman-generator');
// import generators from 'yeoman-generator'

export default class MyGenerator extends NamedBase {
  constructor (...args) {
    super(...args)
    this.argument('appname')
  }

  generateComponent () {
    console.log(colors.yellow('irrigate component - ' + this.name))
  }
}
