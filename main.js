/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst img_root = \"img/\";\r\n\r\nconst geog = [{\r\n    id: 0,\r\n    name: \"SSDA Collection\",\r\n    img: \"img/logo.jpg\",\r\n    parent: null,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 1,\r\n    name: \"Brazil\",\r\n    img: img_root + \"logo.jpg\",\r\n    parent: 0,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 2,\r\n    name: \"Minas Gerais\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 1,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 3,\r\n    name: \"Paraíba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 1,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 4,\r\n    name: \"State of Rio de Janeiro\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 1,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 5,\r\n    name: \"Nova Lima\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 2,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 6,\r\n    name: \"João Pessoa\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 3,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 7,\r\n    name: \"São João do Cariri\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 3,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 8,\r\n    name: \"Nossa Senhora do Pilar\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 5,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 9,\r\n    name: \"Arquivo Histórico do Estado da Paraíba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 6,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 10,\r\n    name: \"Instituto Histórico e Geográfico Paraibano\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 6,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 11,\r\n    name: \"Paróquia de Nossa Senhora dos Milagres\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 7,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 13,\r\n    name: \"Araruama\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 14,\r\n    name: \"Búzios\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 15,\r\n    name: \"Cabo Frio\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 16,\r\n    name: \"Cachoeiras de Macacu\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 17,\r\n    name: \"Campos dos Goytacazes\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 18,\r\n    name: \"Cantagalo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 19,\r\n    name: \"Freguesias Não Identificadas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 20,\r\n    name: \"Guapimirim\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 21,\r\n    name: \"Guaratiba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 22,\r\n    name: \"Itaboraí\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 23,\r\n    name: \"Magé\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 24,\r\n    name: \"Mangaratiba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 25,\r\n    name: \"Maricá\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 26,\r\n    name: \"Mendes\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 27,\r\n    name: \"Niterói\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 28,\r\n    name: \"Nova Iguaçu\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 29,\r\n    name: \"Paracambi\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 30,\r\n    name: \"Paraíba do Sul\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 31,\r\n    name: \"Rio Bonito\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 32,\r\n    name: \"Rio Claro\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 33,\r\n    name: \"Rio de Janeiro\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 34,\r\n    name: \"Santana das Palmeiras\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 35,\r\n    name: \"São Gonçalo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 36,\r\n    name: \"São Pedro da Aldeia\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 37,\r\n    name: \"Saquarema\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 38,\r\n    name: \"Silva Jardim\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 39,\r\n    name: \"Valença\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 43,\r\n    name: \"Capela de Nossa Senhora do Cabo da Fazenda Parati\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 13,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 44,\r\n    name: \"Cemitério Público de Iguaba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 13,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 45,\r\n    name: \"Igreja de São Sebastião de Araruama\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 13,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 46,\r\n    name: \"Igreja de São Vicente de Paulo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 13,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 47,\r\n    name: \"Igreja Sant Anna\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 14,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 48,\r\n    name: \"Igreja de Nossa Senhora da Assunção\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 15,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 49,\r\n    name: \"Igreja da Santíssima Trindade de Papucaia\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 16,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 50,\r\n    name: \"Igreja de São Jose da Boa Morte de Santo Antônio de Sá\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 16,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 51,\r\n    name: \"Paróquia de Sant Anna de Japuíba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 16,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 52,\r\n    name: \"Igreja de São Francisco de Assis\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 17,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 53,\r\n    name: \"Igreja de São Salvador\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 17,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 54,\r\n    name: \"São Gonçalo-Goitacazes\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 17,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 55,\r\n    name: \"Santa Rita do Rio Negro\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 18,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 56,\r\n    name: \"Capela de Sant Ana\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 20,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 57,\r\n    name: \"Igreja de Nossa Senhora d'Ajuda de Guapimirim\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 20,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 58,\r\n    name: \"Igreja de São Salvador do Mundo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 21,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 60,\r\n    name: \"Igreja e Convento de São Boaventura de Santo Antônio de Sá\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 22,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 61,\r\n    name: \"Igreja Matriz de Santo Antônio de Sá\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 22,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 62,\r\n    name: \"Nossa Senhora da Conceição de Porto das Caixas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 22,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 63,\r\n    name: \"Nossa Senhora do Desterro de Itambi\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 22,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 64,\r\n    name: \"Santo Antonio de Cacerebu\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 22,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 65,\r\n    name: \"São João Batista de Itaboraí\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 22,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 59,\r\n    name: \"Irmandade de São Miguel e Almas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 23,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 66,\r\n    name: \"Nossa Senhora da Guia de Pacobaíba Mauá\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 23,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 67,\r\n    name: \"Nossa Senhora da Piedade de Inhomorim\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 23,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 68,\r\n    name: \"Nossa Senhora da Piedade de Magepe\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 23,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 69,\r\n    name: \"São Nicolau de Suruí\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 23,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 70,\r\n    name: \"Igreja Matriz de Nossa Senhora da Guia\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 24,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 71,\r\n    name: \"Nossa Senhora do Amparo de Maricá\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 25,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 72,\r\n    name: \"Igreja Matriz de Santa Cruz\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 26,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 73,\r\n    name: \"Catedral de São João Batista de Niterói\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 27,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 74,\r\n    name: \"Nossa Senhora da Conceição de Jurujuba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 27,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 75,\r\n    name: \"Nossa Senhora do Bonsucesso de Piratininga\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 27,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 76,\r\n    name: \"São Sebastião de Itaipu\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 27,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 77,\r\n    name: \"Catedral de Santo Antônio de Jacutinga\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 28,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 78,\r\n    name: \"Igreja de Nossa Senhora da Piedade de Iguaçu\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 28,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 79,\r\n    name: \"Nossa Senhora da Conceição de Marapicu\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 28,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 80,\r\n    name: \"São Pedro e São Paulo de Paracambi\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 29,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 81,\r\n    name: \"Freguesia de Paraíba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 30,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 82,\r\n    name: \"Igreja de Nossa Senhora da Conceição e São Pedro e São Paulo da Paraíba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 30,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 83,\r\n    name: \"Nossa Senhora da Conceição do Rio Bonito\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 31,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 84,\r\n    name: \"Nossa Senhora da Conceição do Passa Três\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 32,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 85,\r\n    name: \"São João Marcos do Campo Novo de São Paulo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 32,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 86,\r\n    name: \"Igreja de Nossa Senhora da Apresentação de Irajá\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 33,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 87,\r\n    name: \"Nossa Senhora da Conceição da Pavuna\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 33,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 88,\r\n    name: \"Paróquia Nossa Senhora de Loreto\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 33,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 89,\r\n    name: \"São Salvador do Mundo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 33,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 90,\r\n    name: \"Nossa Senhora de Santana das Palmeiras\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 34,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 91,\r\n    name: \"Igreja Matriz de São Gonçalo do Amarante\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 35,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 92,\r\n    name: \"Nossa Senhora da Conceição de Cordeiros\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 35,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 93,\r\n    name: \"Matriz de São Pedro\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 36,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 94,\r\n    name: \"Nossa Senhora de Nazaré de Saquarema\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 37,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 95,\r\n    name: \"Igreja Matriz de Correntezas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 38,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 96,\r\n    name: \"Nossa Senhora da Lapa de Capivari\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 38,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 97,\r\n    name: \"Santa Isabel do Rio Preto\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 39,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 98,\r\n    name: \"United States\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 0,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 99,\r\n    name: \"Florida\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 98,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 100,\r\n    name: \"St. Augustine\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 99,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 101,\r\n    name: \"Archives of the Diocese of St Augustine\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 100,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 102,\r\n    name: \"Colombia\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 0,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 103,\r\n    name: \"Bolívar\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 102,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 104,\r\n    name: \"Chocó\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 102,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 105,\r\n    name: \"Córdoba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 102,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 106,\r\n    name: \"La Guajira\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 102,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 107,\r\n    name: \"Valle del Cauca\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 102,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 108,\r\n    name: \"Cartagena de Indias\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 103,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 109,\r\n    name: \"Santa Cruz de Mompox\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 103,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 110,\r\n    name: \"Archivo Histórico de Cartagena\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 108,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 111,\r\n    name: \"Archivo Histórico de Mompox\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 109,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 112,\r\n    name: \"Quibdó\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 104,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 113,\r\n    name: \"Notaria Primera de Quibdó\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 112,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 114,\r\n    name: \"Chinú\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 105,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 115,\r\n    name: \"Montería\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 105,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 116,\r\n    name: \"San Andrés de Sotavento\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 105,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 117,\r\n    name: \"Santa Cruz de Lorica\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 105,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 118,\r\n    name: \"Parroquia San Francisco de Asís\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 114,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 119,\r\n    name: \"Parroquia San Jerónimo de Montería\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 115,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 120,\r\n    name: \"Iglesia San Andrés Apostol\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 116,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 121,\r\n    name: \"Iglesia de Santa Cruz de Lorica\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 117,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 122,\r\n    name: \"Notaría Unica de Lorica\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 117,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 123,\r\n    name: \"Riohacha\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 106,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 124,\r\n    name: \"Notaría Primera de Riohacha\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 123,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 125,\r\n    name: \"Buenaventura\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 107,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 126,\r\n    name: \"Notaría Primera de Buenaventura\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 125,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 127,\r\n    name: \"Cuba\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 0,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 128,\r\n    name: \"Province of Cienfuegos\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 127,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 129,\r\n    name: \"Holguín\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 127,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 130,\r\n    name: \"Province of Havana\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 127,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 131,\r\n    name: \"Province of Matanzas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 127,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 132,\r\n    name: \"Cienfuegos\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 128,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 133,\r\n    name: \"Catedral de Nuestra Señora de la Purísima Concepción\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 132,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 134,\r\n    name: \"Mayarí\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 129,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 135,\r\n    name: \"Iglesia de San Gregorio de Mayarí\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 134,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 136,\r\n    name: \"Havana\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 130,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 137,\r\n    name: \"Arzobispado de la Habana\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 138,\r\n    name: \"Catedral de la Habana\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 139,\r\n    name: \"Iglesia de Jesús María y José\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 140,\r\n    name: \"Iglesia de Nuestra Señora de la Asunción de Guanabacoa\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 141,\r\n    name: \"Iglesia de Nuestra Señora de Regla\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 142,\r\n    name: \"Iglesia de San Geronimo de Puentes Grandes\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 143,\r\n    name: \"Iglesia del Espíritu Santo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 144,\r\n    name: \"Iglesia del Santo Ángel Custodio\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 145,\r\n    name: \"Iglesia del Santo Cristo del Buen Viaje\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 136,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 146,\r\n    name: \"Cárdenas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 131,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 147,\r\n    name: \"Carlos Rojas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 131,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 148,\r\n    name: \"Ceiba Mocha\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 131,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 149,\r\n    name: \"Jagüey Grande\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 131,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 150,\r\n    name: \"Lagunillas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 131,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 151,\r\n    name: \"Limonar\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 131,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 152,\r\n    name: \"Matanzas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 131,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 153,\r\n    name: \"Perico\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 131,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 154,\r\n    name: \"Iglesia de Ascenso de la Purísima Concepción\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 146,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 155,\r\n    name: \"Iglesia de Nuestra Señora del Pilar de Cimarrones\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 147,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 156,\r\n    name: \"Iglesia de San Agustín de Ceiba Mocha\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 148,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 157,\r\n    name: \"Iglesia Parroquial de Nuestra Señora de Altagracia\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 149,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 158,\r\n    name: \"Parroquia de Ingreso de San Juan Bautista\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 150,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 159,\r\n    name: \"Iglesia Parroquial de San Cipriano Obispo y Purísima Concepción de Limonar\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 151,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 160,\r\n    name: \"Archivo Histórico Provincial de Matanzas\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 152,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 161,\r\n    name: \"Catedral de San Carlos Borromeo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 152,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 162,\r\n    name: \"Iglesia de San Juan Bautista de Pueblo Nuevo\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 152,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 163,\r\n    name: \"Iglesia de San Pedro Apóstol\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 152,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 164,\r\n    name: \"Iglesia de Termino\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 152,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 165,\r\n    name: \"Iglesia de San Roque y Santa Catalina de Siena\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 153,\r\n    vol: true\r\n  },\r\n  {\r\n    id: 166,\r\n    name: \"São João de Meriti\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 4,\r\n    vol: false\r\n  },\r\n  {\r\n    id: 167,\r\n    name: \"Freguesia de São João de Meriti\",\r\n    img: \"img/logo.jpg\",\r\n    parent: 166,\r\n    vol: true\r\n  }\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (geog);\r\n\n\n//# sourceURL=webpack://ssda-website/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n\r\n\r\nconst buildCollectionCard = collection => {\r\n  const div = document.createElement(\"div\");\r\n  const h4 = document.createElement(\"h4\");\r\n  const a = document.createElement(\"a\");\r\n  const img = document.createElement(\"img\");\r\n  const body = document.querySelector(\"body\");\r\n  body.append(div);\r\n  h4.append(a);\r\n  div.append(h4);\r\n  div.append(img);\r\n  a.innerHTML = collection.name;\r\n  var collectionName = collection.name;\r\n  collectionName = collectionName.toLowerCase().split(\" \").join(\"_\");\r\n  var url = window.location.href;\r\n  var domainEnd = url.lastIndexOf(\"/\");\r\n  a.setAttribute(\"href\", url.substring(0, domainEnd + 1) + \"?collection=\" + collectionName);\r\n  img.setAttribute(\"src\", collection.img);\r\n  // div.setAttribute(\"class\", ???);\r\n};\r\n\r\nfunction getCollectionName(url) {\r\n  if (!url) url = window.location.href;\r\n  var regex = new RegExp(\"[?&]\" + \"collection\" + \"(=([^&#]*)|&|#|$)\"),\r\n    results = regex.exec(url);\r\n  if (!results) return null;\r\n  if (!results[2]) return null;\r\n  var decodedURI = decodeURI(results[2]);\r\n  decodedURI = decodedURI.split(\"_\").join(\" \");\r\n  var collectionName = \"\";\r\n  const articles = [\"de\", \"do\", \"e\", \"da\", \"dos\", \"das\", \"of\", \"the\", \"del\", \"la\", \"y\", \"d'ajuda\"];\r\n  var first = true;\r\n  for (var word of decodedURI.split(\" \")) {\r\n    var isArticle = articles.includes(word);\r\n    if ((isArticle == false) || (first)) {\r\n      word = word.charAt(0).toUpperCase() + word.substring(1, word.length);\r\n    }\r\n    if (first) {\r\n      first = false;\r\n    }\r\n    if (word.includes(\"-\")) {\r\n      word = word.substring(0, word.lastIndexOf(\"-\") + 1) + word.charAt(word.lastIndexOf(\"-\") + 1).toUpperCase() + word.substring(word.lastIndexOf(\"-\") + 2, word.length);\r\n    }\r\n    if (word.includes(\"'\")) {\r\n      word = word.substring(0, word.lastIndexOf(\"'\") + 1) + word.charAt(word.lastIndexOf(\"'\") + 1).toUpperCase() + word.substring(word.lastIndexOf(\"'\") + 2, word.length);\r\n    }\r\n    collectionName = collectionName + word + \" \";\r\n  };\r\n  collectionName = collectionName.substring(0, collectionName.length - 1);\r\n  return collectionName;\r\n};\r\n\r\nfunction getCollectionId(collectionName) {\r\n  console.log(collectionName);\r\n  if (collectionName == null) {\r\n    return 0;\r\n  }\r\n  for (var collection of _data_js__WEBPACK_IMPORTED_MODULE_0__.default) {\r\n    if (collection.name == collectionName) {\r\n      console.log(collection.id);\r\n      return collection.id;\r\n    }\r\n  }\r\n  return 0;\r\n};\r\n\r\nfunction hasVols(collectionId) {\r\n  for (var collection of _data_js__WEBPACK_IMPORTED_MODULE_0__.default) {\r\n    if (collection.id == collectionId) {\r\n      return collection.vol;\r\n    }\r\n  }\r\n};\r\n\r\nconst cloudsearchPrefix = \"https://9x6n6cxjaa.execute-api.us-east-1.amazonaws.com/dev/?q=\"\r\n\r\nasync function getVols(collectionName) {\r\n  const encodedCollectionName = encodeURI(collectionName);\r\n  var searchString = \"institution:'\" + encodedCollectionName + \"'\";\r\n  const url = cloudsearchPrefix + \"institution:%27\" + encodedCollectionName + \"%27&q.parser=structured&size=10000\";\r\n\r\n  let response = await fetch(url);\r\n\r\n  if (response.ok) {\r\n    let json = await response.json();\r\n    var vols = json.hits.hit;\r\n    for (var volume of vols) {\r\n      buildVolumeCard(volume);\r\n    }\r\n  }\r\n};\r\n\r\nfunction buildVolumeCard(volume) {\r\n  const div = document.createElement(\"div\");\r\n  const h4 = document.createElement(\"h4\");\r\n  const a = document.createElement(\"a\");\r\n  const img = document.createElement(\"img\");\r\n  const body = document.querySelector(\"body\");\r\n  body.append(div);\r\n  h4.append(a);\r\n  div.append(h4);\r\n  div.append(img);\r\n  a.innerHTML = volume.fields.title;\r\n  var url = window.location.href;\r\n  var domainEnd = url.lastIndexOf(\"/\");\r\n  a.setAttribute(\"href\", url.substring(0, domainEnd + 1) + \"volume?id=\" + volume.id);\r\n  img.setAttribute(\"src\", \"img/logo.jpg\");\r\n  // div.setAttribute(\"class\", ???);\r\n}\r\n\r\nconst collectionID = getCollectionId(getCollectionName());\r\n\r\nif (hasVols(collectionID) == false) {\r\n  for (var coll of _data_js__WEBPACK_IMPORTED_MODULE_0__.default) {\r\n    if (coll.parent == collectionID) {\r\n      buildCollectionCard(coll);\r\n    }\r\n  }\r\n} else {\r\n  getVols(getCollectionName());\r\n};\r\n\r\n//geog.forEach(collection => buildCollectionCard(collection, getCollectionId(getCollectionName())));\r\n\n\n//# sourceURL=webpack://ssda-website/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;