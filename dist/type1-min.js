"use strict";let bitcoinCode,stellarCode;const divs=document.querySelectorAll('[data-bistow-widget-type="1"]');for(const e of divs){bitcoinCode=e.dataset.bitcoin,stellarCode=e.dataset.stellar;const t=generateTemplate();e.innerHTML=t}function generateTemplate(){return`\n        <h3>Great this works marvelous...</h3>\n        ${getCodes(bitcoinCode)}\n        ${getCodes(stellarCode)}\n    `}function getCodes(e){return e?`<img src="${e}" />`:""}