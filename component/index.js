#! /usr/bin/env node

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _yeomanGenerator = require('yeoman-generator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseComponentContent = '\'use strict\'\n\nimport React, { ScrollView, View, Text } from \'react-native\'\nvar styles = require(\'../Styles/SomeScreenStyle\')\n\nexport default class SomeScreenStyles extends React.Component {\n\n  static propTypes = {\n    navigator: React.PropTypes.object\n  }\n\n  render () {\n    return (\n      <ScrollView style={styles.container}>\n        <Text>Some Component</Text>\n      </ScrollView>\n    )\n  }\n}\n';

var baseComponentStyle = '\'use strict\'\n\nimport { StyleSheet } from \'react-native\'\nimport { Fonts, Colors, Metrics } from \'../Themes/\'\n\nexport default StyleSheet.create({\n  container: {\n    flex: 1,\n    paddingTop: Metrics.titlePadding\n  }\n})\n';

var fileSign = function fileSign(path) {
  var separator = _safe2.default.rainbow('-=-=-=-=-=-=-');
  console.log(separator + _safe2.default.yellow(' "') + _safe2.default.underline(path) + _safe2.default.yellow('" was saved') + separator);
};

var createComponent = function createComponent(folder, fileName) {
  var fullFile = './App/' + folder + '/' + fileName + '.js';
  var fullStyleFile = './App/Styles/' + fileName + 'Style.js';
  _fs2.default.writeFile(fullFile, baseComponentContent, function (err) {
    if (err) {
      return console.log(err);
    }
    fileSign(fullFile);
  });

  _fs2.default.writeFile(fullStyleFile, baseComponentStyle, function (err) {
    if (err) {
      return console.log(err);
    }
    fileSign(fullStyleFile);
  });
};

var ComponentGenerator = (function (_NamedBase) {
  _inherits(ComponentGenerator, _NamedBase);

  function ComponentGenerator() {
    _classCallCheck(this, ComponentGenerator);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ComponentGenerator).apply(this, arguments));
  }

  _createClass(ComponentGenerator, [{
    key: 'generateComponent',
    value: function generateComponent() {
      console.log(_safe2.default.yellow('irrigate component - ' + this.name));
      console.log(_safe2.default.red('Creating Component'));
      createComponent('Components', this.name);
    }
  }]);

  return ComponentGenerator;
})(_yeomanGenerator.NamedBase);

module.exports = ComponentGenerator;