#! /usr/bin/env node

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

var _yeomanGenerator = require('yeoman-generator');

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TEMP_FOLDER = 'baseTemp';

var AppGenerator = function (_NamedBase) {
  _inherits(AppGenerator, _NamedBase);

  function AppGenerator() {
    _classCallCheck(this, AppGenerator);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AppGenerator).apply(this, arguments));
  }

  _createClass(AppGenerator, [{
    key: 'verifyTools',
    value: function verifyTools() {
      // verify react-native
      if (!_shelljs2.default.which('react-native')) {
        console.log(_safe2.default.red('This script requires react-native to be installed first.'));
        _shelljs2.default.exit(1);
      }

      // Warn if outdated
      _shelljs2.default.exec('npm outdated react-native-cli');

      // verify git
      if (!_shelljs2.default.which('git')) {
        console.log(_safe2.default.red('This script requires git to be installed first.'));
        _shelljs2.default.exit(1);
      }
    }
  }, {
    key: 'makeDirectories',
    value: function makeDirectories(name) {
      (0, _mkdirp2.default)(name + '/' + TEMP_FOLDER, function (err) {
        if (err) {
          console.log(err);
          _shelljs2.default.exit(1);
        }
      });
    }
  }, {
    key: 'generateApp',
    value: function generateApp() {
      console.log(_safe2.default.yellow('irrigate app - ') + this.name + ' ☕️ This will take a while ☕️ ');
      // Fail if tools are missing
      this.verifyTools();
      // No clue why this is needed
      console.log('When directory exists, please type `yes` to continue.');
      // Create latest RN project
      this.spawnCommandSync('react-native', ['init', this.name]);
      // ensure temp dir
      this.makeDirectories(this.name);
      // Grab latest RNBase
      _shelljs2.default.exec('git clone git@github.com:infinitered/react_native_base.git ' + this.name + '/' + TEMP_FOLDER);

      console.log('Time to get cooking!');

      // react-native init this.name
      // git clone git@github.com:infinitered/react_native_base.git this.name/TEMP_FOLDER
    }
  }]);

  return AppGenerator;
}(_yeomanGenerator.NamedBase);

module.exports = AppGenerator;