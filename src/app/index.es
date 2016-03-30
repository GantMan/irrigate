#! /usr/bin/env node
'use strict'

import colors from 'colors/safe'
import { NamedBase } from 'yeoman-generator'
import Shell from 'shelljs'
import mkdirp from 'mkdirp'

const TEMP_FOLDER = 'baseTemp'
const templateGrab = (name, dir) => Shell.cp('-R', `${name}/${TEMP_FOLDER}/${dir}`, `${name}/${dir}`)
const templatePut = (gitRoot, templateRoot, file) => Shell.cp(`${gitRoot}/${file}`, `${templateRoot}/`)

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

    // verify rnpm
    if (!Shell.which('rnpm')) {
      console.log(colors.red('This script requires rnpm to be installed.'))
      Shell.exec('npm i -g rnpm')
    }

    // Warn if outdated
    Shell.exec(`npm outdated rnpm`)
  }

  makeDirectories (name) {
    mkdirp(`${name}/${TEMP_FOLDER}`, (err) => {
      if (err) {
        console.log(err)
        Shell.exit(1)
      }
    })
  }

    // worth noting but requires template
    // this.bulkCopy(`./${this.name}/${TEMP_FOLDER}/App`, `./${this.name}/App`)
  copyOver () {
    // copy package.json
    this.fs.copyTpl(
      this.templatePath('package.json.template'),
      this.destinationPath(`${this.name}/package.json`),
      { name: this.name }
    )

    // copy template of index.ios.js
    this.fs.copyTpl(
      this.templatePath('index.js.template'),
      this.destinationPath(`${this.name}/index.ios.js`),
      { name: this.name }
    )

    // copy template of index.android.js
    this.fs.copyTpl(
      this.templatePath('index.js.template'),
      this.destinationPath(`${this.name}/index.android.js`),
      { name: this.name }
    )

    // copy git_hooks/
    templateGrab(this.name, 'git_hooks')
    // copy Tests/
    templateGrab(this.name, 'Tests')
    // copy App/
    templateGrab(this.name, 'App')
    // copy a Readme not ours
    // TODO
  }

  generateApp () {
    console.log(colors.yellow('irrigate app - ') + this.name + ' ☕️ This will take a while ☕️ ')
    const templateRoot = this.sourceRoot()
    const gitRoot = `${this.name}/${TEMP_FOLDER}`
    // force overwrite on conflicts (default is ask user)
    this.conflicter.force = true

    // Fail if tools are missing
    // this.verifyTools()
    // // No clue why this is needed
    // console.log('When directory already exists, please type `yes` to continue.')
    // // Create latest RN project
    // this.spawnCommandSync('react-native', ['init', this.name])
    // // ensure temp dir
    // this.makeDirectories(this.name)
    // // Grab latest RNBase
    // Shell.exec(`git clone git@github.com:infinitered/react_native_base.git ${gitRoot}`)

    // templatePut(gitRoot, templateRoot, `package.json`)
    // this.copyOver.bind(this)


    // WORKS TO HERE

    // Copy over
    // Do npm install
    // Do rnpm link
    // Cleanup

    console.log('Time to get cooking!')

    // react-native init this.name
    // git clone git@github.com:infinitered/react_native_base.git this.name/TEMP_FOLDER
  }
}

module.exports = AppGenerator
