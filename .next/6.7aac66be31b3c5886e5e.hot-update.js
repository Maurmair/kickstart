webpackHotUpdate(6,{

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(482);

var _campaign = __webpack_require__(1195);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(1012);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(733);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Projects\\BlockChain\\kickstart\\components\\ContributeForm.js";


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: "",
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:
                _routes.Router.replaceRoute("/campaigns/" + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 15:
                _this.setState({ loading: false, value: '' });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, " Amount to Contribute"), _react2.default.createElement("input", {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: "ether",
        labelposition: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oop!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Contribute!"));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTyxBQUFTOztBQUMvQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7NE4sQUFDSjthQUFRLEFBQ0MsQUFDUDtvQkFGTSxBQUVRLEFBQ2Q7ZUFITSxBLEFBR0c7QUFISCxBQUNOLGEsQUFLRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47c0JBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNBO0FBRkcsMkJBRVEsd0JBQVMsTUFBQSxBQUFLLE1BRnRCLEFBRVEsQUFBb0IsQUFDckM7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSHRCLEFBR1QsQUFBYyxBQUErQjtnQ0FIcEM7Z0NBQUE7dUJBS2dCLGNBQUEsQUFBSyxJQUxyQixBQUtnQixBQUFTOzttQkFBMUI7QUFMQyxvQ0FBQTtnQ0FBQTtnQ0FNRCxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7d0JBQzVCLFNBRGlDLEFBQ2pDLEFBQVMsQUFDZjt5QkFBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BUjlCLEFBTUQsQUFBbUMsQUFFaEMsQUFBbUM7QUFGSCxBQUN2QyxpQkFESTs7bUJBSU47K0JBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BVmhDLEFBVVAsQUFBNkM7Z0NBVnRDO0FBQUE7O21CQUFBO2dDQUFBO2dEQVlQOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBWnZCLEFBWVAsQUFBYyxBQUFvQjs7bUJBRXBDO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BZHZCLEFBY1QsQUFBYyxBQUF5Qjs7bUJBZDlCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBaUJGO21CQUNQOzs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBO2VBQ1MsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFGekQsQUFHRTtlQUhGLEFBR1EsQUFDTjt1QkFKRixBQUlnQjs7b0JBSmhCO3NCQUhKLEFBQ0UsQUFFRSxBQU9GO0FBUEU7QUFDRSwyQkFNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFFBQU8sU0FBUyxLQUFBLEFBQUssTUFBM0MsQUFBaUQ7b0JBQWpEO3NCQVZGLEFBVUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQVpKLEFBQ0UsQUFXRSxBQUdMOzs7OztBQXhDMEIsQSxBQTJDN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiQzovUHJvamVjdHMvQmxvY2tDaGFpbi9raWNrc3RhcnQifQ==

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Projects\\BlockChain\\kickstart\\components\\ContributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Projects\\BlockChain\\kickstart\\components\\ContributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43YWFjNjZiZTMxYjNjNTg4NmU1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz9lMGM2Nzg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmNsYXNzIENvbnRyaWJ1dGVGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoe1xyXG4gICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUudmFsdWUsICdldGhlcicpXHJcbiAgICAgIH0pO1xyXG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHZhbHVlOiAnJ30pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+IEFtb3VudCB0byBDb250cmlidXRlPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcclxuICAgICAgICAgICAgbGFiZWxwb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcCFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0vPlxyXG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PkNvbnRyaWJ1dGUhPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250cmlidXRlRm9ybTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUVBO0FBSEE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQVZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFZQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBT0E7QUFQQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7OztBQUdBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=