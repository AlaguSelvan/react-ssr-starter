(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./lib/src/Desktop/Second.js":
/*!***********************************!*\
  !*** ./lib/src/Desktop/Second.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions */ "./lib/src/redux/actions.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);





 // import Header from '../Header'




const styles = {
  paper: {
    margin: 'auto',
    marginTop: 200,
    width: '40%',
    padding: 15
  },
  btnLeft: {
    marginRight: 20
  },
  img: {
    width: 100,
    marginBottom: 5,
    display: 'block'
  }
};

class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    console.log('did mount ?');

    if (!this.props.corgi) {
      this.props.actions.getCorgi();
    }
  }

  increase() {
    this.props.actions.increase();
  }

  decrease() {
    this.props.actions.decrease();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "MWA - Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "Modern Web App - Home Page"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
      elevation: 4,
      style: styles.paper,
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.corgi,
      style: styles.img,
      alt: ""
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "h5"
    }, "Redux-Counter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "subtitle1"
    }, "Counter: ", this.props.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      variant: "contained",
      color: "primary",
      onClick: this.increase,
      style: styles.btnLeft
    }, "Increase"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
      variant: "contained",
      color: "primary",
      onClick: this.decrease
    }, "Decrease")));
  }

}

Home.propTypes = {
  corgi: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.action,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

const mapStateToProps = state => ({
  count: state.count,
  corgi: state.corgi
});

const mapDispatchToProps = dispatch => ({
  actions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions__WEBPACK_IMPORTED_MODULE_5__, dispatch)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3JjL0Rlc2t0b3AvU2Vjb25kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnXHJcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vcmVkdXgvYWN0aW9ucydcclxuXHJcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJ1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHBhcGVyOiB7XHJcbiAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogMjAwLFxyXG4gICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgcGFkZGluZzogMTVcclxuICB9LFxyXG4gIGJ0bkxlZnQ6IHtcclxuICAgIG1hcmdpblJpZ2h0OiAyMFxyXG4gIH0sXHJcbiAgaW1nOiB7XHJcbiAgICB3aWR0aDogMTAwLFxyXG4gICAgbWFyZ2luQm90dG9tOiA1LFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLmluY3JlYXNlID0gdGhpcy5pbmNyZWFzZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmRlY3JlYXNlID0gdGhpcy5kZWNyZWFzZS5iaW5kKHRoaXMpXHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ2RpZCBtb3VudCA/JylcclxuICAgIGlmICghdGhpcy5wcm9wcy5jb3JnaSkge1xyXG4gICAgICB0aGlzLnByb3BzLmFjdGlvbnMuZ2V0Q29yZ2koKVxyXG4gICAgfVxyXG4gIH1cclxuICBpbmNyZWFzZSgpIHtcclxuICAgIHRoaXMucHJvcHMuYWN0aW9ucy5pbmNyZWFzZSgpXHJcbiAgfVxyXG4gIGRlY3JlYXNlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmRlY3JlYXNlKClcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgPHRpdGxlPk1XQSAtIEhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk1vZGVybiBXZWIgQXBwIC0gSG9tZSBQYWdlXCIgLz5cclxuICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXs0fSBzdHlsZT17c3R5bGVzLnBhcGVyfSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuY29yZ2l9IHN0eWxlPXtzdHlsZXMuaW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+UmVkdXgtQ291bnRlcjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5Db3VudGVyOiB7dGhpcy5wcm9wcy5jb3VudH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaW5jcmVhc2V9IHN0eWxlPXtzdHlsZXMuYnRuTGVmdH0+SW5jcmVhc2U8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuZGVjcmVhc2V9PkRlY3JlYXNlPC9CdXR0b24+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbkhvbWUucHJvcFR5cGVzID0ge1xyXG4gIGNvcmdpOiBQcm9wVHlwZXMuYWN0aW9uLFxyXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3RcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIGNvdW50OiBzdGF0ZS5jb3VudCxcclxuICBjb3JnaTogc3RhdGUuY29yZ2lcclxufSlcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhBY3Rpb25zLCBkaXNwYXRjaClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKEhvbWUpXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFWQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQXBDQTtBQUNBO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=