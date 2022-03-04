module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Groove\\Aulas-Js-React\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import moment from "moment-timezone";

 // import { console } from "window-or-global";

function Page() {
  //RENDIRAZAÇÃO CONDICIONAL OU CONDIÇÃO TERNARIA
  function initialGA() {
    react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.initialize("UA-170909874-1");
    react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.pageview(urlLocal);
  }

  let urlLocal;

  if (false) { var _window$location; }

  initialGA();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: nome,
    1: setNome
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: rede,
    1: setRede
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: sobrenome,
    1: setSobrenome
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: culto,
    1: setCulto
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: criancas,
    1: setCriancas
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const url = "https://aguaviva-rp.firebaseio.com/teste.json";
  var date = new Date();
  var dia_sem = date.getDay(); // var dateMoment = moment(`${date}`);
  // dateMoment.tz("America/Sao_Paulo").format("ha z");
  // moment.locale("pt-BR");
  // const novaData = new Date(dateMoment);
  // var dia_sem = moment(novaData).format("dddd");

  const {
    0: qtdSabado,
    1: setQtdSabado
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: qtdDomingoManha,
    1: setQtdDomingoManha
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: qtdDomingoNoite,
    1: setQtdDomingoNoite
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: nomeLimpar,
    1: setNomeLimpar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: sobrenomeLimpar,
    1: setSobrenomeLimpar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: redeLimpar,
    1: setRedeLimpar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: criancasLimpar,
    1: setCriancasLimpar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const {
    0: listagem,
    1: setListagem
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  var qtdMAxima = 75;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url).then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (data) {
      const cultoSabado = Object.keys(data).filter(pessoa => {
        return data[pessoa].culto == "sabado";
      });
      setQtdSabado(cultoSabado.length);
      const cultoDomingoManha = Object.keys(data).filter(pessoa => {
        return data[pessoa].culto == "manha";
      });
      setQtdDomingoManha(cultoDomingoManha.length);
      const cultoDomingoNoite = Object.keys(data).filter(pessoa => {
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

  const doRemove = id => {
    remove(`https://aguaviva-rp.firebaseio.com/teste/${id}.json`);
  };

  const remove = url => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(url).then(() => {
      console.log(`você deletou ${url}`);
    });
  };

  var redirect;

  if (false) {}

  const post = data => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(url, data).then(res => {
      setNomeLimpar(!nomeLimpar);
      setSobrenomeLimpar(!sobrenomeLimpar);
      setRedeLimpar(!redeLimpar);
      setCriancasLimpar(!criancasLimpar);
      alert("você confirmou sua presença no culto");
      window.location = "/listagem.html";
    });
  };

  const salve = () => {
    if (nome && sobrenome && rede && culto) {
      const existeCriancas = criancas ? criancas : "0";
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

  const dia = true;
  const inscricao = "ativo"; // null | "" | undefined | false

  const existe = true; // 1 se eu colocar minha variavel com um valor que existe meu select vai exibir os cultos de sabados
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
    onKeyUp: e => setNome(e.currentTarget.value),
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
    onKeyUp: e => setNome(e.currentTarget.value),
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
    onKeyUp: e => setSobrenome(e.currentTarget.value),
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
    onKeyUp: e => setSobrenome(e.currentTarget.value),
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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
    onChange: e => {
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

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nYVwiIl0sIm5hbWVzIjpbIlBhZ2UiLCJpbml0aWFsR0EiLCJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsInBhZ2V2aWV3IiwidXJsTG9jYWwiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJub21lIiwic2V0Tm9tZSIsInJlZGUiLCJzZXRSZWRlIiwic29icmVub21lIiwic2V0U29icmVub21lIiwiY3VsdG8iLCJzZXRDdWx0byIsImNyaWFuY2FzIiwic2V0Q3JpYW5jYXMiLCJ1cmwiLCJkYXRlIiwiRGF0ZSIsImRpYV9zZW0iLCJnZXREYXkiLCJxdGRTYWJhZG8iLCJzZXRRdGRTYWJhZG8iLCJxdGREb21pbmdvTWFuaGEiLCJzZXRRdGREb21pbmdvTWFuaGEiLCJxdGREb21pbmdvTm9pdGUiLCJzZXRRdGREb21pbmdvTm9pdGUiLCJub21lTGltcGFyIiwic2V0Tm9tZUxpbXBhciIsInNvYnJlbm9tZUxpbXBhciIsInNldFNvYnJlbm9tZUxpbXBhciIsInJlZGVMaW1wYXIiLCJzZXRSZWRlTGltcGFyIiwiY3JpYW5jYXNMaW1wYXIiLCJzZXRDcmlhbmNhc0xpbXBhciIsImxpc3RhZ2VtIiwic2V0TGlzdGFnZW0iLCJxdGRNQXhpbWEiLCJ1c2VFZmZlY3QiLCJBeGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjdWx0b1NhYmFkbyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJwZXNzb2EiLCJsZW5ndGgiLCJjdWx0b0RvbWluZ29NYW5oYSIsImN1bHRvRG9taW5nb05vaXRlIiwiZG9SZW1vdmUiLCJpZCIsInJlbW92ZSIsImRlbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsInBvc3QiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2FsdmUiLCJleGlzdGVDcmlhbmNhcyIsInRvTG93ZXJDYXNlIiwiY2hlZ2FkYSIsImRpYSIsImluc2NyaWNhbyIsImV4aXN0ZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0NBRUE7O0NBR0E7O0FBR0EsU0FBU0EsSUFBVCxHQUFnQjtBQUVkO0FBR0EsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQkMsbURBQU8sQ0FBQ0MsVUFBUixDQUFtQixnQkFBbkI7QUFDQUQsbURBQU8sQ0FBQ0UsUUFBUixDQUFpQkMs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O0FBQUEsSUFERixDQVBGLENBSkYsRUFlRTtBQUFHLFFBQUksRUFBQyxnQkFBUjtBQUF5QixhQUFTLEVBQUMsb0JBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBZkYsQ0FERixDQXRQTixDQVBKLENBREY7QUEyU0Q7O0FBRWN4QixtRUFBZixFOzs7Ozs7Ozs7OztBQ2piQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanN4XCIpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tIFwicmVhY3QtZ2FcIjtcclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50LXRpbWV6b25lXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGltcG9ydCB7IGNvbnNvbGUgfSBmcm9tIFwid2luZG93LW9yLWdsb2JhbFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBhZ2UoKSB7XHJcblxyXG4gIC8vUkVORElSQVpBw4fDg08gQ09ORElDSU9OQUwgT1UgQ09OREnDh8ODTyBURVJOQVJJQVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbEdBKCkge1xyXG4gICAgUmVhY3RHQS5pbml0aWFsaXplKFwiVUEtMTcwOTA5ODc0LTFcIik7XHJcbiAgICBSZWFjdEdBLnBhZ2V2aWV3KHVybExvY2FsKTtcclxuICB9XHJcbiAgbGV0IHVybExvY2FsO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB1cmxMb2NhbCA9IHdpbmRvdy5sb2NhdGlvbj8uaHJlZjtcclxuICB9XHJcbiAgaW5pdGlhbEdBKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbm9tZSwgc2V0Tm9tZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtyZWRlLCBzZXRSZWRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3NvYnJlbm9tZSwgc2V0U29icmVub21lXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2N1bHRvLCBzZXRDdWx0b10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjcmlhbmNhcywgc2V0Q3JpYW5jYXNdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYWd1YXZpdmEtcnAuZmlyZWJhc2Vpby5jb20vdGVzdGUuanNvblwiO1xyXG4gIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICB2YXIgZGlhX3NlbSA9IGRhdGUuZ2V0RGF5KCk7XHJcblxyXG4gIC8vIHZhciBkYXRlTW9tZW50ID0gbW9tZW50KGAke2RhdGV9YCk7XHJcbiAgLy8gZGF0ZU1vbWVudC50eihcIkFtZXJpY2EvU2FvX1BhdWxvXCIpLmZvcm1hdChcImhhIHpcIik7XHJcbiAgLy8gbW9tZW50LmxvY2FsZShcInB0LUJSXCIpO1xyXG4gIC8vIGNvbnN0IG5vdmFEYXRhID0gbmV3IERhdGUoZGF0ZU1vbWVudCk7XHJcbiAgLy8gdmFyIGRpYV9zZW0gPSBtb21lbnQobm92YURhdGEpLmZvcm1hdChcImRkZGRcIik7XHJcbiAgY29uc3QgW3F0ZFNhYmFkbywgc2V0UXRkU2FiYWRvXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3F0ZERvbWluZ29NYW5oYSwgc2V0UXRkRG9taW5nb01hbmhhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3F0ZERvbWluZ29Ob2l0ZSwgc2V0UXRkRG9taW5nb05vaXRlXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW25vbWVMaW1wYXIsIHNldE5vbWVMaW1wYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NvYnJlbm9tZUxpbXBhciwgc2V0U29icmVub21lTGltcGFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtyZWRlTGltcGFyLCBzZXRSZWRlTGltcGFyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtjcmlhbmNhc0xpbXBhciwgc2V0Q3JpYW5jYXNMaW1wYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2xpc3RhZ2VtLCBzZXRMaXN0YWdlbV0gPSB1c2VTdGF0ZSgpO1xyXG4gIHZhciBxdGRNQXhpbWEgPSA3NTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIEF4aW9zLmdldCh1cmwpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXREYXRhKHJlcy5kYXRhKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGNvbnN0IGN1bHRvU2FiYWRvID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKChwZXNzb2EpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YVtwZXNzb2FdLmN1bHRvID09IFwic2FiYWRvXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRRdGRTYWJhZG8oY3VsdG9TYWJhZG8ubGVuZ3RoKTtcclxuICAgICAgY29uc3QgY3VsdG9Eb21pbmdvTWFuaGEgPSBPYmplY3Qua2V5cyhkYXRhKS5maWx0ZXIoKHBlc3NvYSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRhW3Blc3NvYV0uY3VsdG8gPT0gXCJtYW5oYVwiO1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0UXRkRG9taW5nb01hbmhhKGN1bHRvRG9taW5nb01hbmhhLmxlbmd0aCk7XHJcbiAgICAgIGNvbnN0IGN1bHRvRG9taW5nb05vaXRlID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKChwZXNzb2EpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YVtwZXNzb2FdLmN1bHRvID09IFwibm9pdGVcIjtcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFF0ZERvbWluZ29Ob2l0ZShjdWx0b0RvbWluZ29Ob2l0ZS5sZW5ndGgpO1xyXG4gICAgICBzZXRMaXN0YWdlbShkYXRhKTtcclxuICAgICAgLy8gQVRFTsOHw4NPIFVTRSBFU1NFIEPDk0RJR08gQ09NIENBVVRFTEEsIFJFTU9WRSBUVURPIC8vXHJcbiAgICAgIC8vIGlmIChkaWFfc2VtID49IDEgJiYgZGlhX3NlbSA8PSA1KSB7XHJcbiAgICAgIC8vICAgT2JqZWN0LmVudHJpZXMoZGF0YSkubWFwKChpbmRpdmlkdW8pID0+IHtcclxuICAgICAgLy8gICAgIGlmIChpbmRpdmlkdW9bMF0gIT0gXCJiYXNlXCIpIHtcclxuICAgICAgLy8gICAgICAgZG9SZW1vdmUoaW5kaXZpZHVvWzBdKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcbiAgY29uc3QgZG9SZW1vdmUgPSAoaWQpID0+IHtcclxuICAgIHJlbW92ZShgaHR0cHM6Ly9hZ3Vhdml2YS1ycC5maXJlYmFzZWlvLmNvbS90ZXN0ZS8ke2lkfS5qc29uYCk7XHJcbiAgfTtcclxuICBjb25zdCByZW1vdmUgPSAodXJsKSA9PiB7XHJcbiAgICBBeGlvcy5kZWxldGUodXJsKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYHZvY8OqIGRlbGV0b3UgJHt1cmx9YCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHZhciByZWRpcmVjdDtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmVkaXJlY3QgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICB9XHJcbiAgY29uc3QgcG9zdCA9IChkYXRhKSA9PiB7XHJcbiAgICBBeGlvcy5wb3N0KHVybCwgZGF0YSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldE5vbWVMaW1wYXIoIW5vbWVMaW1wYXIpO1xyXG4gICAgICBzZXRTb2JyZW5vbWVMaW1wYXIoIXNvYnJlbm9tZUxpbXBhcik7XHJcbiAgICAgIHNldFJlZGVMaW1wYXIoIXJlZGVMaW1wYXIpO1xyXG4gICAgICBzZXRDcmlhbmNhc0xpbXBhcighY3JpYW5jYXNMaW1wYXIpO1xyXG4gICAgICBhbGVydChcInZvY8OqIGNvbmZpcm1vdSBzdWEgcHJlc2Vuw6dhIG5vIGN1bHRvXCIpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9saXN0YWdlbS5odG1sXCI7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzYWx2ZSA9ICgpID0+IHtcclxuICAgIGlmIChub21lICYmIHNvYnJlbm9tZSAmJiByZWRlICYmIGN1bHRvKSB7XHJcbiAgICAgIGNvbnN0IGV4aXN0ZUNyaWFuY2FzID0gY3JpYW5jYXMgPyBjcmlhbmNhcyA6IFwiMFwiO1xyXG4gICAgICBwb3N0KHtcclxuICAgICAgICBub21lOiBub21lLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgc29icmVub21lOiBzb2JyZW5vbWUsXHJcbiAgICAgICAgcmVkZTogcmVkZSxcclxuICAgICAgICBjdWx0bzogY3VsdG8sXHJcbiAgICAgICAgY3JpYW5jYXM6IGV4aXN0ZUNyaWFuY2FzLFxyXG4gICAgICAgIGNoZWdhZGE6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiVW0gb3UgbWFpcyBjYW1wb3MgZXN0w6NvIGVtIGJyYW5jb1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuIFxyXG4gIGNvbnN0IGRpYSA9IHRydWVcclxuICBjb25zdCBpbnNjcmljYW8gPSBcImF0aXZvXCJcclxuXHJcbiAgLy8gbnVsbCB8IFwiXCIgfCB1bmRlZmluZWQgfCBmYWxzZVxyXG4gIGNvbnN0IGV4aXN0ZSA9IHRydWVcclxuXHJcblxyXG4gIC8vIDEgc2UgZXUgY29sb2NhciBtaW5oYSB2YXJpYXZlbCBjb20gdW0gdmFsb3IgcXVlIGV4aXN0ZSBtZXUgc2VsZWN0IHZhaSBleGliaXIgb3MgY3VsdG9zIGRlIHNhYmFkb3NcclxuICAvL3F1YW5kbyBuYW8gYXRlbmRlciBlbGEgdmFpIGV4aWJpciBjdWx0b3MgZGUgdGVyw6dhIGZlaXJhXHJcblxyXG4gIC8vIDIgY3JpYXIgdW1hIHNlZ3VuZGEgdmFyaWF2ZWwgcXVlIHNlIGZvciBpZ3VhbCBhIFwiQXRpdm9cIiBleGliYSBvIGJvdGFvIGluc2NyZXZlclxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIHtleGlzdGUgJiYgPD50ZXN0ZTwvPn0gXHJcbiAgICAgIHtleGlzdGUgPyA8PnRlc3RlPC8+IDogPD50ZXN0ZTI8Lz59ICovfVxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SWdyZWphIEJhdGlzdGEgw4FndWEgVml2YSAtIFJpYmVpcsOjbyBQaXJlczwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAge2V4aXN0ZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgIDxoMT5Gb3JtdWzDoXJpbyBwYXJhIGN1bHRvIGRvcyBqb3ZlbnMgKDI0LzA0KTwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogeyhxdGRTYWJhZG8gPCBxdGRNQXhpbWEgfHwgKi99XHJcbiAgICAgICAgICB7KHF0ZERvbWluZ29NYW5oYSA8IHF0ZE1BeGltYSB8fCBxdGREb21pbmdvTm9pdGUgPCBxdGRNQXhpbWEpICYmIChcclxuICAgICAgICAgICAgLy8gPD5cclxuICAgICAgICAgICAgLy8gICB7KGRpYV9zZW0gPT0gMCB8fCBkaWFfc2VtID09IDUgfHwgZGlhX3NlbSA9PSA2KSAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAge2xpc3RhZ2VtID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge25vbWVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldE5vbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHshbm9tZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0Tm9tZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dF9uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+U29icmVub21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge3NvYnJlbm9tZUxpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleVVwPXsoZSkgPT4gc2V0U29icmVub21lKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNvYnJlbm9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHshc29icmVub21lTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRTb2JyZW5vbWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU29icmVub21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5EaXNjaXB1bGFkbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIHtyZWRlTGltcGFyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVkZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWNpb25lIHNldSBkaXNjaXB1bGFkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImlzYWJlbGFcIj5Jc2FiZWxhIEFtYXJvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWF0aGV1c1wiPk1hdGhldXMgQW1hcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZWxpcGVcIj5GZWxpcGUgUmFtb3M8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaWxhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaWxhcyBTb3V6YVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZWxhaW5lXCI+RWxhaW5lIEplcmVtaWFzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7IXJlZGVMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWRlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2lvbmUgc2V1IGRpc2NpcHVsYWRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaXNhYmVsYVwiPklzYWJlbGEgQW1hcm88L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXRoZXVzXCI+TWF0aGV1cyBBbWFybzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZlbGlwZVwiPkZlbGlwZSBSYW1vczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNpbGFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpbGFzIFNvdXphXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlbGFpbmVcIj5FbGFpbmUgSmVyZW1pYXMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UXVhbCBjdWx0byBkZXNlamEgaXI/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAge2RpYSA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1bHRvKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2lvbmUgbyBjdWx0bzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIHtxdGRTYWJhZG8gPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FiYWRvXCI+U8OhYmFkbyAtIDE5aHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFuaGFcIj4gU8OhYmFkbyAtIDE1aHMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTm9pdGUgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9pdGVcIj5Tw6FiYWRvIC0gMTc6MzBocyA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VsdG8oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjaW9uZSBvIGN1bHRvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyoge3F0ZFNhYmFkbyA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2FiYWRvXCI+U8OhYmFkbyAtIDE5aHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb01hbmhhIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hbmhhXCI+IFRlcsOnYSAtIDE1aHMgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTm9pdGUgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9pdGVcIj5UZXLDp2EgLSAxNzozMGhzIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD59XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UXVhbnRhcyBjcmlhbsOnYXMgdmFpIGxldmFyIHBhcmEgbyBjdWx0aW5obz88L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIHtjcmlhbmNhc0xpbXBhciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlVcD17KGUpID0+IHNldENyaWFuY2FzKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk51bWVybyBkZSBjcmlhbsOnYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHshY3JpYW5jYXNMaW1wYXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiBzZXRDcmlhbmNhcyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOdW1lcm8gZGUgY3JpYW7Dp2FzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFnYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTlocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicmVkXCI+IHZhZ2FzIGVuY2VycmFkYXM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cXRkU2FiYWRvIDwgcXRkTUF4aW1hICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZFNhYmFkbyA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4gcmVzdGF7cXRkU2FiYWRvICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5tPC8+fTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZFNhYmFkb308L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGRTYWJhZG8gPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+IHZhZ2F7cXRkU2FiYWRvICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5zPC8+fTwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTw6FiYWRvIDE1OjAwaHMgLVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwicmVkXCI+IHZhZ2FzIGVuY2VycmFkYXM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPCBxdGRNQXhpbWEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgIT0gcXRkTUF4aW1hIC0gMSAmJiA8Pm08Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+IHtxdGRNQXhpbWEgLSBxdGREb21pbmdvTWFuaGF9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtxdGREb21pbmdvTWFuaGEgPj0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhZ2F7cXRkRG9taW5nb01hbmhhICE9IHF0ZE1BeGltYSAtIDEgJiYgPD5zPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIFPDoWJhZG8gMTc6MzBocyAtXHJcbiAgICAgICAgICAgICAgICAgICAgICB7cXRkRG9taW5nb05vaXRlID49IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJyZWRcIj4gdmFnYXMgZW5jZXJyYWRhczwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA8IHF0ZE1BeGltYSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSAhPSBxdGRNQXhpbWEgLSAxICYmIDw+bTwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ge3F0ZE1BeGltYSAtIHF0ZERvbWluZ29Ob2l0ZX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3F0ZERvbWluZ29Ob2l0ZSA+PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFnYXtxdGREb21pbmdvTm9pdGUgIT0gcXRkTUF4aW1hIC0gMSAmJiA8PnM8Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG5cclxuICAgICAgICAgICAgICAgICAge2luc2NyaWNhbyA9PT0gXCJhdGl2b1wiICYmIDxidXR0b24gb25DbGljaz17c2FsdmV9Pkluc2NyZXZlcjwvYnV0dG9uPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbGlzdGFnZW0uaHRtbFwiIGNsYXNzTmFtZT1cImxpc3RhZ2VtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpcXVlIGEgbGlzdGFnZW1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnJlZ2FuZG9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmcuZ2lmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+Q2FycmVnYW5kby4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgLy8gICApfVxyXG4gICAgICAgICAgICAvLyA8Lz5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgey8qIHtxdGRTYWJhZG8gPj0gcXRkTUF4aW1hICYmICovfVxyXG4gICAgICAgICAge3F0ZERvbWluZ29NYW5oYSA+PSBxdGRNQXhpbWEgJiZcclxuICAgICAgICAgICAgcXRkRG9taW5nb05vaXRlID49IHF0ZE1BeGltYSAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDEgJiZcclxuICAgICAgICAgICAgZGlhX3NlbSAhPSAyICYmXHJcbiAgICAgICAgICAgIGRpYV9zZW0gIT0gMyAmJlxyXG4gICAgICAgICAgICBkaWFfc2VtICE9IDQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhZm9cIj5cclxuICAgICAgICAgICAgICAgICAgSW5mZWxpem1lbnRlIHRvZG9zIG9zIGN1bHRvcyBwcmVzZW5jaWFpcyBqYSBlc2dvdGFyYW0gc3VhXHJcbiAgICAgICAgICAgICAgICAgIGNhcGFjaWRhZGUgZXhpZ2lkYSBwb3IgbGVpLCBtYXMgYWNvbXBhbmhlIG9ubGluZSBwZWxhcyBub3NzYXNcclxuICAgICAgICAgICAgICAgICAgcmVkZXMgc29jaWFpc1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNTZ2VMTmJEZjY4bGluWVo3WEJ6dXVnL3ZpZGVvc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3lvdXR1YmUuc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vSWJhdlJpYmVpcmFvUGlyZXMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZmFjZWJvb2suc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2liYXZycC9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIgY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9saXN0YWdlbS5odG1sXCIgY2xhc3NOYW1lPVwibGlzdGFnZW1fZW5jZXJyYWRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpcXVlIGEgbGlzdGFnZW0gZG9zIGN1bHRvcyBwcmVzZW5jaWFpc1xyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7Lyoge2RpYV9zZW0gPj0gMSAmJiBkaWFfc2VtIDw9IDQgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYWZvXCI+XHJcbiAgICAgICAgICAgICAgTyBzaXRlIHPDsyBhYnJpcsOhIGFzIGluc2NyacOnw7VlcyA8Yj5zZXh0YS1mZWlyYSBhcyAwMGhzPC9iPlxyXG4gICAgICAgICAgICAgIEVucXVhbnRvIGVzcGVyYSBub3MgYWNvbXBhbmhlIG5hcyBub3NzYXMgcmVkZXMgc29jaWFpc3tcIiBcIn1cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ1NnZUxOYkRmNjhsaW5ZWjdYQnp1dWcvdmlkZW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy95b3V0dWJlLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9JYmF2UmliZWlyYW9QaXJlcy9cIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ZhY2Vib29rLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaWJhdnJwL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW5zdGFncmFtLnN2Z1wiIGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9