// ==UserScript==
// @name         SPaste Kill Inline CSS
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Removes the retarded inline CSS.
// @author       CrunchyHotDogs
// @match        http://www.spaste.com/p/*
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// @downloadUrl  https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/xdcc%20horriblesubs/change_background.js
// @updateUrl	 https://raw.githubusercontent.com/CrunchyHotDogs/tampermonkey/master/xdcc%20horriblesubs/change_background.js
// ==/UserScript==

(function() {
    'use strict';
	var inputs = document.getElementsByTagName('a');

	for(var i = 0; i < inputs.length; i++) {
		i.style.removeProperty('color');
	}
})();