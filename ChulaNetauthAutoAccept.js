// ==UserScript==
// @name         Chula Netauth Auto Accept
// @namespace    https://greasyfork.org/en/scripts/480362
// @license MIT
// @version      0.3
// @description  Auto accept agreement's checkbox
// @author       JusJira
// @match        https://netauth1.it.chula.ac.th/login
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ac.th
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let checkbox = document.getElementsByName("accept")
    checkbox[0].checked = true;
})();
