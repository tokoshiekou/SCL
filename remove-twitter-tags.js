// ==UserScript==
// @name         remove-twitter-tags
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove a tags with specific href attributes on page load
// @author       Tokoshiekou
// @match        https://x.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
	// Remove redundant tags from Twitter navigation bar
  const hrefsToRemove = [
      '/i/verified-orgs-signup',
      '/i/premium_sign_up',
      '/i/grok',
      '/settings/monetization',
      'https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb',
      '/jobs',
      '/i/monetization',
      // Change the param to your twitter name
      '/{YourName}/communities',
      '/messages',
      '/i/spaces/start'
  ];

  function removeSpecificLinks() {
      document.querySelectorAll('a').forEach(link => {
          if (hrefsToRemove.includes(link.getAttribute('href'))) {
              link.style.display = 'none';
          }
      });
  }

  function removeFirstChild(selector) {
      var parentElement = document.querySelector(selector);

      if (parentElement && parentElement.firstChild) {
          parentElement.firstChild.style.display = 'none';
      }
  }

  function removeElement(element) {
      var ele = document.querySelector(element);
      if (ele) {
          ele.style.display = 'none';
      }
  }

  const observer = new MutationObserver(() => {
      removeSpecificLinks();
      // Remove member ads from the right side of the Home page
      removeFirstChild('.css-175oi2r.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x');
      // Remove authentication badge from personal page
      removeElement('.css-175oi2r.r-1habvwh.r-eqz5dr.r-uaa2di.r-1mmae3n.r-3pj75a.r-bnwqim');
  });

  observer.observe(document.body, {
      childList: true,
      subtree: true
  });

  removeSpecificLinks();

})();