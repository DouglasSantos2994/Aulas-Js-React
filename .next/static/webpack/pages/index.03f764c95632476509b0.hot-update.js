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

  var inscricao = true;
  var dia = "ativo"; // null | "" | undefined | false

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
  }, "Qual culto deseja ir?"), abacaxi ? __jsx("select", {
    onChange: function onChange(e) {
      setCulto(e.target.value);
    },
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 23
    }
  }, "Selecione o culto"), qtdDomingoManha < qtdMAxima && __jsx("option", {
    value: "manha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 25
    }
  }, " S\xE1bado - 15hs "), qtdDomingoNoite < qtdMAxima && __jsx("option", {
    value: "noite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
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
      lineNumber: 249,
      columnNumber: 23
    }
  }, __jsx("option", {
    value: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 23
    }
  }, "Selecione o culto"), qtdDomingoManha < qtdMAxima && __jsx("option", {
    value: "manha",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 25
    }
  }, " Ter\xE7a - 15hs "), qtdDomingoNoite < qtdMAxima && __jsx("option", {
    value: "noite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 25
    }
  }, "Ter\xE7a - 17:30hs ")), __jsx("div", {
    className: "vagas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 21
    }
  }, "S\xE1bado 15:00hs -", qtdDomingoManha >= qtdMAxima && __jsx("small", {
    className: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 25
    }
  }, " vagas encerradas"), qtdDomingoManha < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoManha >= 0 && __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 29
    }
  }, " ", qtdMAxima - qtdDomingoManha), qtdDomingoManha >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoManha != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s")))), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 21
    }
  }, "S\xE1bado 17:30hs -", qtdDomingoNoite >= qtdMAxima && __jsx("small", {
    className: "red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 25
    }
  }, " vagas encerradas"), qtdDomingoNoite < qtdMAxima && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "resta", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "m")), qtdDomingoNoite >= 0 && __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 29
    }
  }, " ", qtdMAxima - qtdDomingoNoite), qtdDomingoNoite >= 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", "vaga", qtdDomingoNoite != qtdMAxima - 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "s"))))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 19
    }
  }), inscricao && __jsx("button", {
    onClick: salve,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 33
    }
  }, "Inscrever"), __jsx("a", {
    href: "/listagem.html",
    className: "listagem",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 19
    }
  }, "Verifique a listagem")) : __jsx("p", {
    className: "carregando",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/loading.gif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 19
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 19
    }
  }, "Carregando..."))) //   )}
  // </>
  , qtdDomingoManha >= qtdMAxima && qtdDomingoNoite >= qtdMAxima && dia_sem != 1 && dia_sem != 2 && dia_sem != 3 && dia_sem != 4 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "paragrafo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 17
    }
  }, "Infelizmente todos os cultos presenciais ja esgotaram sua capacidade exigida por lei, mas acompanhe online pelas nossas redes sociais", __jsx("div", {
    className: "redes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 19
    }
  }, __jsx("a", {
    href: "https://www.youtube.com/channel/UCSgeLNbDf68linYZ7XBzuug/videos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/youtube.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 23
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/IbavRibeiraoPires/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/facebook.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 23
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/ibavrp/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/images/instagram.svg",
    className: "icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 23
    }
  }))), __jsx("a", {
    href: "/listagem.html",
    className: "listagem_encerrada",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIlBhZ2UiLCJpbml0aWFsR0EiLCJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsInBhZ2V2aWV3IiwidXJsTG9jYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInNldERhdGEiLCJub21lIiwic2V0Tm9tZSIsInJlZGUiLCJzZXRSZWRlIiwic29icmVub21lIiwic2V0U29icmVub21lIiwiY3VsdG8iLCJzZXRDdWx0byIsImNyaWFuY2FzIiwic2V0Q3JpYW5jYXMiLCJ1cmwiLCJkYXRlIiwiRGF0ZSIsImRpYV9zZW0iLCJnZXREYXkiLCJxdGRTYWJhZG8iLCJzZXRRdGRTYWJhZG8iLCJxdGREb21pbmdvTWFuaGEiLCJzZXRRdGREb21pbmdvTWFuaGEiLCJxdGREb21pbmdvTm9pdGUiLCJzZXRRdGREb21pbmdvTm9pdGUiLCJub21lTGltcGFyIiwic2V0Tm9tZUxpbXBhciIsInNvYnJlbm9tZUxpbXBhciIsInNldFNvYnJlbm9tZUxpbXBhciIsInJlZGVMaW1wYXIiLCJzZXRSZWRlTGltcGFyIiwiY3JpYW5jYXNMaW1wYXIiLCJzZXRDcmlhbmNhc0xpbXBhciIsImxpc3RhZ2VtIiwic2V0TGlzdGFnZW0iLCJxdGRNQXhpbWEiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjdWx0b1NhYmFkbyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwZXNzb2EiLCJsZW5ndGgiLCJjdWx0b0RvbWluZ29NYW5oYSIsImN1bHRvRG9taW5nb05vaXRlIiwiZG9SZW1vdmUiLCJpZCIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsInBvc3QiLCJhbGVydCIsInNhbHZlIiwiZXhpc3RlQ3JpYW5jYXMiLCJ0b0xvd2VyQ2FzZSIsImNoZWdhZGEiLCJpbnNjcmljYW8iLCJkaWEi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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxpRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMscUJBQVQ7QUFBK0IsYUFBUyxFQUFDLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxRQUFJLEVBQUMsNkNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHNCQUFUO0FBQWdDLGFBQVMsRUFBQyxNQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQU9FO0FBQUcsUUFBSSxFQUFDLG1DQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyx1QkFBVDtBQUFpQyxhQUFTLEVBQUMsTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsQ0FKRixFQWVFO0FBQUcsUUFBSSxFQUFDLGdCQUFSO0FBQXlCLGFBQVMsRUFBQyxvQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFmRixDQURGLENBdFBOLENBUEosQ0FERjtBQTJTRDs7R0FyYVEzQixJOztLQUFBQSxJO0FBdWFNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wM2Y3NjRjOTU2MzI0NzY1MDliMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tIFwicmVhY3QtZ2FcIjtcclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50LXRpbWV6b25lXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGltcG9ydCB7IGNvbnNvbGUgfSBmcm9tIFwid2luZG93LW9yLWdsb2JhbFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBhZ2UoKSB7XHJcblxyXG4gIC8vUkVORElSQVpBw4fDg08gQ09ORElDSU9OQUwgT1UgQ09OREnDh8ODTyBURVJOQVJJQVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbEdBKCkge1xyXG4gICAgUmVhY3RHQS5pbml0aWFsaXplKFwiVUEtMTcwOTA5ODc0LTFcIik7XHJcbiAgICBSZWFjdEdBLnBhZ2V2aWV3KHVybExvY2FsKTtcclxuICB9XHJcbiAgbGV0IHVybExvY2FsO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB1cmxMb2NhbCA9IHdpbmRvdy5sb2NhdGlvbj8uaHJlZjtcclxuICB9XHJcbiAgaW5pdGlhbEdBKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbm9tZSwgc2V0Tm9tZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtyZWRlLCBzZXRSZWRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NvYnJlbm9tZSwgc2V0U29icmVub21lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1bHRvLCBzZXRDdWx0b10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjcmlhbmNhcywgc2V0Q3JpYW5jYXNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYWd1YXZpdmEtcnAuZmlyZWJhc2Vpby5jb20vdGVzdGUuanNvblwiO1xyXG4gIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICB2YXIgZGlhX3NlbSA9IGRhdGUuZ2V0RGF5KCk7XHJcblxyXG4gIC8vIHZhciBkYXRlTW9tZW50ID0gbW9tZW50KGAke2RhdGV9YCk7XHJcbiAgLy8gZGF0ZU1vbWVudC50eihcIkFtZXJpY2EvU2FvX1BhdWxvXCIpLmZvcm1hdChcImhhIHpcIik7XHJcbiAgLy8gbW9tZW50LmxvY2FsZShcInB0LUJSXCIpO1xyXG4gIC8vIGNvbnN0IG5vdmFEYXRhID0gbmV3IERhdGUoZGF0ZU1vbWVudCk7XHJcbiAgLy8gdmFyIGRpYV9zZW0gPSBtb21lbnQobm92YURhdGEpLmZvcm1hdChcImRkZGRcIik7XHJcbiAgY29uc3QgW3F0ZFNhYmFkbywgc2V0UXRkU2FiYWRvXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3F0ZERvbWluZ29NYW5oYSwgc2V0UXRkRG9taW5nb01hbmhhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3F0ZERvbWluZ29Ob2l0ZSwgc2V0UXRkRG9taW5nb05vaXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25vbWVMaW1wYXIsIHNldE5vbWVMaW1wYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NvYnJlbm9tZUxpbXBhciwgc2V0U29icmVub21lTGltcGFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtyZWRlTGltcGFyLCBzZXRSZWRlTGltcGFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtjcmlhbmNhc0xpbXBhciwgc2V0Q3JpYW5jYXNMaW1wYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xpc3RhZ2VtLCBzZXRMaXN0YWdlbV0gPSB1c2VTdGF0ZSgpO1xyXG4gIHZhciBxdGRNQXhpbWEgPSA3NTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIEF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXREYXRhKHJlcy5kYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGN1bHRvU2FiYWRvID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKChwZXNzb2EpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YVtwZXNzb2FdLmN1bHRvID09IFwic2FiYWRvXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRRdGRTYWJhZG8oY3VsdG9TYWJhZG8ubGVuZ3RoKTtcclxuICAgICAgY29uc3QgY3VsdG9Eb21pbmdvTWFuaGEgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoKHBlc3NvYSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhW3Blc3NvYV0uY3VsdG8gPT0gXCJtYW5oYVwiO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0UXRkRG9taW5nb01hbmhhKGN1bHRvRG9taW5nb01hbmhhLmxlbmd0aCk7XHJcbiAgICAgIGNvbnN0IGN1bHRvRG9taW5nb05vaXRlID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKChwZXNzb2EpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YVtwZXNzb2FdLmN1bHRvID09IFwibm9pdGVcIjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFF0ZERvbWluZ29Ob2l0ZShjdWx0b0RvbWluZ29Ob2l0ZS5sZW5ndGgpO1xyXG4gICAgICBzZXRMaXN0YWdlbShkYXRhKTtcclxuICAgICAgLy8gQVRFTsOHw4NPIFVTRSBFU1NFIEPDk0RJR08gQ09NIENBVVRFTEEsIFJFTU9WRSBUVURPIC8vXHJcbiAgICAgIC8vIGlmIChkaWFfc2VtID49IDEgJiYgZGlhX3NlbSA8PSA1KSB7XHJcbiAgICAgIC8vICAgT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChpbmRpdmlkdW8pID0+IHtcclxuICAgICAgLy8gICAgIGlmIChpbmRpdmlkdW9bMF0gIT0gXCJiYXNlXCIpIHtcclxuICAgICAgLy8gICAgICAgZG9SZW1vdmUoaW5kaXZpZHVvWzBdKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcbiAgY29uc3QgZG9SZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIHJlbW92ZShgaHR0cHM6Ly9hZ3Vhdml2YS1ycC5maXJlYmFzZWlvLmNvbS90ZXN0ZS8ke2lkfS5qc29uYCk7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmUgPSAodXJsKSA9PiB7XHJcbiAgICBBeGlvcy5kZWxldGUodXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYHZvY8OqIGRlbGV0b3UgJHt1cmx9YCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHZhciByZWRpcmVjdDtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmVkaXJlY3QgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICB9XHJcbiAgY29uc3QgcG9zdCA9IChkYXRhKSA9PiB7XHJcbiAgICBBeGlvcy5wb3N0KHVybCwgZGF0YSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldE5vbWVMaW1wYXIoIW5vbWVMaW1wYXIpO1xyXG4gICAgICBzZXRTb2JyZW5vbWVMaW1wYXIoIXNvYnJlbm9tZUxpbXBhcik7XHJcbiAgICAgIHNldFJlZGVMaW1wYXIoIXJlZGVMaW1wYXIpO1xyXG4gICAgICBzZXRDcmlhbmNhc0xpbXBhcighY3JpYW5jYXNMaW1wYXIpO1xyXG4gICAgICBhbGVydChcInZvY8OqIGNvbmZpcm1vdSBzdWEgcHJlc2Vuw6dhIG5vIGN1bHRvXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9saXN0YWdlbS5odG1sXCI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYWx2ZSA9ICgpID0+IHtcclxuICAgIGlmIChub21lICYmIHNvYnJlbm9tZSAmJiByZWRlICYmIGN1bHRvKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0ZUNyaWFuY2FzID0gY3JpYW5jYXMgPyBjcmlhbmNhcyA6IFwiMFwiO1xyXG4gICAgICBwb3N0KHtcclxuICAgICAgICBub21lOiBub21lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgc29icmVub21lOiBzb2JyZW5vbWUsXHJcbiAgICAgICAgcmVkZTogcmVkZSxcclxuICAgICAgICBjdWx0bzogY3VsdG8sXHJcbiAgICAgICAgY3JpYW5jYXM6IGV4aXN0ZUNyaWFuY2FzLFxyXG4gICAgICAgIGNoZWdhZGE6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiVW0gb3UgbWFpcyBjYW1wb3MgZXN0w6NvIGVtIGJyYW5jb1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpbnNjcmljYW8gPSB0cnVlXHJcbiAgY29uc3QgZGlhID0gXCJhdGl2b1wiXHJcblxyXG4gIC8vIG51bGwgfCBcIlwiIHwgdW5kZWZpbmVkIHwgZmFsc2VcclxuICBjb25zdCBleGlzdGUgPSB0cnVlXHJcblxyXG5cclxuICAvLyAxIHNlIGV1IGNvbG9jYXIgbWluaGEgdmFyaWF2ZWwgY29tIHVtIHZhbG9yIHF1ZSBleGlzdGUgbWV1IHNlbGVjdCB2YWkgZXhpYmlyIG9zIGN1bHRvcyBkZSBzYWJhZG9zXHJcbiAgLy9xdWFuZG8gbmFvIGF0ZW5kZXIgZWxhIHZhaSBleGliaXIgY3VsdG9zIGRlIHRlcsOnYSBmZWlyYVxyXG5cclxuICAvLyAyIGNyaWFyIHVtYSBzZWd1bmRhIHZhcmlhdmVsIHF1ZSBzZSBmb3IgaWd1YWwgYSBcIkF0aXZvXCIgZXhpYmEgbyBib3RhbyBpbnNjcmV2ZXJcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiB7ZXhpc3RlICYmIDw+dGVzdGU8Lz59IFxyXG4gICAgICB7ZXhpc3RlID8gPD50ZXN0ZTwvPiA6IDw+dGVzdGUyPC8+fSAqL31cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPklncmVqYSBCYXRpc3RhIMOBZ3VhIFZpdmEgLSBSaWJlaXLDo28gUGlyZXM8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHtleGlzdGUgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvbG9nby5qcGdcIiAvPlxyXG4gICAgICAgICAgICA8aDE+Rm9ybXVsw6FyaW8gcGFyYSBjdWx0byBkb3Mgam92ZW5zICgyNC8wNCk8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIHsocXRkU2FiYWRvIDwgcXRkTUF4aW1hIHx8ICovfVxyXG4gICAgICAgICAgeyhxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgfHwgcXRkRG9taW5nb05vaXRlIDwgcXRkTUF4aW1hKSAmJiAoXHJcbiAgICAgICAgICAgIC8vIDw+XHJcbiAgICAgICAgICAgIC8vICAgeyhkaWFfc2VtID09IDAgfHwgZGlhX3NlbSA9PSA1IHx8IGRpYV9zZW0gPT0gNikgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtsaXN0YWdlbSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHtub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXROb21lKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vbWUgXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0X25hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7IW5vbWVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldE5vbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlNvYnJlbm9tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHtzb2JyZW5vbWVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldFNvYnJlbm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb2JyZW5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7IXNvYnJlbm9tZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0U29icmVub21lKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNvYnJlbm9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+RGlzY2lwdWxhZG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICB7cmVkZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBzZXUgZGlzY2lwdWxhZG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpc2FiZWxhXCI+SXNhYmVsYSBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hdGhldXNcIj5NYXRoZXVzIEFtYXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVsaXBlXCI+RmVsaXBlIFJhbW9zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2lsYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2lsYXMgU291emFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVsYWluZVwiPkVsYWluZSBKZXJlbWlhcyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgeyFyZWRlTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVkZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNpb25lIHNldSBkaXNjaXB1bGFkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImlzYWJlbGFcIj5Jc2FiZWxhIEFtYXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWF0aGV1c1wiPk1hdGhldXMgQW1hcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZWxpcGVcIj5GZWxpcGUgUmFtb3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaWxhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaWxhcyBTb3V6YVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZWxhaW5lXCI+RWxhaW5lIEplcmVtaWFzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlF1YWwgY3VsdG8gZGVzZWphIGlyPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHthYmFjYXhpID9cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VsdG8oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBvIGN1bHRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyoge3F0ZFNhYmFkbyA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWJhZG9cIj5Tw6FiYWRvIC0gMTloczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYW5oYVwiPiBTw6FiYWRvIC0gMTVocyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub2l0ZVwiPlPDoWJhZG8gLSAxNzozMGhzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA6IDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdWx0byhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNpb25lIG8gY3VsdG88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiB7cXRkU2FiYWRvIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzYWJhZG9cIj5Tw6FiYWRvIC0gMTloczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFuaGFcIj4gVGVyw6dhIC0gMTVocyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub2l0ZVwiPlRlcsOnYSAtIDE3OjMwaHMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0Pn1cclxuICAgICAgICAgICAgICAgICAgey8qIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWFudGFzIGNyaWFuw6dhcyB2YWkgbGV2YXIgcGFyYSBvIGN1bHRpbmhvPzwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7Lyoge2NyaWFuY2FzTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0Q3JpYW5jYXMoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTnVtZXJvIGRlIGNyaWFuw6dhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgeyFjcmlhbmNhc0xpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldENyaWFuY2FzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk51bWVybyBkZSBjcmlhbsOnYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWdhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU8OhYmFkbyAxOWhzIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWRcIj4gdmFnYXMgZW5jZXJyYWRhczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkU2FiYWRvID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PiByZXN0YXtxdGRTYWJhZG8gIT0gcXRkTUF4aW1hIC0gMSAmJiA8Pm08Lz59PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiB7cXRkTUF4aW1hIC0gcXRkU2FiYWRvfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gdmFnYXtxdGRTYWJhZG8gIT0gcXRkTUF4aW1hIC0gMSAmJiA8PnM8Lz59PC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTU6MDBocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhID49IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWRcIj4gdmFnYXMgZW5jZXJyYWRhczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+bTwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZERvbWluZ29NYW5oYX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFnYXtxdGREb21pbmdvTWFuaGEgIT0gcXRkTUF4aW1hIC0gMSAmJiA8PnM8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU8OhYmFkbyAxNzozMGhzIC1cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTm9pdGUgPj0gcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInJlZFwiPiB2YWdhcyBlbmNlcnJhZGFzPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5tPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiB7cXRkTUF4aW1hIC0gcXRkRG9taW5nb05vaXRlfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWdhe3F0ZERvbWluZ29Ob2l0ZSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+czwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7aW5zY3JpY2FvICYmIDxidXR0b24gb25DbGljaz17c2FsdmV9Pkluc2NyZXZlcjwvYnV0dG9uPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbGlzdGFnZW0uaHRtbFwiIGNsYXNzTmFtZT1cImxpc3RhZ2VtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpcXVlIGEgbGlzdGFnZW1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnJlZ2FuZG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmcuZ2lmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FycmVnYW5kby4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgLy8gICApfVxyXG4gICAgICAgICAgICAvLyA8Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgey8qIHtxdGRTYWJhZG8gPj0gcXRkTUF4aW1hICYmICovfVxyXG4gICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSBxdGRNQXhpbWEgJiZcclxuICAgICAgICAgICAgcXRkRG9taW5nb05vaXRlID49IHF0ZE1BeGltYSAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDEgJiZcclxuICAgICAgICAgICAgZGlhX3NlbSAhPSAyICYmXHJcbiAgICAgICAgICAgIGRpYV9zZW0gIT0gMyAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhZm9cIj5cclxuICAgICAgICAgICAgICAgICAgSW5mZWxpem1lbnRlIHRvZG9zIG9zIGN1bHRvcyBwcmVzZW5jaWFpcyBqYSBlc2dvdGFyYW0gc3VhXHJcbiAgICAgICAgICAgICAgICAgIGNhcGFjaWRhZGUgZXhpZ2lkYSBwb3IgbGVpLCBtYXMgYWNvbXBhbmhlIG9ubGluZSBwZWxhcyBub3NzYXNcclxuICAgICAgICAgICAgICAgICAgcmVkZXMgc29jaWFpc1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNTZ2VMTmJEZjY4bGluWVo3WEJ6dXVnL3ZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3lvdXR1YmUuc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vSWJhdlJpYmVpcmFvUGlyZXMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2suc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2liYXZycC9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9saXN0YWdlbS5odG1sXCIgY2xhc3NOYW1lPVwibGlzdGFnZW1fZW5jZXJyYWRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpcXVlIGEgbGlzdGFnZW0gZG9zIGN1bHRvcyBwcmVzZW5jaWFpc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Lyoge2RpYV9zZW0gPj0gMSAmJiBkaWFfc2VtIDw9IDQgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYWZvXCI+XHJcbiAgICAgICAgICAgICAgTyBzaXRlIHPDsyBhYnJpcsOhIGFzIGluc2NyacOnw7VlcyA8Yj5zZXh0YS1mZWlyYSBhcyAwMGhzPC9iPlxyXG4gICAgICAgICAgICAgIEVucXVhbnRvIGVzcGVyYSBub3MgYWNvbXBhbmhlIG5hcyBub3NzYXMgcmVkZXMgc29jaWFpc3tcIiBcIn1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1NnZUxOYkRmNjhsaW5ZWjdYQnp1dWcvdmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy95b3V0dWJlLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9JYmF2UmliZWlyYW9QaXJlcy9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaWJhdnJwL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=