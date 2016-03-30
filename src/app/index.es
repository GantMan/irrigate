#! /usr/bin/env node
'use strict'

import colors from 'colors/safe'
import { NamedBase } from 'yeoman-generator'
import Shell from 'shelljs'
import mkdirp from 'mkdirp'

const TEMP_FOLDER = 'baseTemp'

class AppGenerator extends NamedBase {

  verifyTools () {
    // verify react-native
    if (!Shell.which('react-native')) {
      console.log(colors.red('This script requires react-native to be installed first.'))
      Shell.exit(1)
    }

    // Warn if outdated
    Shell.exec(`npm outdated react-native-cli`)

    // verify git
    if (!Shell.which('git')) {
      console.log(colors.red('This script requires git to be installed first.'))
      Shell.exit(1)
    }
  }

  makeDirectories (name) {
    mkdirp(`${name}/${TEMP_FOLDER}`, (err) => {
      if (err) {
        console.log(err)
        Shell.exit(1)
      }
    })
  }

  generateApp () {
    console.log(colors.yellow('irrigate app - ') + this.name + ' ☕️ This will take a while ☕️ ')
    // Fail if tools are missing
    this.verifyTools()
    // No clue why this is needed
    console.log('When directory already exists, please type `yes` to continue.')
    // Create latest RN project
    this.spawnCommandSync('react-native', ['init', this.name])
    // ensure temp dir
    this.makeDirectories(this.name)
    // Grab latest RNBase
    Shell.exec(`git clone git@github.com:infinitered/react_native_base.git ${this.name}/${TEMP_FOLDER}`)

    console.log('Time to get cooking!')

    // react-native init this.name
    // git clone git@github.com:infinitered/react_native_base.git this.name/TEMP_FOLDER
  }
}

module.exports = AppGenerator
