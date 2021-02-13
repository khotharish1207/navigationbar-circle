"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var navs = [_react["default"].createElement("div", {
  onClick: function onClick() {
    return alert('Home');
  }
}, _react["default"].createElement("i", {
  className: "fas fa-home"
}), " Home"), _react["default"].createElement("div", {
  onClick: function onClick() {
    return alert('About');
  }
}, _react["default"].createElement("i", {
  className: "fas fa-user-alt"
}), " About"), _react["default"].createElement("div", {
  onClick: function onClick() {
    return alert('Contact');
  }
}, _react["default"].createElement("i", {
  className: "fas fa-envelope"
}), " Contact")];

var NavigationbarCircle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationbarCircle, _React$Component);

  function NavigationbarCircle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationbarCircle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationbarCircle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "openNav", function (e) {
      var container = document.querySelector('.container-circle-navbar');
      container.classList.add('show-nav-circle');
      _this.props.onOpen && _this.props.onOpen(e);
    });

    _defineProperty(_assertThisInitialized(_this), "closeNav", function (e) {
      var container = document.querySelector('.container-circle-navbar');
      container.classList.remove('show-nav-circle');
      _this.props.onClose && _this.props.onClose(e);
    });

    return _this;
  }

  _createClass(NavigationbarCircle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$openIcon = _this$props.openIcon,
          openIcon = _this$props$openIcon === void 0 ? _react["default"].createElement("i", {
        className: "fas fa-times"
      }) : _this$props$openIcon,
          _this$props$closeIcon = _this$props.closeIcon,
          closeIcon = _this$props$closeIcon === void 0 ? _react["default"].createElement("i", {
        className: "fas fa-bars"
      }) : _this$props$closeIcon,
          _this$props$circleBac = _this$props.circleBackgroundColor,
          circleBackgroundColor = _this$props$circleBac === void 0 ? 'transparent' : _this$props$circleBac,
          _this$props$navItems = _this$props.navItems,
          navItems = _this$props$navItems === void 0 ? navs : _this$props$navItems;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: "circle-container"
      }, _react["default"].createElement("div", {
        className: "nav-circle",
        style: {
          backgroundColor: circleBackgroundColor
        }
      }, _react["default"].createElement("button", {
        onClick: this.closeNav,
        id: "close"
      }, openIcon), _react["default"].createElement("button", {
        onClick: this.openNav,
        id: "open"
      }, closeIcon))), _react["default"].createElement("nav", null, _react["default"].createElement("ul", null, navItems.map(function (n, i) {
        return _react["default"].createElement("li", {
          key: "nav-item-".concat(i)
        }, " ", n, " ");
      }))));
    }
  }]);

  return NavigationbarCircle;
}(_react["default"].Component);

exports["default"] = NavigationbarCircle;