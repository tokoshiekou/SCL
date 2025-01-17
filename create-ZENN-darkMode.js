// ==UserScript==
// @name         Zenn Dark Mode (CSS Variables Override)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Null
// @author       Null
// @match        https://zenn.dev/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  // Check if we are on the Zenn page
  if (!window.location.host.includes("zenn.dev")) return;

  // Dark mode CSS variables override
  GM_addStyle(`
        :root {
            /* Primary Colors */
            --c-blue-100: #121212;
            --c-blue-200: #1a1a1a;
            --c-blue-300: #2a2a2a;
            --c-blue-400: #3a3a3a;
            --c-blue-500: #4a4a4a;
            --c-blue-600: #5a5a5a;
            --c-blue-700: #6a6a6a;

            /* Gray colors */
            --c-gray-100: #1f1f1f;
            --c-gray-200: #2f2f2f;
            --c-gray-300: #3f3f3f;
            --c-gray-400: #4f4f4f;
            --c-gray-500: #5f5f5f;
            --c-gray-600: #6f6f6f;
            --c-gray-700: #7f7f7f;
            --c-gray-800: #8f8f8f;

            /* Background colors */
            --c-bg-base: #121212;
            --c-bg-neutral: #2a2a2a;
            --c-bg-neutral-lighter: #121212;
            --c-bg-neutral-lightest: #1a1a1a;
            --c-bg-primary: #222222;
            --c-bg-primary-lighter: #121212;
            --c-bg-secondary: #444444;
            --c-bg-alert: #d32f2f; /* Red alert */
            --c-bg-like: #9c27b0; /* Purple like */
            --c-selection-highlight: #1d84c5; /* Highlight color */

            /* Text colors */
            --c-text-body: #e0e0e0;
            --c-text-low-priority: #b0b0b0;
            --c-text-lower-priority: #909090;
            --c-text-link-primary: #80d0f0;

            /* Button colors */
            --c-button-primary: #00796b;
            --c-button-primary-hover: #004d40;
            --c-button-secondary: #ff5722;
            --c-button-secondary-hover: #e64a19;

            /* Borders and Shadows */
            --c-neutral-border: #3f3f3f;
            --c-neutral-border-lighter: #5f5f5f;
            --c-focus-shadow: #00796b;
        }
        /* All content's background set Dark Theme */
        * :not(span) {
            background-color: var(--c-blue-100) !important;
        }

        /* Background Colors */
        body, .sc-1wjnqje-1, .sc-1wjnqje-4, .sc-1wjnqje-3 {
            background-color: var(--c-bg-base) !important;
            color: var(--c-text-body) !important;
        }

        /* Article background */
        .sc-1wjnqje-2, .sc-1wjnqje-3 {
            background-color: var(--c-bg-neutral) !important;
        }

        /* Links */
        a, a:visited {
            color: var(--c-text-link-primary) !important;
        }

        /* Code block */
        .highlight, pre, code {
            background-color: var(--c-bg-neutral-lightest) !important;
            color: var(--c-text-body) !important;
        }

        /* Navbar */
        .sc-1wjnqje-5, .sc-1wjnqje-6 {
            background-color: var(--c-bg-primary) !important;
        }

        /* Buttons */
        .sc-1wjnqje-0 {
            background-color: var(--c-button-primary) !important;
            color: var(--c-text-body) !important;
        }
        .sc-1wjnqje-0:hover {
            background-color: var(--c-button-primary-hover) !important;
        }

        /* Form Inputs */
        input, textarea, select {
            background-color: var(--c-bg-primary-lighter) !important;
            color: var(--c-text-body) !important;
            border-color: var(--c-neutral-border) !important;
        }

        /* Adjust the scrollbar color */
        ::-webkit-scrollbar {
            width: 12px;
            height: 12px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #555555;
        }
        ::-webkit-scrollbar-track {
            background-color: #222222;
        }

        /* Highlight text selection */
        ::selection {
            background: var(--c-selection-highlight);
            color: var(--c-bg-base);
        }
        /* custom settings */
        .LikeButton_button__ZwdG4, .PublicationInfoForDesktop_container__UxKig,
        .View_inner__ygVA3, nav.ExploreNav_nav__wOwhN, a.ArticleList_emoji__C9rT3 {
            color: var(--c-blue-100) !important;
            border: 0px !important;
        }
        .ExploreNav_childNavLink__txJ8p:hover, .ArticleComments_commentForm__b1KSY,
        .msg, .msg-content, .msg-content>.code-line {
            background-color: #555555 !important;
        }
        .msg, .msg-content, .msg-content>.code-line {
            color: var(--c-text-low-priority) !important;
        }
        .msg-content>.code-line>code {
            background-color: var(--c-bg-secondary) !important;
            color: var(--c-text-body) !important;
        }
        img {
            filter: brightness(0.7) contrast(1.2) !important;
        }
    `);
})();
