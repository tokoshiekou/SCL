// ==UserScript==
// @name         Hide Scrollbar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide all default scrollbars on webpages.
// @author       Ethan
// @match        *://*/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const style = document.createElement("style");

  style.innerHTML = `
      /* Hide scrollbars for all elements */
      ::-webkit-scrollbar {
          width: 0px;
          height: 0px;
      }

      /* For Firefox */
      body {
          scrollbar-width: none;
      }

      /* Optional: Prevent margin collapse for better spacing when scrollbars are hidden */
      html, body {
          margin: 0;
          padding: 0;
      }
  `;

  document.head.appendChild(style);
})();
