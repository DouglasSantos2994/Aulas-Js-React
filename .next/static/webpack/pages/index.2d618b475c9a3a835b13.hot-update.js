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
  }; // const abacaxi = ""


  var morango = ""; // null | "" | undefined | false

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
  }, morango ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "S\xE1bado 15:00hs") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "ter\xE7a 15:00hs"), " -", qtdDomingoManha >= qtdMAxima && __jsx("small", {
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
  }, morango ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "S\xE1bado 17:30hs") : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "ter\xE7a 17:30hs"), "-", qtdDomingoNoite >= qtdMAxima && __jsx("small", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlBhZ2UiLCJpbml0aWFsR0EiLCJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsInBhZ2V2aWV3IiwidXJsTG9jYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJub21lIiwic2V0Tm9tZSIsInJlZGUiLCJzZXRSZWRlIiwic29icmVub21lIiwic2V0U29icmVub21lIiwiY3VsdG8iLCJzZXRDdWx0byIsImNyaWFuY2FzIiwic2V0Q3JpYW5jYXMiLCJ1cmwiLCJkYXRlIiwiRGF0ZSIsImRpYV9zZW0iLCJnZXREYXkiLCJxdGRTYWJhZG8iLCJzZXRRdGRTYWJhZG8iLCJxdGREb21pbmdvTWFuaGEiLCJzZXRRdGREb21pbmdvTWFuaGEiLCJxdGREb21pbmdvTm9pdGUiLCJzZXRRdGREb21pbmdvTm9pdGUiLCJub21lTGltcGFyIiwic2V0Tm9tZUxpbXBhciIsInNvYnJlbm9tZUxpbXBhciIsInNldFNvYnJlbm9tZUxpbXBhciIsInJlZGVMaW1wYXIiLCJzZXRSZWRlTGltcGFyIiwiY3JpYW5jYXNMaW1wYXIiLCJzZXRDcmlhbmNhc0xpbXBhciIsImxpc3RhZ2VtIiwic2V0TGlzdGFnZW0iLCJxdGRNQXhpbWEiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjdWx0b1NhYmFkbyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwZXNzb2EiLCJsZW5ndGgiLCJjdWx0b0RvbWluZ29NYW5oYSIsImN1bHRvRG9taW5nb05vaXRlIiwiZG9SZW1vdmUiLCJpZCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsInBvc3QiLCJhbGVydCIsInNhbHZlIiwiZXhpc3RlQ3JpYW5jYXMiLCJ0b0xvd2VyQ2FzZSIsImNoZWdhZGEiLCJtb3JhbmdvIiwiZXhpc3Rl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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsdUJBQVQ7QUFBaUMsYUFBUyxFQUFDLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBSkYsRUFlRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUMsb0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBZkYsQ0FERixDQWhPTixDQVBKLENBREY7QUFxUkQ7O0dBL1lRM0IsSTs7S0FBQUEsSTtBQWlaTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmQ2MThiNDc1YzlhM2E4MzViMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XHJcbi8vIGltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC10aW1lem9uZVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBjb25zb2xlIH0gZnJvbSBcIndpbmRvdy1vci1nbG9iYWxcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBQYWdlKCkge1xyXG5cclxuICAvL1JFTkRJUkFaQcOHw4NPIENPTkRJQ0lPTkFMIE9VIENPTkRJw4fDg08gVEVSTkFSSUFcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxHQSgpIHtcclxuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShcIlVBLTE3MDkwOTg3NC0xXCIpO1xyXG4gICAgUmVhY3RHQS5wYWdldmlldyh1cmxMb2NhbCk7XHJcbiAgfVxyXG4gIGxldCB1cmxMb2NhbDtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdXJsTG9jYWwgPSB3aW5kb3cubG9jYXRpb24/LmhyZWY7XHJcbiAgfVxyXG4gIGluaXRpYWxHQSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25vbWUsIHNldE5vbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcmVkZSwgc2V0UmVkZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzb2JyZW5vbWUsIHNldFNvYnJlbm9tZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjdWx0bywgc2V0Q3VsdG9dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3JpYW5jYXMsIHNldENyaWFuY2FzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2FndWF2aXZhLXJwLmZpcmViYXNlaW8uY29tL3Rlc3RlLmpzb25cIjtcclxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgdmFyIGRpYV9zZW0gPSBkYXRlLmdldERheSgpO1xyXG5cclxuICAvLyB2YXIgZGF0ZU1vbWVudCA9IG1vbWVudChgJHtkYXRlfWApO1xyXG4gIC8vIGRhdGVNb21lbnQudHooXCJBbWVyaWNhL1Nhb19QYXVsb1wiKS5mb3JtYXQoXCJoYSB6XCIpO1xyXG4gIC8vIG1vbWVudC5sb2NhbGUoXCJwdC1CUlwiKTtcclxuICAvLyBjb25zdCBub3ZhRGF0YSA9IG5ldyBEYXRlKGRhdGVNb21lbnQpO1xyXG4gIC8vIHZhciBkaWFfc2VtID0gbW9tZW50KG5vdmFEYXRhKS5mb3JtYXQoXCJkZGRkXCIpO1xyXG4gIGNvbnN0IFtxdGRTYWJhZG8sIHNldFF0ZFNhYmFkb10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtxdGREb21pbmdvTWFuaGEsIHNldFF0ZERvbWluZ29NYW5oYV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtxdGREb21pbmdvTm9pdGUsIHNldFF0ZERvbWluZ29Ob2l0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtub21lTGltcGFyLCBzZXROb21lTGltcGFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzb2JyZW5vbWVMaW1wYXIsIHNldFNvYnJlbm9tZUxpbXBhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcmVkZUxpbXBhciwgc2V0UmVkZUxpbXBhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbY3JpYW5jYXNMaW1wYXIsIHNldENyaWFuY2FzTGltcGFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsaXN0YWdlbSwgc2V0TGlzdGFnZW1dID0gdXNlU3RhdGUoKTtcclxuICB2YXIgcXRkTUF4aW1hID0gNzU7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBBeGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBjdWx0b1NhYmFkbyA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcigocGVzc29hKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbcGVzc29hXS5jdWx0byA9PSBcInNhYmFkb1wiO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0UXRkU2FiYWRvKGN1bHRvU2FiYWRvLmxlbmd0aCk7XHJcbiAgICAgIGNvbnN0IGN1bHRvRG9taW5nb01hbmhhID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKChwZXNzb2EpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YVtwZXNzb2FdLmN1bHRvID09IFwibWFuaGFcIjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFF0ZERvbWluZ29NYW5oYShjdWx0b0RvbWluZ29NYW5oYS5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBjdWx0b0RvbWluZ29Ob2l0ZSA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcigocGVzc29hKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbcGVzc29hXS5jdWx0byA9PSBcIm5vaXRlXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRRdGREb21pbmdvTm9pdGUoY3VsdG9Eb21pbmdvTm9pdGUubGVuZ3RoKTtcclxuICAgICAgc2V0TGlzdGFnZW0oZGF0YSk7XHJcbiAgICAgIC8vIEFURU7Dh8ODTyBVU0UgRVNTRSBDw5NESUdPIENPTSBDQVVURUxBLCBSRU1PVkUgVFVETyAvL1xyXG4gICAgICAvLyBpZiAoZGlhX3NlbSA+PSAxICYmIGRpYV9zZW0gPD0gNSkge1xyXG4gICAgICAvLyAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoaW5kaXZpZHVvKSA9PiB7XHJcbiAgICAgIC8vICAgICBpZiAoaW5kaXZpZHVvWzBdICE9IFwiYmFzZVwiKSB7XHJcbiAgICAgIC8vICAgICAgIGRvUmVtb3ZlKGluZGl2aWR1b1swXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG4gIGNvbnN0IGRvUmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgICByZW1vdmUoYGh0dHBzOi8vYWd1YXZpdmEtcnAuZmlyZWJhc2Vpby5jb20vdGVzdGUvJHtpZH0uanNvbmApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlID0gKHVybCkgPT4ge1xyXG4gICAgQXhpb3MuZGVsZXRlKHVybCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGB2b2PDqiBkZWxldG91ICR7dXJsfWApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICB2YXIgcmVkaXJlY3Q7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJlZGlyZWN0ID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgfVxyXG4gIGNvbnN0IHBvc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgQXhpb3MucG9zdCh1cmwsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXROb21lTGltcGFyKCFub21lTGltcGFyKTtcclxuICAgICAgc2V0U29icmVub21lTGltcGFyKCFzb2JyZW5vbWVMaW1wYXIpO1xyXG4gICAgICBzZXRSZWRlTGltcGFyKCFyZWRlTGltcGFyKTtcclxuICAgICAgc2V0Q3JpYW5jYXNMaW1wYXIoIWNyaWFuY2FzTGltcGFyKTtcclxuICAgICAgYWxlcnQoXCJ2b2PDqiBjb25maXJtb3Ugc3VhIHByZXNlbsOnYSBubyBjdWx0b1wiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvbGlzdGFnZW0uaHRtbFwiO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2FsdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAobm9tZSAmJiBzb2JyZW5vbWUgJiYgcmVkZSAmJiBjdWx0bykge1xyXG4gICAgICBjb25zdCBleGlzdGVDcmlhbmNhcyA9IGNyaWFuY2FzID8gY3JpYW5jYXMgOiBcIjBcIjtcclxuICAgICAgcG9zdCh7XHJcbiAgICAgICAgbm9tZTogbm9tZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgIHNvYnJlbm9tZTogc29icmVub21lLFxyXG4gICAgICAgIHJlZGU6IHJlZGUsXHJcbiAgICAgICAgY3VsdG86IGN1bHRvLFxyXG4gICAgICAgIGNyaWFuY2FzOiBleGlzdGVDcmlhbmNhcyxcclxuICAgICAgICBjaGVnYWRhOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlVtIG91IG1haXMgY2FtcG9zIGVzdMOjbyBlbSBicmFuY29cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgYWJhY2F4aSA9IFwiXCJcclxuICBjb25zdCBtb3JhbmdvID0gXCJcIlxyXG5cclxuICAvLyBudWxsIHwgXCJcIiB8IHVuZGVmaW5lZCB8IGZhbHNlXHJcbiAgY29uc3QgZXhpc3RlID0gdHJ1ZVxyXG5cclxuXHJcbiAgLy8gMSBzZSBldSBjb2xvY2FyIG1pbmhhIHZhcmlhdmVsIGNvbSB1bSB2YWxvciBxdWUgZXhpc3RlIG1ldSBzZWxlY3QgdmFpIGV4aWJpciBvcyBjdWx0b3MgZGUgc2FiYWRvc1xyXG4gIC8vcXVhbmRvIG5hbyBhdGVuZGVyIGVsYSB2YWkgZXhpYmlyIGN1bHRvcyBkZSB0ZXLDp2EgZmVpcmFcclxuXHJcbiAgLy8gMiBjcmlhciB1bWEgc2VndW5kYSB2YXJpYXZlbCBxdWUgc2UgZm9yIGlndWFsIGEgXCJBdGl2b1wiIGV4aWJhIG8gYm90YW8gaW5zY3JldmVyXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Lyoge2V4aXN0ZSAmJiA8PnRlc3RlPC8+fSBcclxuICAgICAge2V4aXN0ZSA/IDw+dGVzdGU8Lz4gOiA8PnRlc3RlMjwvPn0gKi99XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5JZ3JlamEgQmF0aXN0YSDDgWd1YSBWaXZhIC0gUmliZWlyw6NvIFBpcmVzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7ZXhpc3RlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgLz5cclxuICAgICAgICAgICAgPGgxPkZvcm11bMOhcmlvIHBhcmEgY3VsdG8gZG9zIGpvdmVucyAoMjQvMDQpPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiB7KHF0ZFNhYmFkbyA8IHF0ZE1BeGltYSB8fCAqL31cclxuICAgICAgICAgIHsocXRkRG9taW5nb01hbmhhIDwgcXRkTUF4aW1hIHx8IHF0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSkgJiYgKFxyXG4gICAgICAgICAgICAvLyA8PlxyXG4gICAgICAgICAgICAvLyAgIHsoZGlhX3NlbSA9PSAwIHx8IGRpYV9zZW0gPT0gNSB8fCBkaWFfc2VtID09IDYpICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7bGlzdGFnZW0gPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7bm9tZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0Tm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgeyFub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXROb21lKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb2JyZW5vbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c29icmVub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRTb2JyZW5vbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29icmVub21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgeyFzb2JyZW5vbWVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldFNvYnJlbm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb2JyZW5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkRpc2NpcHVsYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3JlZGVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2lvbmUgc2V1IGRpc2NpcHVsYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaXNhYmVsYVwiPklzYWJlbGEgQW1hcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXRoZXVzXCI+TWF0aGV1cyBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlbGlwZVwiPkZlbGlwZSBSYW1vczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNpbGFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbGFzIFNvdXphXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbGFpbmVcIj5FbGFpbmUgSmVyZW1pYXMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHshcmVkZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBzZXUgZGlzY2lwdWxhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpc2FiZWxhXCI+SXNhYmVsYSBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hdGhldXNcIj5NYXRoZXVzIEFtYXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVsaXBlXCI+RmVsaXBlIFJhbW9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2lsYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2lsYXMgU291emFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVsYWluZVwiPkVsYWluZSBKZXJlbWlhcyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWFsIGN1bHRvIGRlc2VqYSBpcj88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDdWx0byhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBvIGN1bHRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHtxdGRTYWJhZG8gPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FiYWRvXCI+U8OhYmFkbyAtIDE5aHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbmhhXCI+U8OhYmFkbyAtIDE1aHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTm9pdGUgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vaXRlXCI+U8OhYmFkbyAtIDE3OjMwaHMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UXVhbnRhcyBjcmlhbsOnYXMgdmFpIGxldmFyIHBhcmEgbyBjdWx0aW5obz88L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIHtjcmlhbmNhc0xpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldENyaWFuY2FzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk51bWVybyBkZSBjcmlhbsOnYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHshY3JpYW5jYXNMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRDcmlhbmNhcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOdW1lcm8gZGUgY3JpYW7Dp2FzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFnYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTlocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicmVkXCI+IHZhZ2FzIGVuY2VycmFkYXM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cXRkU2FiYWRvIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gcmVzdGF7cXRkU2FiYWRvICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5tPC8+fTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZFNhYmFkb308L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+IHZhZ2F7cXRkU2FiYWRvICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5zPC8+fTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgIHttb3JhbmdvPyA8PlPDoWJhZG8gMTU6MDBoczwvPiA6IDw+dGVyw6dhIDE1OjAwaHM8Lz59IC1cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInJlZFwiPiB2YWdhcyBlbmNlcnJhZGFzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5tPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiB7cXRkTUF4aW1hIC0gcXRkRG9taW5nb01hbmhhfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWdhe3F0ZERvbWluZ29NYW5oYSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+czwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge21vcmFuZ28/IDw+U8OhYmFkbyAxNzozMGhzPC8+IDogPD50ZXLDp2EgMTc6MzBoczwvPn0tXHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWRcIj4gdmFnYXMgZW5jZXJyYWRhczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+bTwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZERvbWluZ29Ob2l0ZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFnYXtxdGREb21pbmdvTm9pdGUgIT0gcXRkTUF4aW1hIC0gMSAmJiA8PnM8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuICAgICAgICAgICAgICAgIHsgbW9yYW5nbyAmJiA8YnV0dG9uIG9uQ2xpY2s9e3NhbHZlfT5JbnNjcmV2ZXI8L2J1dHRvbj59XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xpc3RhZ2VtLmh0bWxcIiBjbGFzc05hbWU9XCJsaXN0YWdlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZlcmlmaXF1ZSBhIGxpc3RhZ2VtXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJyZWdhbmRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2FkaW5nLmdpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNhcnJlZ2FuZG8uLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIC8vICAgKX1cclxuICAgICAgICAgICAgLy8gPC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHsvKiB7cXRkU2FiYWRvID49IHF0ZE1BeGltYSAmJiAqL31cclxuICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gcXRkTUF4aW1hICYmXHJcbiAgICAgICAgICAgIHF0ZERvbWluZ29Ob2l0ZSA+PSBxdGRNQXhpbWEgJiZcclxuICAgICAgICAgICAgZGlhX3NlbSAhPSAxICYmXHJcbiAgICAgICAgICAgIGRpYV9zZW0gIT0gMiAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDMgJiZcclxuICAgICAgICAgICAgZGlhX3NlbSAhPSA0ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYWZvXCI+XHJcbiAgICAgICAgICAgICAgICAgIEluZmVsaXptZW50ZSB0b2RvcyBvcyBjdWx0b3MgcHJlc2VuY2lhaXMgamEgZXNnb3RhcmFtIHN1YVxyXG4gICAgICAgICAgICAgICAgICBjYXBhY2lkYWRlIGV4aWdpZGEgcG9yIGxlaSwgbWFzIGFjb21wYW5oZSBvbmxpbmUgcGVsYXMgbm9zc2FzXHJcbiAgICAgICAgICAgICAgICAgIHJlZGVzIHNvY2lhaXNcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDU2dlTE5iRGY2OGxpbllaN1hCenV1Zy92aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy95b3V0dWJlLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0liYXZSaWJlaXJhb1BpcmVzL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pYmF2cnAvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbGlzdGFnZW0uaHRtbFwiIGNsYXNzTmFtZT1cImxpc3RhZ2VtX2VuY2VycmFkYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZlcmlmaXF1ZSBhIGxpc3RhZ2VtIGRvcyBjdWx0b3MgcHJlc2VuY2lhaXNcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgey8qIHtkaWFfc2VtID49IDEgJiYgZGlhX3NlbSA8PSA0ICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFmb1wiPlxyXG4gICAgICAgICAgICAgIE8gc2l0ZSBzw7MgYWJyaXLDoSBhcyBpbnNjcmnDp8O1ZXMgPGI+c2V4dGEtZmVpcmEgYXMgMDBoczwvYj5cclxuICAgICAgICAgICAgICBFbnF1YW50byBlc3BlcmEgbm9zIGFjb21wYW5oZSBuYXMgbm9zc2FzIHJlZGVzIHNvY2lhaXN7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWRlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNTZ2VMTmJEZjY4bGluWVo3WEJ6dXVnL3ZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMveW91dHViZS5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vSWJhdlJpYmVpcmFvUGlyZXMvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2liYXZycC9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9