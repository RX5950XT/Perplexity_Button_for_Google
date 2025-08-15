// ==UserScript==
// @name         Perplexity 按鈕
// @name:en      Add Perplexity Button to Google Search Results (Fixed Top-Left)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在 Google 搜索結果頁面，於螢幕左上角新增一個固定的按鈕，點擊後會使用相同的關鍵詞在 Perplexity.ai 上進行搜索。
// @description:en Add a fixed button to the top-left corner of the Google search results page. Clicking it will search for the same keyword on Perplexity.ai.
// @author       RX5950XT
// @match        https://www.google.com/search*
// @match        https://www.google.com.*/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=perplexity.ai
// @grant        GM_addStyle
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // --- 樣式定義 (CSS) ---
    // 使用 GM_addStyle 來注入 CSS
    GM_addStyle(`
        #perplexity-search-button {
            position: fixed;      /* 固定位置，不隨頁面滾動 */
            top: 100px;            /* 【調整】從 30px 增加到 50px，再次下移 */
            left: 15px;           /* 距離左側 15px */
            z-index: 9999;        /* 確保按鈕在最上層 */
            padding: 10px 18px;   /* 按鈕大小 */
            background-color: #000000;
            color: white;
            font-size: 15px;      /* 文字大小 */
            font-weight: bold;
            text-decoration: none;
            border: 1px solid #333;
            border-radius: 24px;
            text-align: center;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        #perplexity-search-button:hover {
            background-color: #333333;
            transform: translateY(-2px);
        }
    `);

    // --- 核心邏輯 (與前一版相同，無需修改) ---
    function addPerplexityButton() {
        const params = new URLSearchParams(window.location.search);
        const query = params.get('q');

        if (query && !document.getElementById('perplexity-search-button')) {
            const perplexityUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(query)}`;
            const button = document.createElement('a');
            button.id = 'perplexity-search-button';
            button.href = perplexityUrl;
            button.textContent = '用 Perplexity 搜';
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
            document.body.appendChild(button);
            return true;
        }
        return false;
    }

    const observer = new MutationObserver(function(mutations, me) {
        if (addPerplexityButton()) {
            me.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    addPerplexityButton();

})();