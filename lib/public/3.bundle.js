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
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions */ "./lib/src/redux/actions.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);




 // import Header from '../Header'




const styles = {
  paper: {
    margin: "auto",
    marginTop: 200,
    width: "40%",
    padding: 15
  },
  btnLeft: {
    marginRight: 20
  },
  img: {
    width: 100,
    marginBottom: 5,
    display: "block"
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "MWA - Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "description",
      content: "Modern Web App - Home Page"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
      elevation: 4,
      style: styles.paper,
      align: "center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.corgi,
      style: styles.img,
      alt: ""
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "h5"
    }, "Redux-Counter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "subtitle1"
    }, "Counter: ", this.props.count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "contained",
      color: "primary",
      onClick: this.increase,
      style: styles.btnLeft
    }, "Increase"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
      variant: "contained",
      color: "primary",
      onClick: this.decrease
    }, "Decrease")));
  }

}

const mapStateToProps = state => ({
  count: state.count,
  corgi: state.corgi
});

const mapDispatchToProps = dispatch => ({
  actions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions__WEBPACK_IMPORTED_MODULE_4__, dispatch)
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3JjL0Rlc2t0b3AvU2Vjb25kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0J1xyXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnXHJcblxyXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcidcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwYXBlcjoge1xyXG4gICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgIG1hcmdpblRvcDogMjAwLFxyXG4gICAgd2lkdGg6IFwiNDAlXCIsXHJcbiAgICBwYWRkaW5nOiAxNVxyXG4gIH0sXHJcbiAgYnRuTGVmdDoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IDIwXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIHdpZHRoOiAxMDAsXHJcbiAgICBtYXJnaW5Cb3R0b206IDUsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMuaW5jcmVhc2UgPSB0aGlzLmluY3JlYXNlLmJpbmQodGhpcylcclxuICAgIHRoaXMuZGVjcmVhc2UgPSB0aGlzLmRlY3JlYXNlLmJpbmQodGhpcylcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZGlkIG1vdW50ID8nKVxyXG4gICAgaWYgKCF0aGlzLnByb3BzLmNvcmdpKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuYWN0aW9ucy5nZXRDb3JnaSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGluY3JlYXNlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmluY3JlYXNlKClcclxuICB9XHJcbiAgZGVjcmVhc2UoKSB7XHJcbiAgICB0aGlzLnByb3BzLmFjdGlvbnMuZGVjcmVhc2UoKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICA8dGl0bGU+TVdBIC0gSG9tZTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTW9kZXJuIFdlYiBBcHAgLSBIb21lIFBhZ2VcIiAvPlxyXG4gICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgIDxQYXBlciBlbGV2YXRpb249ezR9IHN0eWxlPXtzdHlsZXMucGFwZXJ9IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5jb3JnaX0gc3R5bGU9e3N0eWxlcy5pbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5SZWR1eC1Db3VudGVyPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPkNvdW50ZXI6IHt0aGlzLnByb3BzLmNvdW50fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5pbmNyZWFzZX0gc3R5bGU9e3N0eWxlcy5idG5MZWZ0fT5JbmNyZWFzZTwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5kZWNyZWFzZX0+RGVjcmVhc2U8L0J1dHRvbj5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICBjb3VudDogc3RhdGUuY291bnQsXHJcbiAgY29yZ2k6IHN0YXRlLmNvcmdpXHJcbn0pXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoQWN0aW9ucywgZGlzcGF0Y2gpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShIb21lKVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVkE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFwQ0E7QUFDQTtBQXFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9