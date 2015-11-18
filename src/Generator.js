'use strict'

import colors from 'colors/safe'
import fs from 'fs'

const baseComponentContent = function (name) {
  return `'use strict'

import React, { ScrollView, View, Text } from 'react-native'
var styles = require('../Styles/${name}Style')

export default class ${name} extends React.Component {

  static propTypes = {
    navigator: React.PropTypes.object
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>Some Component</Text>
      </ScrollView>
    )
  }
}
`
}

const baseComponentStyle = function (name) {
  return `'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  }
})
`
}

const createFile = function (path, contents) {
  fs.writeFile(path, contents, function (err) {
    if (err) {
      return console.log(err)
    }
    fileSign(path)
  })
}

export const fileSign = function (path) {
  const separator = colors.rainbow('!-=-=-=-=-=-=-!')
  console.log(separator + colors.yellow(' "') + colors.underline(path) + colors.yellow('" was saved ') + separator)
}

export const hydrateComponent = function (folder, fileName) {
  var fullFile = `./App/${folder}/${fileName}.js`
  var fullStyleFile = `./App/Styles/${fileName}Style.js`

  createFile(fullFile, baseComponentContent(fileName))
  createFile(fullStyleFile, baseComponentStyle(fileName))
}

export default {
  fileSign,
  hydrateComponent
}
