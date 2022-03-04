webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Groove\\Aulas-Js-React\\pages\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import moment from "moment-timezone";

 // import { console } from "window-or-global";

function Page() {
  _s();

  //RENDIRAZAÇÃO CONDICIONAL OU CONDIÇÃO TERNARIA
  function initialGA() {
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].initialize("UA-170909874-1");
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].pageview(urlLocal);
  }

  var urlLocal;

  if (true) {
    var _window$location;

    urlLocal = (_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.href;
  }

  initialGA();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      nome = _useState3[0],
      setNome = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      rede = _useState4[0],
      setRede = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      sobrenome = _useState5[0],
      setSobrenome = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      culto = _useState6[0],
      setCulto = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      criancas = _useState7[0],
      setCriancas = _useState7[1];

  var url = "https://aguaviva-rp.firebaseio.com/teste.json";
  var date = new Date();
  var dia_sem = date.getDay(); // var dateMoment = moment(`${date}`);
  // dateMoment.tz("America/Sao_Paulo").format("ha z");
  // moment.locale("pt-BR");
  // const novaData = new Date(dateMoment);
  // var dia_sem = moment(novaData).format("dddd");

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdSabado = _useState8[0],
      setQtdSabado = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdDomingoManha = _useState9[0],
      setQtdDomingoManha = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      qtdDomingoNoite = _useState10[0],
      setQtdDomingoNoite = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      nomeLimpar = _useState11[0],
      setNomeLimpar = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      sobrenomeLimpar = _useState12[0],
      setSobrenomeLimpar = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      redeLimpar = _useState13[0],
      setRedeLimpar = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      criancasLimpar = _useState14[0],
      setCriancasLimpar = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      listagem = _useState15[0],
      setListagem = _useState15[1];

  var qtdMAxima = 75;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(function (res) {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (data) {
      var cultoSabado = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "sabado";
      });
      setQtdSabado(cultoSabado.length);
      var cultoDomingoManha = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "manha";
      });
      setQtdDomingoManha(cultoDomingoManha.length);
      var cultoDomingoNoite = Object.keys(data).filter(function (pessoa) {
        return data[pessoa].culto == "noite";
      });
      setQtdDomingoNoite(cultoDomingoNoite.length);
      setListagem(data); // ATENÇÃO USE ESSE CÓDIGO COM CAUTELA, REMOVE TUDO //
      // if (dia_sem >= 1 && dia_sem <= 5) {
      //   Object.entries(data).map((individuo) => {
      //     if (individuo[0] != "base") {
      //       doRemove(individuo[0]);
      //     }
      //   });
      // }
    }
  }, [data]);

  var doRemove = function doRemove(id) {
    remove("https://aguaviva-rp.firebaseio.com/teste/".concat(id, ".json"));
  };

  var remove = function remove(url) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a["delete"](url).then(function () {
      console.log("voc\xEA deletou ".concat(url));
    });
  };

  var redirect;

  if (true) {
    redirect = window.location.href;
  }

  var post = function post(data) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, data).then(function (res) {
      setNomeLimpar(!nomeLimpar);
      setSobrenomeLimpar(!sobrenomeLimpar);
      setRedeLimpar(!redeLimpar);
      setCriancasLimpar(!criancasLimpar);
      alert("você confirmou sua presença no culto");
      window.location = "/listagem.html";
    });
  };

  var salve = function salve() {
    if (nome && sobrenome && rede && culto) {
      var existeCriancas = criancas ? criancas : "0";
      post({
        nome: nome.toLowerCase(),
        sobrenome: sobrenome,
        rede: rede,
        culto: culto,
        criancas: existeCriancas,
        chegada: false
      });
    } else {
      alert("Um ou mais campos estão em branco");
    }
  };

  var abacaxi = true;
  var morango = "ativo"; // null | "" | undefined | false

  var existe = true; // 1 se eu colocar minha variavel com um valor que existe meu select vai exibir os cultos de sabados
  //quando nao atender ela vai exibir cultos de terça feira
  // 2 criar uma segunda variavel que se for igual a "Ativo" exiba o botao inscrever

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, "Igreja Batista \xC1gua Viva - Ribeir\xE3o Pires")), existe && __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, "Formul\xE1rio para culto dos jovens (24/04)")), (qtdDomingoManha < qtdMAxima || qtdDomingoNoite < qtdMAxima) && // <>
  //   {(dia_sem == 0 || dia_sem == 5 || dia_sem == 6) && (
  __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, listagem ? __jsx("div", {
    className: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }, "Nome"), nomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setNome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Nome ",
    className: "input_name",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 21
    }
  }), !nomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setNome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Nome ",
    className: "input_name",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }, "Sobrenome"), sobrenomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setSobrenome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Sobrenome",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }), !sobrenomeLimpar && __jsx("input", {
    onKeyUp: function onKeyUp(e) {
      return setSobrenome(e.currentTarget.value);
    },
    type: "text",
    placeholder: "Sobrenome",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }, "Discipulado"), redeLimpar && __jsx("select", {
    onChange: function onChange(e) {
      setRede(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 23
    }
  }, "Selecione seu discipulado"), __jsx("option", {
    value: "isabela",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 23
    }
  }, "Isabela Amaro"), __jsx("option", {
    value: "matheus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, "Matheus Amaro"), __jsx("option", {
    value: "felipe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 23
    }
  }, "Felipe Ramos"), __jsx("option", {
    value: "silas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 23
    }
  }, "Silas Souza"), __jsx("option", {
    value: "elaine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 23
    }
  }, "Elaine Jeremias ")), !redeLimpar && __jsx("select", {
    onChange: function onChange(e) {
      setRede(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 23
    }
  }, "Selecione seu discipulado"), __jsx("option", {
    value: "isabela",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 23
    }
  }, "Isabela Amaro"), __jsx("option", {
    value: "matheus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 23
    }
  }, "Matheus Amaro"), __jsx("option", {
    value: "felipe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 23
    }
  }, "Felipe Ramos"), __jsx("option", {
    value: "silas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 23
    }
  }, "Silas Souza"), __jsx("option", {
    value: "elaine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 23
    }
  }, "Elaine Jeremias ")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 19
    }
  }, "Qual culto deseja ir?"), __jsx("select", {
    onChange: function onChange(e) {
      setCulto(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 19
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 21
    }
  }, "Selecione o culto"), qtdDomingoManha < qtdMAxima && __jsx("option", {
    value: "manha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 23
    }
  }, "S\xE1bado - 15hs"), qtdDomingoNoite < qtdMAxima && __jsx("option", {
    value: "noite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 23
    }
  }, "S\xE1bado - 17:30hs ")), __jsx("div", {
    className: "vagas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 21
    }
  }, "S\xE1bado 15:00hs -", qtdDomingoManha >= qtdMAxima && __jsx("small", {
    className: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 25
    }
  }, " vagas encerradas"), qtdDomingoManha < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoManha >= 0 && __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 29
    }
  }, " ", qtdMAxima - qtdDomingoManha), qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s")))), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  }, "S\xE1bado 17:30hs -", qtdDomingoNoite >= qtdMAxima && __jsx("small", {
    className: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 25
    }
  }, " vagas encerradas"), qtdDomingoNoite < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoNoite >= 0 && __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 29
    }
  }, " ", qtdMAxima - qtdDomingoNoite), qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s"))))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 19
    }
  }), morango && __jsx("button", {
    onClick: salve,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 30
    }
  }, "Inscrever"), __jsx("a", {
    href: "/listagem.html",
    className: "listagem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 19
    }
  }, "Verifique a listagem")) : __jsx("p", {
    className: "carregando",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/loading.gif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 19
    }
  }, "Carregando..."))) //   )}
  // </>
  , qtdDomingoManha >= qtdMAxima && qtdDomingoNoite >= qtdMAxima && dia_sem != 1 && dia_sem != 2 && dia_sem != 3 && dia_sem != 4 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "paragrafo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 17
    }
  }, "Infelizmente todos os cultos presenciais ja esgotaram sua capacidade exigida por lei, mas acompanhe online pelas nossas redes sociais", __jsx("div", {
    className: "redes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.youtube.com/channel/UCSgeLNbDf68linYZ7XBzuug/videos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/youtube.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 23
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/IbavRibeiraoPires/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 23
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/ibavrp/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/instagram.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 23
    }
  }))), __jsx("a", {
    href: "/listagem.html",
    className: "listagem_encerrada",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 19
    }
  }, "Verifique a listagem dos cultos presenciais")))));
}

_s(Page, "QP3erc28t79IVoWWQP4K+r92pN4=");

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlBhZ2UiLCJpbml0aWFsR0EiLCJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsInBhZ2V2aWV3IiwidXJsTG9jYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJub21lIiwic2V0Tm9tZSIsInJlZGUiLCJzZXRSZWRlIiwic29icmVub21lIiwic2V0U29icmVub21lIiwiY3VsdG8iLCJzZXRDdWx0byIsImNyaWFuY2FzIiwic2V0Q3JpYW5jYXMiLCJ1cmwiLCJkYXRlIiwiRGF0ZSIsImRpYV9zZW0iLCJnZXREYXkiLCJxdGRTYWJhZG8iLCJzZXRRdGRTYWJhZG8iLCJxdGREb21pbmdvTWFuaGEiLCJzZXRRdGREb21pbmdvTWFuaGEiLCJxdGREb21pbmdvTm9pdGUiLCJzZXRRdGREb21pbmdvTm9pdGUiLCJub21lTGltcGFyIiwic2V0Tm9tZUxpbXBhciIsInNvYnJlbm9tZUxpbXBhciIsInNldFNvYnJlbm9tZUxpbXBhciIsInJlZGVMaW1wYXIiLCJzZXRSZWRlTGltcGFyIiwiY3JpYW5jYXNMaW1wYXIiLCJzZXRDcmlhbmNhc0xpbXBhciIsImxpc3RhZ2VtIiwic2V0TGlzdGFnZW0iLCJxdGRNQXhpbWEiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjdWx0b1NhYmFkbyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwZXNzb2EiLCJsZW5ndGgiLCJjdWx0b0RvbWluZ29NYW5oYSIsImN1bHRvRG9taW5nb05vaXRlIiwiZG9SZW1vdmUiLCJpZCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsInBvc3QiLCJhbGVydCIsInNhbHZlIiwiZXhpc3RlQ3JpYW5jYXMiLCJ0b0xvd2VyQ2FzZSIsImNoZWdhZGEiLCJhYmFjYXhpIiwibW9yYW5n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O0FBQWlDLGFBQVMsRUFBQyxNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQUpGLEVBZUU7QUFBRyxRQUFJLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFDLG9CQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQWZGLENBREYsQ0FoT04sQ0FQSixDQURGO0FBcVJEOztHQS9ZUTNCLEk7O0tBQUFBLEk7QUFpWk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlODJhYThkMjlhMzVmMmQzN2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xyXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtdGltZXpvbmVcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgY29uc29sZSB9IGZyb20gXCJ3aW5kb3ctb3ItZ2xvYmFsXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gUGFnZSgpIHtcclxuXHJcbiAgLy9SRU5ESVJBWkHDh8ODTyBDT05ESUNJT05BTCBPVSBDT05EScOHw4NPIFRFUk5BUklBXHJcblxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsR0EoKSB7XHJcbiAgICBSZWFjdEdBLmluaXRpYWxpemUoXCJVQS0xNzA5MDk4NzQtMVwiKTtcclxuICAgIFJlYWN0R0EucGFnZXZpZXcodXJsTG9jYWwpO1xyXG4gIH1cclxuICBsZXQgdXJsTG9jYWw7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHVybExvY2FsID0gd2luZG93LmxvY2F0aW9uPy5ocmVmO1xyXG4gIH1cclxuICBpbml0aWFsR0EoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtub21lLCBzZXROb21lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3JlZGUsIHNldFJlZGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc29icmVub21lLCBzZXRTb2JyZW5vbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3VsdG8sIHNldEN1bHRvXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NyaWFuY2FzLCBzZXRDcmlhbmNhc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hZ3Vhdml2YS1ycC5maXJlYmFzZWlvLmNvbS90ZXN0ZS5qc29uXCI7XHJcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciBkaWFfc2VtID0gZGF0ZS5nZXREYXkoKTtcclxuXHJcbiAgLy8gdmFyIGRhdGVNb21lbnQgPSBtb21lbnQoYCR7ZGF0ZX1gKTtcclxuICAvLyBkYXRlTW9tZW50LnR6KFwiQW1lcmljYS9TYW9fUGF1bG9cIikuZm9ybWF0KFwiaGEgelwiKTtcclxuICAvLyBtb21lbnQubG9jYWxlKFwicHQtQlJcIik7XHJcbiAgLy8gY29uc3Qgbm92YURhdGEgPSBuZXcgRGF0ZShkYXRlTW9tZW50KTtcclxuICAvLyB2YXIgZGlhX3NlbSA9IG1vbWVudChub3ZhRGF0YSkuZm9ybWF0KFwiZGRkZFwiKTtcclxuICBjb25zdCBbcXRkU2FiYWRvLCBzZXRRdGRTYWJhZG9dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcXRkRG9taW5nb01hbmhhLCBzZXRRdGREb21pbmdvTWFuaGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcXRkRG9taW5nb05vaXRlLCBzZXRRdGREb21pbmdvTm9pdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbm9tZUxpbXBhciwgc2V0Tm9tZUxpbXBhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc29icmVub21lTGltcGFyLCBzZXRTb2JyZW5vbWVMaW1wYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3JlZGVMaW1wYXIsIHNldFJlZGVMaW1wYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2NyaWFuY2FzTGltcGFyLCBzZXRDcmlhbmNhc0xpbXBhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbGlzdGFnZW0sIHNldExpc3RhZ2VtXSA9IHVzZVN0YXRlKCk7XHJcbiAgdmFyIHF0ZE1BeGltYSA9IDc1O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgQXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldERhdGEocmVzLmRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3QgY3VsdG9TYWJhZG8gPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoKHBlc3NvYSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhW3Blc3NvYV0uY3VsdG8gPT0gXCJzYWJhZG9cIjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFF0ZFNhYmFkbyhjdWx0b1NhYmFkby5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBjdWx0b0RvbWluZ29NYW5oYSA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcigocGVzc29hKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbcGVzc29hXS5jdWx0byA9PSBcIm1hbmhhXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRRdGREb21pbmdvTWFuaGEoY3VsdG9Eb21pbmdvTWFuaGEubGVuZ3RoKTtcclxuICAgICAgY29uc3QgY3VsdG9Eb21pbmdvTm9pdGUgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoKHBlc3NvYSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhW3Blc3NvYV0uY3VsdG8gPT0gXCJub2l0ZVwiO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0UXRkRG9taW5nb05vaXRlKGN1bHRvRG9taW5nb05vaXRlLmxlbmd0aCk7XHJcbiAgICAgIHNldExpc3RhZ2VtKGRhdGEpO1xyXG4gICAgICAvLyBBVEVOw4fDg08gVVNFIEVTU0UgQ8OTRElHTyBDT00gQ0FVVEVMQSwgUkVNT1ZFIFRVRE8gLy9cclxuICAgICAgLy8gaWYgKGRpYV9zZW0gPj0gMSAmJiBkaWFfc2VtIDw9IDUpIHtcclxuICAgICAgLy8gICBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKGluZGl2aWR1bykgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKGluZGl2aWR1b1swXSAhPSBcImJhc2VcIikge1xyXG4gICAgICAvLyAgICAgICBkb1JlbW92ZShpbmRpdmlkdW9bMF0pO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuICBjb25zdCBkb1JlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgcmVtb3ZlKGBodHRwczovL2FndWF2aXZhLXJwLmZpcmViYXNlaW8uY29tL3Rlc3RlLyR7aWR9Lmpzb25gKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZSA9ICh1cmwpID0+IHtcclxuICAgIEF4aW9zLmRlbGV0ZSh1cmwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgdm9jw6ogZGVsZXRvdSAke3VybH1gKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgdmFyIHJlZGlyZWN0O1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZWRpcmVjdCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIH1cclxuICBjb25zdCBwb3N0ID0gKGRhdGEpID0+IHtcclxuICAgIEF4aW9zLnBvc3QodXJsLCBkYXRhKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0Tm9tZUxpbXBhcighbm9tZUxpbXBhcik7XHJcbiAgICAgIHNldFNvYnJlbm9tZUxpbXBhcighc29icmVub21lTGltcGFyKTtcclxuICAgICAgc2V0UmVkZUxpbXBhcighcmVkZUxpbXBhcik7XHJcbiAgICAgIHNldENyaWFuY2FzTGltcGFyKCFjcmlhbmNhc0xpbXBhcik7XHJcbiAgICAgIGFsZXJ0KFwidm9jw6ogY29uZmlybW91IHN1YSBwcmVzZW7Dp2Egbm8gY3VsdG9cIik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2xpc3RhZ2VtLmh0bWxcIjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhbHZlID0gKCkgPT4ge1xyXG4gICAgaWYgKG5vbWUgJiYgc29icmVub21lICYmIHJlZGUgJiYgY3VsdG8pIHtcclxuICAgICAgY29uc3QgZXhpc3RlQ3JpYW5jYXMgPSBjcmlhbmNhcyA/IGNyaWFuY2FzIDogXCIwXCI7XHJcbiAgICAgIHBvc3Qoe1xyXG4gICAgICAgIG5vbWU6IG5vbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICBzb2JyZW5vbWU6IHNvYnJlbm9tZSxcclxuICAgICAgICByZWRlOiByZWRlLFxyXG4gICAgICAgIGN1bHRvOiBjdWx0byxcclxuICAgICAgICBjcmlhbmNhczogZXhpc3RlQ3JpYW5jYXMsXHJcbiAgICAgICAgY2hlZ2FkYTogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJVbSBvdSBtYWlzIGNhbXBvcyBlc3TDo28gZW0gYnJhbmNvXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFiYWNheGkgPSB0cnVlXHJcbiAgY29uc3QgbW9yYW5nbyA9IFwiYXRpdm9cIlxyXG5cclxuICAvLyBudWxsIHwgXCJcIiB8IHVuZGVmaW5lZCB8IGZhbHNlXHJcbiAgY29uc3QgZXhpc3RlID0gdHJ1ZVxyXG5cclxuXHJcbiAgLy8gMSBzZSBldSBjb2xvY2FyIG1pbmhhIHZhcmlhdmVsIGNvbSB1bSB2YWxvciBxdWUgZXhpc3RlIG1ldSBzZWxlY3QgdmFpIGV4aWJpciBvcyBjdWx0b3MgZGUgc2FiYWRvc1xyXG4gIC8vcXVhbmRvIG5hbyBhdGVuZGVyIGVsYSB2YWkgZXhpYmlyIGN1bHRvcyBkZSB0ZXLDp2EgZmVpcmFcclxuXHJcbiAgLy8gMiBjcmlhciB1bWEgc2VndW5kYSB2YXJpYXZlbCBxdWUgc2UgZm9yIGlndWFsIGEgXCJBdGl2b1wiIGV4aWJhIG8gYm90YW8gaW5zY3JldmVyXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Lyoge2V4aXN0ZSAmJiA8PnRlc3RlPC8+fSBcclxuICAgICAge2V4aXN0ZSA/IDw+dGVzdGU8Lz4gOiA8PnRlc3RlMjwvPn0gKi99XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5JZ3JlamEgQmF0aXN0YSDDgWd1YSBWaXZhIC0gUmliZWlyw6NvIFBpcmVzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7ZXhpc3RlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgLz5cclxuICAgICAgICAgICAgPGgxPkZvcm11bMOhcmlvIHBhcmEgY3VsdG8gZG9zIGpvdmVucyAoMjQvMDQpPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiB7KHF0ZFNhYmFkbyA8IHF0ZE1BeGltYSB8fCAqL31cclxuICAgICAgICAgIHsocXRkRG9taW5nb01hbmhhIDwgcXRkTUF4aW1hIHx8IHF0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSkgJiYgKFxyXG4gICAgICAgICAgICAvLyA8PlxyXG4gICAgICAgICAgICAvLyAgIHsoZGlhX3NlbSA9PSAwIHx8IGRpYV9zZW0gPT0gNSB8fCBkaWFfc2VtID09IDYpICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7bGlzdGFnZW0gPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7bm9tZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0Tm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgeyFub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXROb21lKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb2JyZW5vbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c29icmVub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRTb2JyZW5vbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29icmVub21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgeyFzb2JyZW5vbWVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldFNvYnJlbm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb2JyZW5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkRpc2NpcHVsYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3JlZGVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2lvbmUgc2V1IGRpc2NpcHVsYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaXNhYmVsYVwiPklzYWJlbGEgQW1hcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXRoZXVzXCI+TWF0aGV1cyBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlbGlwZVwiPkZlbGlwZSBSYW1vczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNpbGFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbGFzIFNvdXphXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbGFpbmVcIj5FbGFpbmUgSmVyZW1pYXMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHshcmVkZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBzZXUgZGlzY2lwdWxhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpc2FiZWxhXCI+SXNhYmVsYSBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hdGhldXNcIj5NYXRoZXVzIEFtYXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVsaXBlXCI+RmVsaXBlIFJhbW9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2lsYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2lsYXMgU291emFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVsYWluZVwiPkVsYWluZSBKZXJlbWlhcyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWFsIGN1bHRvIGRlc2VqYSBpcj88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdWx0byhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBvIGN1bHRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtxdGRTYWJhZG8gPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FiYWRvXCI+U8OhYmFkbyAtIDE5aHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbmhhXCI+U8OhYmFkbyAtIDE1aHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTm9pdGUgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vaXRlXCI+U8OhYmFkbyAtIDE3OjMwaHMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UXVhbnRhcyBjcmlhbsOnYXMgdmFpIGxldmFyIHBhcmEgbyBjdWx0aW5obz88L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIHtjcmlhbmNhc0xpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldENyaWFuY2FzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk51bWVybyBkZSBjcmlhbsOnYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHshY3JpYW5jYXNMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRDcmlhbmNhcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOdW1lcm8gZGUgY3JpYW7Dp2FzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFnYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTlocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicmVkXCI+IHZhZ2FzIGVuY2VycmFkYXM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cXRkU2FiYWRvIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gcmVzdGF7cXRkU2FiYWRvICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5tPC8+fTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZFNhYmFkb308L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+IHZhZ2F7cXRkU2FiYWRvICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5zPC8+fTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTw6FiYWRvIDE1OjAwaHMgLVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicmVkXCI+IHZhZ2FzIGVuY2VycmFkYXM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgIT0gcXRkTUF4aW1hIC0gMSAmJiA8Pm08Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+IHtxdGRNQXhpbWEgLSBxdGREb21pbmdvTWFuaGF9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhZ2F7cXRkRG9taW5nb01hbmhhICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5zPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTc6MzBocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWRcIj4gdmFnYXMgZW5jZXJyYWRhczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+bTwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZERvbWluZ29Ob2l0ZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFnYXtxdGREb21pbmdvTm9pdGUgIT0gcXRkTUF4aW1hIC0gMSAmJiA8PnM8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuICAgICAgICAgICAgICAgIHsgbW9yYW5nbyAmJiA8YnV0dG9uIG9uQ2xpY2s9e3NhbHZlfT5JbnNjcmV2ZXI8L2J1dHRvbj59XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xpc3RhZ2VtLmh0bWxcIiBjbGFzc05hbWU9XCJsaXN0YWdlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZlcmlmaXF1ZSBhIGxpc3RhZ2VtXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJyZWdhbmRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNhcnJlZ2FuZG8uLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIC8vICAgKX1cclxuICAgICAgICAgICAgLy8gPC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiB7cXRkU2FiYWRvID49IHF0ZE1BeGltYSAmJiAqL31cclxuICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gcXRkTUF4aW1hICYmXHJcbiAgICAgICAgICAgIHF0ZERvbWluZ29Ob2l0ZSA+PSBxdGRNQXhpbWEgJiZcclxuICAgICAgICAgICAgZGlhX3NlbSAhPSAxICYmXHJcbiAgICAgICAgICAgIGRpYV9zZW0gIT0gMiAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDMgJiZcclxuICAgICAgICAgICAgZGlhX3NlbSAhPSA0ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYWZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIEluZmVsaXptZW50ZSB0b2RvcyBvcyBjdWx0b3MgcHJlc2VuY2lhaXMgamEgZXNnb3RhcmFtIHN1YVxyXG4gICAgICAgICAgICAgICAgICBjYXBhY2lkYWRlIGV4aWdpZGEgcG9yIGxlaSwgbWFzIGFjb21wYW5oZSBvbmxpbmUgcGVsYXMgbm9zc2FzXHJcbiAgICAgICAgICAgICAgICAgIHJlZGVzIHNvY2lhaXNcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDU2dlTE5iRGY2OGxpbllaN1hCenV1Zy92aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy95b3V0dWJlLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0liYXZSaWJlaXJhb1BpcmVzL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pYmF2cnAvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbGlzdGFnZW0uaHRtbFwiIGNsYXNzTmFtZT1cImxpc3RhZ2VtX2VuY2VycmFkYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZlcmlmaXF1ZSBhIGxpc3RhZ2VtIGRvcyBjdWx0b3MgcHJlc2VuY2lhaXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIHtkaWFfc2VtID49IDEgJiYgZGlhX3NlbSA8PSA0ICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFmb1wiPlxyXG4gICAgICAgICAgICAgIE8gc2l0ZSBzw7MgYWJyaXLDoSBhcyBpbnNjcmnDp8O1ZXMgPGI+c2V4dGEtZmVpcmEgYXMgMDBoczwvYj5cclxuICAgICAgICAgICAgICBFbnF1YW50byBlc3BlcmEgbm9zIGFjb21wYW5oZSBuYXMgbm9zc2FzIHJlZGVzIHNvY2lhaXN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNTZ2VMTmJEZjY4bGluWVo3WEJ6dXVnL3ZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMveW91dHViZS5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vSWJhdlJpYmVpcmFvUGlyZXMvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2liYXZycC9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9