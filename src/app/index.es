#! /usr/bin/env node
'use strict'

import colors from 'colors/safe'
import { NamedBase } from 'yeoman-generator'
import Shell from 'shelljs'

class AppGenerator extends NamedBase {

  generateApp () {
    console.log(colors.yellow('irrigate app - ' + this.name))

    // verify react-native
    if (!Shell.which('react-native')) {
      console.log(colors.red('This script requires react-native to be installed first.'))
      Shell.exit(1)
    }

    console.log('Time to get cooking!')

    // react-native init this.name
    Shell.exec('ls -al')
  }
}

module.exports = AppGenerator
