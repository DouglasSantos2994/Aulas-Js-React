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
  var inscricao = "mpofwjefjwfhsdgjgure"; // null | "" | undefined | false

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlBhZ2UiLCJpbml0aWFsR0EiLCJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsInBhZ2V2aWV3IiwidXJsTG9jYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJub21lIiwic2V0Tm9tZSIsInJlZGUiLCJzZXRSZWRlIiwic29icmVub21lIiwic2V0U29icmVub21lIiwiY3VsdG8iLCJzZXRDdWx0byIsImNyaWFuY2FzIiwic2V0Q3JpYW5jYXMiLCJ1cmwiLCJkYXRlIiwiRGF0ZSIsImRpYV9zZW0iLCJnZXREYXkiLCJxdGRTYWJhZG8iLCJzZXRRdGRTYWJhZG8iLCJxdGREb21pbmdvTWFuaGEiLCJzZXRRdGREb21pbmdvTWFuaGEiLCJxdGREb21pbmdvTm9pdGUiLCJzZXRRdGREb21pbmdvTm9pdGUiLCJub21lTGltcGFyIiwic2V0Tm9tZUxpbXBhciIsInNvYnJlbm9tZUxpbXBhciIsInNldFNvYnJlbm9tZUxpbXBhciIsInJlZGVMaW1wYXIiLCJzZXRSZWRlTGltcGFyIiwiY3JpYW5jYXNMaW1wYXIiLCJzZXRDcmlhbmNhc0xpbXBhciIsImxpc3RhZ2VtIiwic2V0TGlzdGFnZW0iLCJxdGRNQXhpbWEiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjdWx0b1NhYmFkbyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwZXNzb2EiLCJsZW5ndGgiLCJjdWx0b0RvbWluZ29NYW5oYSIsImN1bHRvRG9taW5nb05vaXRlIiwiZG9SZW1vdmUiLCJpZCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsInBvc3QiLCJhbGVydCIsInNhbHZlIiwiZXhpc3RlQ3JpYW5jYXMiLCJ0b0xvd2VyQ2FzZSIsImNoZWdhZGEiLCJkaWEiLCJpbnNjcmljYW8i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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLGlFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixhQUFTLEVBQUMsTUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFHLFFBQUksRUFBQyw2Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsc0JBQVQ7QUFBZ0MsYUFBUyxFQUFDLE1BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLEVBT0U7QUFBRyxRQUFJLEVBQUMsbUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHVCQUFUO0FBQWlDLGFBQVMsRUFBQyxNQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixDQUpGLEVBZUU7QUFBRyxRQUFJLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFDLG9CQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQWZGLENBREYsQ0F0UE4sQ0FQSixDQURGO0FBMlNEOztHQXRhUTNCLEk7O0tBQUFBLEk7QUF3YU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjEwMTNmMmEzYzNhMTU3YTYxMGJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xyXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnQtdGltZXpvbmVcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gaW1wb3J0IHsgY29uc29sZSB9IGZyb20gXCJ3aW5kb3ctb3ItZ2xvYmFsXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gUGFnZSgpIHtcclxuXHJcbiAgLy9SRU5ESVJBWkHDh8ODTyBDT05ESUNJT05BTCBPVSBDT05EScOHw4NPIFRFUk5BUklBXHJcblxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsR0EoKSB7XHJcbiAgICBSZWFjdEdBLmluaXRpYWxpemUoXCJVQS0xNzA5MDk4NzQtMVwiKTtcclxuICAgIFJlYWN0R0EucGFnZXZpZXcodXJsTG9jYWwpO1xyXG4gIH1cclxuICBsZXQgdXJsTG9jYWw7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHVybExvY2FsID0gd2luZG93LmxvY2F0aW9uPy5ocmVmO1xyXG4gIH1cclxuICBpbml0aWFsR0EoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtub21lLCBzZXROb21lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3JlZGUsIHNldFJlZGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbc29icmVub21lLCBzZXRTb2JyZW5vbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY3VsdG8sIHNldEN1bHRvXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2NyaWFuY2FzLCBzZXRDcmlhbmNhc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hZ3Vhdml2YS1ycC5maXJlYmFzZWlvLmNvbS90ZXN0ZS5qc29uXCI7XHJcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHZhciBkaWFfc2VtID0gZGF0ZS5nZXREYXkoKTtcclxuXHJcbiAgLy8gdmFyIGRhdGVNb21lbnQgPSBtb21lbnQoYCR7ZGF0ZX1gKTtcclxuICAvLyBkYXRlTW9tZW50LnR6KFwiQW1lcmljYS9TYW9fUGF1bG9cIikuZm9ybWF0KFwiaGEgelwiKTtcclxuICAvLyBtb21lbnQubG9jYWxlKFwicHQtQlJcIik7XHJcbiAgLy8gY29uc3Qgbm92YURhdGEgPSBuZXcgRGF0ZShkYXRlTW9tZW50KTtcclxuICAvLyB2YXIgZGlhX3NlbSA9IG1vbWVudChub3ZhRGF0YSkuZm9ybWF0KFwiZGRkZFwiKTtcclxuICBjb25zdCBbcXRkU2FiYWRvLCBzZXRRdGRTYWJhZG9dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcXRkRG9taW5nb01hbmhhLCBzZXRRdGREb21pbmdvTWFuaGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbcXRkRG9taW5nb05vaXRlLCBzZXRRdGREb21pbmdvTm9pdGVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbm9tZUxpbXBhciwgc2V0Tm9tZUxpbXBhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc29icmVub21lTGltcGFyLCBzZXRTb2JyZW5vbWVMaW1wYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3JlZGVMaW1wYXIsIHNldFJlZGVMaW1wYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2NyaWFuY2FzTGltcGFyLCBzZXRDcmlhbmNhc0xpbXBhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbGlzdGFnZW0sIHNldExpc3RhZ2VtXSA9IHVzZVN0YXRlKCk7XHJcbiAgdmFyIHF0ZE1BeGltYSA9IDc1O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgQXhpb3MuZ2V0KHVybCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldERhdGEocmVzLmRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgY29uc3QgY3VsdG9TYWJhZG8gPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoKHBlc3NvYSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhW3Blc3NvYV0uY3VsdG8gPT0gXCJzYWJhZG9cIjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFF0ZFNhYmFkbyhjdWx0b1NhYmFkby5sZW5ndGgpO1xyXG4gICAgICBjb25zdCBjdWx0b0RvbWluZ29NYW5oYSA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcigocGVzc29hKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFbcGVzc29hXS5jdWx0byA9PSBcIm1hbmhhXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRRdGREb21pbmdvTWFuaGEoY3VsdG9Eb21pbmdvTWFuaGEubGVuZ3RoKTtcclxuICAgICAgY29uc3QgY3VsdG9Eb21pbmdvTm9pdGUgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoKHBlc3NvYSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhW3Blc3NvYV0uY3VsdG8gPT0gXCJub2l0ZVwiO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0UXRkRG9taW5nb05vaXRlKGN1bHRvRG9taW5nb05vaXRlLmxlbmd0aCk7XHJcbiAgICAgIHNldExpc3RhZ2VtKGRhdGEpO1xyXG4gICAgICAvLyBBVEVOw4fDg08gVVNFIEVTU0UgQ8OTRElHTyBDT00gQ0FVVEVMQSwgUkVNT1ZFIFRVRE8gLy9cclxuICAgICAgLy8gaWYgKGRpYV9zZW0gPj0gMSAmJiBkaWFfc2VtIDw9IDUpIHtcclxuICAgICAgLy8gICBPYmplY3QuZW50cmllcyhkYXRhKS5tYXAoKGluZGl2aWR1bykgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKGluZGl2aWR1b1swXSAhPSBcImJhc2VcIikge1xyXG4gICAgICAvLyAgICAgICBkb1JlbW92ZShpbmRpdmlkdW9bMF0pO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuICBjb25zdCBkb1JlbW92ZSA9IChpZCkgPT4ge1xyXG4gICAgcmVtb3ZlKGBodHRwczovL2FndWF2aXZhLXJwLmZpcmViYXNlaW8uY29tL3Rlc3RlLyR7aWR9Lmpzb25gKTtcclxuICB9O1xyXG4gIGNvbnN0IHJlbW92ZSA9ICh1cmwpID0+IHtcclxuICAgIEF4aW9zLmRlbGV0ZSh1cmwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgdm9jw6ogZGVsZXRvdSAke3VybH1gKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgdmFyIHJlZGlyZWN0O1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZWRpcmVjdCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIH1cclxuICBjb25zdCBwb3N0ID0gKGRhdGEpID0+IHtcclxuICAgIEF4aW9zLnBvc3QodXJsLCBkYXRhKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0Tm9tZUxpbXBhcighbm9tZUxpbXBhcik7XHJcbiAgICAgIHNldFNvYnJlbm9tZUxpbXBhcighc29icmVub21lTGltcGFyKTtcclxuICAgICAgc2V0UmVkZUxpbXBhcighcmVkZUxpbXBhcik7XHJcbiAgICAgIHNldENyaWFuY2FzTGltcGFyKCFjcmlhbmNhc0xpbXBhcik7XHJcbiAgICAgIGFsZXJ0KFwidm9jw6ogY29uZmlybW91IHN1YSBwcmVzZW7Dp2Egbm8gY3VsdG9cIik7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL2xpc3RhZ2VtLmh0bWxcIjtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhbHZlID0gKCkgPT4ge1xyXG4gICAgaWYgKG5vbWUgJiYgc29icmVub21lICYmIHJlZGUgJiYgY3VsdG8pIHtcclxuICAgICAgY29uc3QgZXhpc3RlQ3JpYW5jYXMgPSBjcmlhbmNhcyA/IGNyaWFuY2FzIDogXCIwXCI7XHJcbiAgICAgIHBvc3Qoe1xyXG4gICAgICAgIG5vbWU6IG5vbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICBzb2JyZW5vbWU6IHNvYnJlbm9tZSxcclxuICAgICAgICByZWRlOiByZWRlLFxyXG4gICAgICAgIGN1bHRvOiBjdWx0byxcclxuICAgICAgICBjcmlhbmNhczogZXhpc3RlQ3JpYW5jYXMsXHJcbiAgICAgICAgY2hlZ2FkYTogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCJVbSBvdSBtYWlzIGNhbXBvcyBlc3TDo28gZW0gYnJhbmNvXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gXHJcbiAgY29uc3QgZGlhID0gdHJ1ZVxyXG4gIGNvbnN0IGluc2NyaWNhbyA9IFwibXBvZndqZWZqd2Zoc2Rnamd1cmVcIlxyXG5cclxuICAvLyBudWxsIHwgXCJcIiB8IHVuZGVmaW5lZCB8IGZhbHNlXHJcbiAgY29uc3QgZXhpc3RlID0gdHJ1ZVxyXG5cclxuXHJcbiAgLy8gMSBzZSBldSBjb2xvY2FyIG1pbmhhIHZhcmlhdmVsIGNvbSB1bSB2YWxvciBxdWUgZXhpc3RlIG1ldSBzZWxlY3QgdmFpIGV4aWJpciBvcyBjdWx0b3MgZGUgc2FiYWRvc1xyXG4gIC8vcXVhbmRvIG5hbyBhdGVuZGVyIGVsYSB2YWkgZXhpYmlyIGN1bHRvcyBkZSB0ZXLDp2EgZmVpcmFcclxuXHJcbiAgLy8gMiBjcmlhciB1bWEgc2VndW5kYSB2YXJpYXZlbCBxdWUgc2UgZm9yIGlndWFsIGEgXCJBdGl2b1wiIGV4aWJhIG8gYm90YW8gaW5zY3JldmVyXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Lyoge2V4aXN0ZSAmJiA8PnRlc3RlPC8+fSBcclxuICAgICAge2V4aXN0ZSA/IDw+dGVzdGU8Lz4gOiA8PnRlc3RlMjwvPn0gKi99XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5JZ3JlamEgQmF0aXN0YSDDgWd1YSBWaXZhIC0gUmliZWlyw6NvIFBpcmVzPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7ZXhpc3RlICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvZ28uanBnXCIgLz5cclxuICAgICAgICAgICAgPGgxPkZvcm11bMOhcmlvIHBhcmEgY3VsdG8gZG9zIGpvdmVucyAoMjQvMDQpPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiB7KHF0ZFNhYmFkbyA8IHF0ZE1BeGltYSB8fCAqL31cclxuICAgICAgICAgIHsocXRkRG9taW5nb01hbmhhIDwgcXRkTUF4aW1hIHx8IHF0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSkgJiYgKFxyXG4gICAgICAgICAgICAvLyA8PlxyXG4gICAgICAgICAgICAvLyAgIHsoZGlhX3NlbSA9PSAwIHx8IGRpYV9zZW0gPT0gNSB8fCBkaWFfc2VtID09IDYpICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7bGlzdGFnZW0gPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPk5vbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7bm9tZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0Tm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgeyFub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXROb21lKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5Tb2JyZW5vbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7c29icmVub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRTb2JyZW5vbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29icmVub21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgeyFzb2JyZW5vbWVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldFNvYnJlbm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb2JyZW5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPkRpc2NpcHVsYWRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3JlZGVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2lvbmUgc2V1IGRpc2NpcHVsYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaXNhYmVsYVwiPklzYWJlbGEgQW1hcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXRoZXVzXCI+TWF0aGV1cyBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlbGlwZVwiPkZlbGlwZSBSYW1vczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNpbGFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbGFzIFNvdXphXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbGFpbmVcIj5FbGFpbmUgSmVyZW1pYXMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHshcmVkZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBzZXUgZGlzY2lwdWxhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpc2FiZWxhXCI+SXNhYmVsYSBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hdGhldXNcIj5NYXRoZXVzIEFtYXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVsaXBlXCI+RmVsaXBlIFJhbW9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2lsYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2lsYXMgU291emFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVsYWluZVwiPkVsYWluZSBKZXJlbWlhcyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWFsIGN1bHRvIGRlc2VqYSBpcj88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7ZGlhID9cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VsdG8oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBvIGN1bHRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyoge3F0ZFNhYmFkbyA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWJhZG9cIj5Tw6FiYWRvIC0gMTloczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYW5oYVwiPiBTw6FiYWRvIC0gMTVocyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub2l0ZVwiPlPDoWJhZG8gLSAxNzozMGhzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA6IDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdWx0byhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNpb25lIG8gY3VsdG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiB7cXRkU2FiYWRvIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWJhZG9cIj5Tw6FiYWRvIC0gMTloczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFuaGFcIj4gVGVyw6dhIC0gMTVocyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub2l0ZVwiPlRlcsOnYSAtIDE3OjMwaHMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0Pn1cclxuICAgICAgICAgICAgICAgICAgey8qIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWFudGFzIGNyaWFuw6dhcyB2YWkgbGV2YXIgcGFyYSBvIGN1bHRpbmhvPzwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7Lyoge2NyaWFuY2FzTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0Q3JpYW5jYXMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTnVtZXJvIGRlIGNyaWFuw6dhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFjcmlhbmNhc0xpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldENyaWFuY2FzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk51bWVybyBkZSBjcmlhbsOnYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWdhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU8OhYmFkbyAxOWhzIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWRcIj4gdmFnYXMgZW5jZXJyYWRhczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkU2FiYWRvID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PiByZXN0YXtxdGRTYWJhZG8gIT0gcXRkTUF4aW1hIC0gMSAmJiA8Pm08Lz59PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiB7cXRkTUF4aW1hIC0gcXRkU2FiYWRvfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gdmFnYXtxdGRTYWJhZG8gIT0gcXRkTUF4aW1hIC0gMSAmJiA8PnM8Lz59PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTU6MDBocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhID49IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWRcIj4gdmFnYXMgZW5jZXJyYWRhczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+bTwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZERvbWluZ29NYW5oYX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFnYXtxdGREb21pbmdvTWFuaGEgIT0gcXRkTUF4aW1hIC0gMSAmJiA8PnM8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU8OhYmFkbyAxNzozMGhzIC1cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTm9pdGUgPj0gcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInJlZFwiPiB2YWdhcyBlbmNlcnJhZGFzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5tPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiB7cXRkTUF4aW1hIC0gcXRkRG9taW5nb05vaXRlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWdhe3F0ZERvbWluZ29Ob2l0ZSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+czwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW5zY3JpY2FvID09PSBcImF0aXZvXCIgJiYgPGJ1dHRvbiBvbkNsaWNrPXtzYWx2ZX0+SW5zY3JldmVyPC9idXR0b24+fVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9saXN0YWdlbS5odG1sXCIgY2xhc3NOYW1lPVwibGlzdGFnZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICBWZXJpZmlxdWUgYSBsaXN0YWdlbVxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FycmVnYW5kb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZy5naWZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5DYXJyZWdhbmRvLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAvLyAgICl9XHJcbiAgICAgICAgICAgIC8vIDwvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7Lyoge3F0ZFNhYmFkbyA+PSBxdGRNQXhpbWEgJiYgKi99XHJcbiAgICAgICAgICB7cXRkRG9taW5nb01hbmhhID49IHF0ZE1BeGltYSAmJlxyXG4gICAgICAgICAgICBxdGREb21pbmdvTm9pdGUgPj0gcXRkTUF4aW1hICYmXHJcbiAgICAgICAgICAgIGRpYV9zZW0gIT0gMSAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDIgJiZcclxuICAgICAgICAgICAgZGlhX3NlbSAhPSAzICYmXHJcbiAgICAgICAgICAgIGRpYV9zZW0gIT0gNCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFmb1wiPlxyXG4gICAgICAgICAgICAgICAgICBJbmZlbGl6bWVudGUgdG9kb3Mgb3MgY3VsdG9zIHByZXNlbmNpYWlzIGphIGVzZ290YXJhbSBzdWFcclxuICAgICAgICAgICAgICAgICAgY2FwYWNpZGFkZSBleGlnaWRhIHBvciBsZWksIG1hcyBhY29tcGFuaGUgb25saW5lIHBlbGFzIG5vc3Nhc1xyXG4gICAgICAgICAgICAgICAgICByZWRlcyBzb2NpYWlzXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1NnZUxOYkRmNjhsaW5ZWjdYQnp1dWcvdmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMveW91dHViZS5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9JYmF2UmliZWlyYW9QaXJlcy9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9mYWNlYm9vay5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaWJhdnJwL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2luc3RhZ3JhbS5zdmdcIiBjbGFzc05hbWU9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2xpc3RhZ2VtLmh0bWxcIiBjbGFzc05hbWU9XCJsaXN0YWdlbV9lbmNlcnJhZGFcIj5cclxuICAgICAgICAgICAgICAgICAgICBWZXJpZmlxdWUgYSBsaXN0YWdlbSBkb3MgY3VsdG9zIHByZXNlbmNpYWlzXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKiB7ZGlhX3NlbSA+PSAxICYmIGRpYV9zZW0gPD0gNCAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhZm9cIj5cclxuICAgICAgICAgICAgICBPIHNpdGUgc8OzIGFicmlyw6EgYXMgaW5zY3Jpw6fDtWVzIDxiPnNleHRhLWZlaXJhIGFzIDAwaHM8L2I+XHJcbiAgICAgICAgICAgICAgRW5xdWFudG8gZXNwZXJhIG5vcyBhY29tcGFuaGUgbmFzIG5vc3NhcyByZWRlcyBzb2NpYWlze1wiIFwifVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVkZXNcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDU2dlTE5iRGY2OGxpbllaN1hCenV1Zy92aWRlb3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3lvdXR1YmUuc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0liYXZSaWJlaXJhb1BpcmVzL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2suc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pYmF2cnAvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==