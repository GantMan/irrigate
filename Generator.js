'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrateComponent = exports.fileSign = undefined;

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseComponentContent = function baseComponentContent(name) {
  return '\'use strict\'\n\nimport React, { ScrollView, View, Text } from \'react-native\'\nvar styles = require(\'../Styles/' + name + 'Style\')\n\nexport default class ' + name + ' extends React.Component {\n\n  static propTypes = {\n    navigator: React.PropTypes.object\n  }\n\n  render () {\n    return (\n      <ScrollView style={styles.container}>\n        <Text>Some Component</Text>\n      </ScrollView>\n    )\n  }\n}\n';
};

var baseComponentStyle = function baseComponentStyle(name) {
  return '\'use strict\'\n\nimport { StyleSheet } from \'react-native\'\nimport { Fonts, Colors, Metrics } from \'../Themes/\'\n\nexport default StyleSheet.create({\n  container: {\n    flex: 1,\n    paddingTop: Metrics.titlePadding\n  }\n})\n';
};

var createFile = function createFile(path, contents) {
  _fs2.default.writeFile(path, contents, function (err) {
    if (err) {
      return console.log(err);
    }
    fileSign(path);
  });
};

var fileSign = exports.fileSign = function fileSign(path) {
  var separator = _safe2.default.rainbow('!-=-=-=-=-=-=-!');
  console.log(separator + _safe2.default.yellow(' "') + _safe2.default.underline(path) + _safe2.default.yellow('" was saved ') + separator);
};

var hydrateComponent = exports.hydrateComponent = function hydrateComponent(folder, fileName) {
  var fullFile = './App/' + folder + '/' + fileName + '.js';
  var fullStyleFile = './App/Styles/' + fileName + 'Style.js';

  createFile(fullFile, baseComponentContent(fileName));
  createFile(fullStyleFile, baseComponentStyle(fileName));
};

exports.default = {
  fileSign: fileSign,
  hydrateComponent: hydrateComponent
};