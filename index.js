Object.defineProperty(exports,"__esModule",{value:!0});var escapeCodes={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};exports.unescape=function(e){return e.replace(/(&amp;)|(&lt;)|(&gt;)|(&quot;)|(&#39;)/g,function(e,t,o,r,p,u){return escapeCodes[t||o||r||p||u]})};