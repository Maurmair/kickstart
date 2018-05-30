'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const web3 = new Web3(window.web3.currentProvider);
var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and MetaMask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running MetaMask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/oF9IVMjLtlJ4EaGh1omg');

    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUE7QUFDQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDckU7QUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0g7QUFIRCxPQUdPLEFBQ0g7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFJQTs7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1Byb2plY3RzL0Jsb2NrY2hhaW4va2lja3N0YXJ0ZXIva2lja3N0YXJ0In0=