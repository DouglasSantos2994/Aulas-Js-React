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

  var dia = true;
  var inscricao = "cade"; // null | "" | undefined | false

  var existe = true; // 1 se eu colocar minha variavel com um valor que existe meu select vai exibir os cultos de sabados
  //quando nao atender ela vai exibir cultos de terça feira
  // 2 criar uma segunda variavel que se for igual a "Ativo" exiba o botao inscrever

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, "Igreja Batista \xC1gua Viva - Ribeir\xE3o Pires")), existe && __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/images/logo.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "Formul\xE1rio para culto dos jovens (24/04)")), (qtdDomingoManha < qtdMAxima || qtdDomingoNoite < qtdMAxima) && // <>
  //   {(dia_sem == 0 || dia_sem == 5 || dia_sem == 6) && (
  __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, listagem ? __jsx("div", {
    className: "form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 17
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 156,
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
      lineNumber: 165,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
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
      lineNumber: 177,
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
      lineNumber: 185,
      columnNumber: 21
    }
  }), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
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
      lineNumber: 195,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 23
    }
  }, "Selecione seu discipulado"), __jsx("option", {
    value: "isabela",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 23
    }
  }, "Isabela Amaro"), __jsx("option", {
    value: "matheus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 23
    }
  }, "Matheus Amaro"), __jsx("option", {
    value: "felipe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 23
    }
  }, "Felipe Ramos"), __jsx("option", {
    value: "silas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 23
    }
  }, "Silas Souza"), __jsx("option", {
    value: "elaine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
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
      lineNumber: 212,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 23
    }
  }, "Selecione seu discipulado"), __jsx("option", {
    value: "isabela",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 23
    }
  }, "Isabela Amaro"), __jsx("option", {
    value: "matheus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 23
    }
  }, "Matheus Amaro"), __jsx("option", {
    value: "felipe",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 23
    }
  }, "Felipe Ramos"), __jsx("option", {
    value: "silas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 23
    }
  }, "Silas Souza"), __jsx("option", {
    value: "elaine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }, "Elaine Jeremias ")), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 19
    }
  }), __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 19
    }
  }, "Qual culto deseja ir?"), dia ? __jsx("select", {
    onChange: function onChange(e) {
      setCulto(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 23
    }
  }, "Selecione o culto"), qtdDomingoManha < qtdMAxima && __jsx("option", {
    value: "manha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 25
    }
  }, " S\xE1bado - 15hs "), qtdDomingoNoite < qtdMAxima && __jsx("option", {
    value: "noite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  }, "S\xE1bado - 17:30hs ")) : __jsx("select", {
    onChange: function onChange(e) {
      setCulto(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 23
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 23
    }
  }, "Selecione o culto"), qtdDomingoManha < qtdMAxima && __jsx("option", {
    value: "manha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 25
    }
  }, " Ter\xE7a - 15hs "), qtdDomingoNoite < qtdMAxima && __jsx("option", {
    value: "noite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 25
    }
  }, "Ter\xE7a - 17:30hs ")), __jsx("div", {
    className: "vagas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 21
    }
  }, "S\xE1bado 15:00hs -", qtdDomingoManha >= qtdMAxima && __jsx("small", {
    className: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 25
    }
  }, " vagas encerradas"), qtdDomingoManha < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoManha >= 0 && __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 29
    }
  }, " ", qtdMAxima - qtdDomingoManha), qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s")))), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 21
    }
  }, "S\xE1bado 17:30hs -", qtdDomingoNoite >= qtdMAxima && __jsx("small", {
    className: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 25
    }
  }, " vagas encerradas"), qtdDomingoNoite < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoNoite >= 0 && __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 29
    }
  }, " ", qtdMAxima - qtdDomingoNoite), qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s"))))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 19
    }
  }), inscricao === "ativo" && __jsx("button", {
    onClick: salve,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 45
    }
  }, "Inscrever"), __jsx("a", {
    href: "/listagem.html",
    className: "listagem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 19
    }
  }, "Verifique a listagem")) : __jsx("p", {
    className: "carregando",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/loading.gif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 19
    }
  }, "Carregando..."))) //   )}
  // </>
  , qtdDomingoManha >= qtdMAxima && qtdDomingoNoite >= qtdMAxima && dia_sem != 1 && dia_sem != 2 && dia_sem != 3 && dia_sem != 4 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "paragrafo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 17
    }
  }, "Infelizmente todos os cultos presenciais ja esgotaram sua capacidade exigida por lei, mas acompanhe online pelas nossas redes sociais", __jsx("div", {
    className: "redes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.youtube.com/channel/UCSgeLNbDf68linYZ7XBzuug/videos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/youtube.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 23
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/IbavRibeiraoPires/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 23
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/ibavrp/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/instagram.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 23
    }
  }))), __jsx("a", {
    href: "/listagem.html",
    className: "listagem_encerrada",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlBhZ2UiLCJpbml0aWFsR0EiLCJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsInBhZ2V2aWV3IiwidXJsTG9jYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJub21lIiwic2V0Tm9tZSIsInJlZGUiLCJzZXRSZWRlIiwic29icmVub21lIiwic2V0U29icmVub21lIiwiY3VsdG8iLCJzZXRDdWx0byIsImNyaWFuY2FzIiwic2V0Q3JpYW5jYXMiLCJ1cmwiLCJkYXRlIiwiRGF0ZSIsImRpYV9zZW0iLCJnZXREYXkiLCJxdGRTYWJhZG8iLCJzZXRRdGRTYWJhZG8iLCJxdGREb21pbmdvTWFuaGEiLCJzZXRRdGREb21pbmdvTWFuaGEiLCJxdGREb21pbmdvTm9pdGUiLCJzZXRRdGREb21pbmdvTm9pdGUiLCJub21lTGltcGFyIiwic2V0Tm9tZUxpbXBhciIsInNvYnJlbm9tZUxpbXBhciIsInNldFNvYnJlbm9tZUxpbXBhciIsInJlZGVMaW1wYXIiLCJzZXRSZWRlTGltcGFyIiwiY3JpYW5jYXNMaW1wYXIiLCJzZXRDcmlhbmNhc0xpbXBhciIsImxpc3RhZ2VtIiwic2V0TGlzdGFnZW0iLCJxdGRNQXhpbWEiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjdWx0b1NhYmFkbyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwZXNzb2EiLCJsZW5ndGgiLCJjdWx0b0RvbWluZ29NYW5oYSIsImN1bHRvRG9taW5nb05vaXRlIiwiZG9SZW1vdmUiLCJpZCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsInBvc3QiLCJhbGVydCIsInNhbHZlIiwiZXhpc3RlQ3JpYW5jYXMiLCJ0b0xvd2VyQ2FzZSIsImNoZWdhZGEiLCJkaWEiLCJpbnNjcmljYW8i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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsaUVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHFCQUFUO0FBQStCLGFBQVMsRUFBQyxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUcsUUFBSSxFQUFDLDZDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxzQkFBVDtBQUFnQyxhQUFTLEVBQUMsTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFPRTtBQUFHLFFBQUksRUFBQyxtQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsdUJBQVQ7QUFBaUMsYUFBUyxFQUFDLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBSkYsRUFlRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUMsb0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBZkYsQ0FERixDQXRQTixDQVBKLENBREY7QUEyU0Q7O0dBdGFRM0IsSTs7S0FBQUEsSTtBQXdhTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDU1NTViM2RiMjAxNjI5ZTdjZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0R0EgZnJvbSBcInJlYWN0LWdhXCI7XHJcbi8vIGltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudC10aW1lem9uZVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBpbXBvcnQgeyBjb25zb2xlIH0gZnJvbSBcIndpbmRvdy1vci1nbG9iYWxcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBQYWdlKCkge1xyXG5cclxuICAvL1JFTkRJUkFaQcOHw4NPIENPTkRJQ0lPTkFMIE9VIENPTkRJw4fDg08gVEVSTkFSSUFcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxHQSgpIHtcclxuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShcIlVBLTE3MDkwOTg3NC0xXCIpO1xyXG4gICAgUmVhY3RHQS5wYWdldmlldyh1cmxMb2NhbCk7XHJcbiAgfVxyXG4gIGxldCB1cmxMb2NhbDtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdXJsTG9jYWwgPSB3aW5kb3cubG9jYXRpb24/LmhyZWY7XHJcbiAgfVxyXG4gIGluaXRpYWxHQSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25vbWUsIHNldE5vbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcmVkZSwgc2V0UmVkZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzb2JyZW5vbWUsIHNldFNvYnJlbm9tZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjdWx0bywgc2V0Q3VsdG9dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3JpYW5jYXMsIHNldENyaWFuY2FzXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2FndWF2aXZhLXJwLmZpcmViYXNlaW8uY29tL3Rlc3RlLmpzb25cIjtcclxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgdmFyIGRpYV9zZW0gPSBkYXRlLmdldERheSgpO1xyXG5cclxuICAvLyB2YXIgZGF0ZU1vbWVudCA9IG1vbWVudChgJHtkYXRlfWApO1xyXG4gIC8vIGRhdGVNb21lbnQudHooXCJBbWVyaWNhL1Nhb19QYXVsb1wiKS5mb3JtYXQoXCJoYSB6XCIpO1xyXG4gIC8vIG1vbWVudC5sb2NhbGUoXCJwdC1CUlwiKTtcclxuICAvLyBjb25zdCBub3ZhRGF0YSA9IG5ldyBEYXRlKGRhdGVNb21lbnQpO1xyXG4gIC8vIHZhciBkaWFfc2VtID0gbW9tZW50KG5vdmFEYXRhKS5mb3JtYXQoXCJkZGRkXCIpO1xyXG4gIGNvbnN0IFtxdGRTYWJhZG8sIHNldFF0ZFNhYmFkb10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtxdGREb21pbmdvTWFuaGEsIHNldFF0ZERvbWluZ29NYW5oYV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtxdGREb21pbmdvTm9pdGUsIHNldFF0ZERvbWluZ29Ob2l0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtub21lTGltcGFyLCBzZXROb21lTGltcGFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzb2JyZW5vbWVMaW1wYXIsIHNldFNvYnJlbm9tZUxpbXBhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcmVkZUxpbXBhciwgc2V0UmVkZUxpbXBhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbY3JpYW5jYXNMaW1wYXIsIHNldENyaWFuY2FzTGltcGFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtsaXN0YWdlbSwgc2V0TGlzdGFnZW1dID0gdXNlU3RhdGUoKTtcclxuICB2YXIgcXRkTUF4aW1hID0gNzU7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBBeGlvcy5nZXQodXJsKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBjb25zdCBjdWx0b1NhYmFkbyA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcigocGVzc29hKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbcGVzc29hXS5jdWx0byA9PSBcInNhYmFkb1wiO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0UXRkU2FiYWRvKGN1bHRvU2FiYWRvLmxlbmd0aCk7XHJcbiAgICAgIGNvbnN0IGN1bHRvRG9taW5nb01hbmhhID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKChwZXNzb2EpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YVtwZXNzb2FdLmN1bHRvID09IFwibWFuaGFcIjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFF0ZERvbWluZ29NYW5oYShjdWx0b0RvbWluZ29NYW5oYS5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBjdWx0b0RvbWluZ29Ob2l0ZSA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcigocGVzc29hKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbcGVzc29hXS5jdWx0byA9PSBcIm5vaXRlXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRRdGREb21pbmdvTm9pdGUoY3VsdG9Eb21pbmdvTm9pdGUubGVuZ3RoKTtcclxuICAgICAgc2V0TGlzdGFnZW0oZGF0YSk7XHJcbiAgICAgIC8vIEFURU7Dh8ODTyBVU0UgRVNTRSBDw5NESUdPIENPTSBDQVVURUxBLCBSRU1PVkUgVFVETyAvL1xyXG4gICAgICAvLyBpZiAoZGlhX3NlbSA+PSAxICYmIGRpYV9zZW0gPD0gNSkge1xyXG4gICAgICAvLyAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoaW5kaXZpZHVvKSA9PiB7XHJcbiAgICAgIC8vICAgICBpZiAoaW5kaXZpZHVvWzBdICE9IFwiYmFzZVwiKSB7XHJcbiAgICAgIC8vICAgICAgIGRvUmVtb3ZlKGluZGl2aWR1b1swXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG4gIGNvbnN0IGRvUmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgICByZW1vdmUoYGh0dHBzOi8vYWd1YXZpdmEtcnAuZmlyZWJhc2Vpby5jb20vdGVzdGUvJHtpZH0uanNvbmApO1xyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlID0gKHVybCkgPT4ge1xyXG4gICAgQXhpb3MuZGVsZXRlKHVybCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGB2b2PDqiBkZWxldG91ICR7dXJsfWApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICB2YXIgcmVkaXJlY3Q7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJlZGlyZWN0ID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgfVxyXG4gIGNvbnN0IHBvc3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgQXhpb3MucG9zdCh1cmwsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXROb21lTGltcGFyKCFub21lTGltcGFyKTtcclxuICAgICAgc2V0U29icmVub21lTGltcGFyKCFzb2JyZW5vbWVMaW1wYXIpO1xyXG4gICAgICBzZXRSZWRlTGltcGFyKCFyZWRlTGltcGFyKTtcclxuICAgICAgc2V0Q3JpYW5jYXNMaW1wYXIoIWNyaWFuY2FzTGltcGFyKTtcclxuICAgICAgYWxlcnQoXCJ2b2PDqiBjb25maXJtb3Ugc3VhIHByZXNlbsOnYSBubyBjdWx0b1wiKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvbGlzdGFnZW0uaHRtbFwiO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2FsdmUgPSAoKSA9PiB7XHJcbiAgICBpZiAobm9tZSAmJiBzb2JyZW5vbWUgJiYgcmVkZSAmJiBjdWx0bykge1xyXG4gICAgICBjb25zdCBleGlzdGVDcmlhbmNhcyA9IGNyaWFuY2FzID8gY3JpYW5jYXMgOiBcIjBcIjtcclxuICAgICAgcG9zdCh7XHJcbiAgICAgICAgbm9tZTogbm9tZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgIHNvYnJlbm9tZTogc29icmVub21lLFxyXG4gICAgICAgIHJlZGU6IHJlZGUsXHJcbiAgICAgICAgY3VsdG86IGN1bHRvLFxyXG4gICAgICAgIGNyaWFuY2FzOiBleGlzdGVDcmlhbmNhcyxcclxuICAgICAgICBjaGVnYWRhOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydChcIlVtIG91IG1haXMgY2FtcG9zIGVzdMOjbyBlbSBicmFuY29cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiBcclxuICBjb25zdCBkaWEgPSB0cnVlXHJcbiAgY29uc3QgaW5zY3JpY2FvID0gXCJjYWRlXCJcclxuXHJcbiAgLy8gbnVsbCB8IFwiXCIgfCB1bmRlZmluZWQgfCBmYWxzZVxyXG4gIGNvbnN0IGV4aXN0ZSA9IHRydWVcclxuXHJcblxyXG4gIC8vIDEgc2UgZXUgY29sb2NhciBtaW5oYSB2YXJpYXZlbCBjb20gdW0gdmFsb3IgcXVlIGV4aXN0ZSBtZXUgc2VsZWN0IHZhaSBleGliaXIgb3MgY3VsdG9zIGRlIHNhYmFkb3NcclxuICAvL3F1YW5kbyBuYW8gYXRlbmRlciBlbGEgdmFpIGV4aWJpciBjdWx0b3MgZGUgdGVyw6dhIGZlaXJhXHJcblxyXG4gIC8vIDIgY3JpYXIgdW1hIHNlZ3VuZGEgdmFyaWF2ZWwgcXVlIHNlIGZvciBpZ3VhbCBhIFwiQXRpdm9cIiBleGliYSBvIGJvdGFvIGluc2NyZXZlclxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIHtleGlzdGUgJiYgPD50ZXN0ZTwvPn0gXHJcbiAgICAgIHtleGlzdGUgPyA8PnRlc3RlPC8+IDogPD50ZXN0ZTI8Lz59ICovfVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SWdyZWphIEJhdGlzdGEgw4FndWEgVml2YSAtIFJpYmVpcsOjbyBQaXJlczwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge2V4aXN0ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgIDxoMT5Gb3JtdWzDoXJpbyBwYXJhIGN1bHRvIGRvcyBqb3ZlbnMgKDI0LzA0KTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogeyhxdGRTYWJhZG8gPCBxdGRNQXhpbWEgfHwgKi99XHJcbiAgICAgICAgICB7KHF0ZERvbWluZ29NYW5oYSA8IHF0ZE1BeGltYSB8fCBxdGREb21pbmdvTm9pdGUgPCBxdGRNQXhpbWEpICYmIChcclxuICAgICAgICAgICAgLy8gPD5cclxuICAgICAgICAgICAgLy8gICB7KGRpYV9zZW0gPT0gMCB8fCBkaWFfc2VtID09IDUgfHwgZGlhX3NlbSA9PSA2KSAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge2xpc3RhZ2VtID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge25vbWVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldE5vbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHshbm9tZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0Tm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+U29icmVub21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3NvYnJlbm9tZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0U29icmVub21lKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNvYnJlbm9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHshc29icmVub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRTb2JyZW5vbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29icmVub21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5EaXNjaXB1bGFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHtyZWRlTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVkZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNpb25lIHNldSBkaXNjaXB1bGFkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImlzYWJlbGFcIj5Jc2FiZWxhIEFtYXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWF0aGV1c1wiPk1hdGhldXMgQW1hcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZWxpcGVcIj5GZWxpcGUgUmFtb3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaWxhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaWxhcyBTb3V6YVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZWxhaW5lXCI+RWxhaW5lIEplcmVtaWFzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7IXJlZGVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2lvbmUgc2V1IGRpc2NpcHVsYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaXNhYmVsYVwiPklzYWJlbGEgQW1hcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXRoZXVzXCI+TWF0aGV1cyBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlbGlwZVwiPkZlbGlwZSBSYW1vczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNpbGFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbGFzIFNvdXphXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbGFpbmVcIj5FbGFpbmUgSmVyZW1pYXMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UXVhbCBjdWx0byBkZXNlamEgaXI/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge2RpYSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1bHRvKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2lvbmUgbyBjdWx0bzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIHtxdGRTYWJhZG8gPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FiYWRvXCI+U8OhYmFkbyAtIDE5aHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFuaGFcIj4gU8OhYmFkbyAtIDE1aHMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTm9pdGUgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9pdGVcIj5Tw6FiYWRvIC0gMTc6MzBocyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VsdG8oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBvIGN1bHRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyoge3F0ZFNhYmFkbyA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FiYWRvXCI+U8OhYmFkbyAtIDE5aHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbmhhXCI+IFRlcsOnYSAtIDE1aHMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTm9pdGUgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9pdGVcIj5UZXLDp2EgLSAxNzozMGhzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD59XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UXVhbnRhcyBjcmlhbsOnYXMgdmFpIGxldmFyIHBhcmEgbyBjdWx0aW5obz88L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIHtjcmlhbmNhc0xpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldENyaWFuY2FzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk51bWVybyBkZSBjcmlhbsOnYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHshY3JpYW5jYXNMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRDcmlhbmNhcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOdW1lcm8gZGUgY3JpYW7Dp2FzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFnYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTlocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicmVkXCI+IHZhZ2FzIGVuY2VycmFkYXM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cXRkU2FiYWRvIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gcmVzdGF7cXRkU2FiYWRvICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5tPC8+fTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZFNhYmFkb308L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+IHZhZ2F7cXRkU2FiYWRvICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5zPC8+fTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTw6FiYWRvIDE1OjAwaHMgLVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicmVkXCI+IHZhZ2FzIGVuY2VycmFkYXM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgIT0gcXRkTUF4aW1hIC0gMSAmJiA8Pm08Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+IHtxdGRNQXhpbWEgLSBxdGREb21pbmdvTWFuaGF9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhZ2F7cXRkRG9taW5nb01hbmhhICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5zPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTc6MzBocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWRcIj4gdmFnYXMgZW5jZXJyYWRhczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+bTwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZERvbWluZ29Ob2l0ZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFnYXtxdGREb21pbmdvTm9pdGUgIT0gcXRkTUF4aW1hIC0gMSAmJiA8PnM8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2luc2NyaWNhbyA9PT0gXCJhdGl2b1wiICYmIDxidXR0b24gb25DbGljaz17c2FsdmV9Pkluc2NyZXZlcjwvYnV0dG9uPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbGlzdGFnZW0uaHRtbFwiIGNsYXNzTmFtZT1cImxpc3RhZ2VtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpcXVlIGEgbGlzdGFnZW1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnJlZ2FuZG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmcuZ2lmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FycmVnYW5kby4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgLy8gICApfVxyXG4gICAgICAgICAgICAvLyA8Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgey8qIHtxdGRTYWJhZG8gPj0gcXRkTUF4aW1hICYmICovfVxyXG4gICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSBxdGRNQXhpbWEgJiZcclxuICAgICAgICAgICAgcXRkRG9taW5nb05vaXRlID49IHF0ZE1BeGltYSAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDEgJiZcclxuICAgICAgICAgICAgZGlhX3NlbSAhPSAyICYmXHJcbiAgICAgICAgICAgIGRpYV9zZW0gIT0gMyAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhZm9cIj5cclxuICAgICAgICAgICAgICAgICAgSW5mZWxpem1lbnRlIHRvZG9zIG9zIGN1bHRvcyBwcmVzZW5jaWFpcyBqYSBlc2dvdGFyYW0gc3VhXHJcbiAgICAgICAgICAgICAgICAgIGNhcGFjaWRhZGUgZXhpZ2lkYSBwb3IgbGVpLCBtYXMgYWNvbXBhbmhlIG9ubGluZSBwZWxhcyBub3NzYXNcclxuICAgICAgICAgICAgICAgICAgcmVkZXMgc29jaWFpc1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNTZ2VMTmJEZjY4bGluWVo3WEJ6dXVnL3ZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3lvdXR1YmUuc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vSWJhdlJpYmVpcmFvUGlyZXMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2suc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2liYXZycC9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9saXN0YWdlbS5odG1sXCIgY2xhc3NOYW1lPVwibGlzdGFnZW1fZW5jZXJyYWRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpcXVlIGEgbGlzdGFnZW0gZG9zIGN1bHRvcyBwcmVzZW5jaWFpc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Lyoge2RpYV9zZW0gPj0gMSAmJiBkaWFfc2VtIDw9IDQgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYWZvXCI+XHJcbiAgICAgICAgICAgICAgTyBzaXRlIHPDsyBhYnJpcsOhIGFzIGluc2NyacOnw7VlcyA8Yj5zZXh0YS1mZWlyYSBhcyAwMGhzPC9iPlxyXG4gICAgICAgICAgICAgIEVucXVhbnRvIGVzcGVyYSBub3MgYWNvbXBhbmhlIG5hcyBub3NzYXMgcmVkZXMgc29jaWFpc3tcIiBcIn1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1NnZUxOYkRmNjhsaW5ZWjdYQnp1dWcvdmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy95b3V0dWJlLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9JYmF2UmliZWlyYW9QaXJlcy9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaWJhdnJwL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=