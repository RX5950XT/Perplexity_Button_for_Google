# Perplexity Button for Google

A simple Tampermonkey script that adds a button to Google search results, allowing you to instantly perform the same search on Perplexity.ai.

一個簡單的油猴腳本，它會在 Google 搜尋結果頁面的左上角添加一個按鈕，讓您一鍵將相同的關鍵詞轉到 Perplexity.ai 進行搜索。

---

## 功能 (Features)

* **一鍵切換**: 在 Google 搜索結果頁面新增一個固定按鈕。
* **無縫搜索**: 點擊按鈕後，自動在新分頁中使用相同關鍵詞在 Perplexity.ai 上搜索。
* **固定位置**: 按鈕懸浮在頁面左上角，不會隨頁面滾動而消失。
* **簡潔設計**: 現代化的按鈕設計，並帶有細微的懸停動畫。
* **輕量高效**: 腳本極小，不影響瀏覽器性能。
* **高度可訂製**: 您可以輕鬆修改腳本內的 CSS 來自訂按鈕外觀和位置。

## 安裝 (Installation)

您需要先安裝一個用戶腳本管理器。推薦使用 Tampermonkey。

You need a user script manager first. Tampermonkey is recommended.

1. **安裝 Tampermonkey**

   * [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   * [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   * [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
   * [Safari](https://apps.apple.com/app/apple-store/id1482490089)
2. **安裝本腳本 (Install This Script)**

   1. 打開 Tampermonkey 的**管理面板**。
   2. 點擊**「+」**號標籤頁來創建一個新腳本。
   3. 刪除編輯器中的所有預設內容。
   4. 複製 [**這個腳本文件**](https://github.com/YOUR_USERNAME/Google-to-Perplexity/blob/main/google-to-perplexity.user.js) 的全部代碼。
   5. 將代碼貼到 Tampermonkey 編輯器中。
   6. 按 `Ctrl + S` 或點擊「文件」->「保存」。

## 使用方法 (Usage)

1. 在 Google 上進行任意搜索。
2. 在搜索結果頁面的左上角，您會看到一個黑色的 **「用 Perplexity 搜」** 按鈕。
3. 點擊它，即可在新分頁中看到 Perplexity.ai 的搜索結果。就是這麼簡單！

## 自訂 (Customization)

您可以非常容易地修改按鈕的樣式。打開 Tampermonkey 編輯器找到此腳本，然後修改 `GM_addStyle` 中的 CSS 程式碼。

You can easily customize the button's appearance by editing the CSS within the `GM_addStyle` section of the script.

```css
#perplexity-search-button {
    position: fixed;
    top: 50px;      /* 垂直位置：數字越大越往下 */
    left: 15px;     /* 水平位置：數字越大越往右 */
    padding: 10px 18px; /* 內邊距：控制按鈕大小 */
    font-size: 15px;    /* 文字大小 */
    /* ...其他樣式... */
}
```
