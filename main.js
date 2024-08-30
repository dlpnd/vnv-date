// ==UserScript==
// @name         Viva Non Freedom Dates
// @namespace    dlpnd
// @version      6
// @description  Use non ambigious Freedom dates
// @copyright    2020-2023 DLpnd
// @license      MIT; http://en.wikipedia.org/wiki/Mit_license
// @author       DLpnd
// @match        https://*.moddinglinked.com/changelog.html
// @grant        none
// ==/UserScript==

(function () {
    `use strict`;
    // Remove the Help paragraph from HTML DOM
    document.querySelectorAll(`h2`)[0].remove();

    // Query Selector returns a NodeList of iterable objects
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/NodeList
    const dateElement = document.querySelectorAll(`.install`);

    // values() returns an iterator allowing code to go through all values (nodes) of the key/value pairs contained in the NodeList collection.
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/NodeList/values
    for (const dateTextValue of dateElement.values()) {

        // Construct a Date object from the parsed Date values in the DOM
        dateTextValue.textContent = new Date(
            20 + // We append a full century because constructor starts with 10, e.g. 1023 instead of 2023
            dateTextValue.textContent.split(`/`)[2],
            dateTextValue.textContent.split(`/`)[1] - 1, // We subtract 1 month due to ECMA Date are based on Java Date
            dateTextValue.textContent.split(`/`)[0]
        ).toLocaleDateString(navigator.language, { weekday: `long`, year: `numeric`, month: `long`, day: `numeric` });
    }
})();