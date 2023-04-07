// ==UserScript==
// @name         Fpuzzles-SafeCracker-Arrows
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds ability to put safe cracker arrows into cells in f-puzzles.
// @author       Chameleon
// @updateURL    https://github.com/yusitnikov/fpuzzles-safe-cracker-arrows/raw/main/fpuzzles-safe-cracker-arrows.user.js
// @match        https://*.f-puzzles.com/*
// @match        https://f-puzzles.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.plugins = window.plugins || {};
plugins.allowedLetters = plugins.allowedLetters || {};
plugins.allowedLetters["<"] = "Normal";
plugins.allowedLetters[">"] = "Normal";
