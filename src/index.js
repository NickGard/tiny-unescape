Object.defineProperty(exports, "__esModule", { value: true });
var escapeCodes = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
};
exports.unescape = function(s) {
  return s.replace(/(&amp;)|(&lt;)|(&gt;)|(&quot;)|(&#39;)/g, function(
    wholeMatch,
    ampersand,
    lessThan,
    greaterThan,
    doubleQuote,
    singleQuote
  ) {
    return escapeCodes[
      ampersand || lessThan || greaterThan || doubleQuote || singleQuote
    ];
  });
};
