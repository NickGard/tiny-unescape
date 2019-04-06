const { unescape } = require("./index");
const { expect } = require("chai");

describe("unescape", () => {
  it("does not unescape non-html-encoded characters", () => {
    const input = "lorem ipsum;-+=/";
    expect(unescape(input)).to.equal(input);
  });
  it("unescapes html-encoded characters", () => {
    const input = "&amp;&lt;&gt;&quot;&#39;";
    const expected = `&<>"'`;
    expect(unescape(input)).to.equal(expected);
  });
});
