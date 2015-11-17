'use strict'

import colors from 'colors/safe'
import fs from 'fs'

let baseComponentContent = `'use strict'

import React, { ScrollView, View, Text } from 'react-native'
var styles = require('../Styles/SomeScreenStyle')

export default class SomeScreenStyles extends React.Component {

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

let baseComponentStyle = `'use strict'

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.titlePadding
  }
})
`

const fileSign = function (path) {
  const separator = colors.rainbow('!-=-=-=-=-=-=-!')
  console.log(separator + colors.yellow(' "') + colors.underline(path) + colors.yellow('" was saved ') + separator)
}

const createComponent = function (folder, fileName) {
  var fullFile = `./App/${folder}/${fileName}.js`
  var fullStyleFile = `./App/Styles/${fileName}Style.js`
  fs.writeFile(fullFile, baseComponentContent, function (err) {
    if (err) {
      return console.log(err)
    }
    fileSign(fullFile)
  })

  fs.writeFile(fullStyleFile, baseComponentStyle, function (err) {
    if (err) {
      return console.log(err)
    }
    fileSign(fullStyleFile)
  })
}

export default {
  fileSign,
  createComponent
}
