# tiny-unescape

[![source](https://badgen.net/npm/v/@ngard/tiny-unescape)](https://www.npmjs.com/package/@ngard/tiny-unescape)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-unescape)](https://bundlephobia.com/result?p=@ngard/tiny-unescape)
[![build status](https://badgen.net/travis/NickGard/tiny-unescape)](https://travis-ci.org/NickGard/tiny-unescape)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal-weight utility equivalent to `lodash.unescape`. For when every byte counts!

<hr/>

lodash.unescape [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.unescape)](https://bundlephobia.com/result?p=lodash.unescape)
<br/>
tiny-unescape [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-unescape)](https://bundlephobia.com/result?p=@ngard/tiny-unescape)

<hr/>

## Syntax

```js
unescape(/* string */)
```

## Parameters

`string` - An string to unescape

## Return

Replaces escaped HTML characters (`&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`) with their unescaped forms (`&`, `<`, `>`, `"`, `'` respectively).

## Example

```javascript
import { unescape } from '@ngard/tiny-unescape';

const value = unescape('&amp;&lt;&gt;&quot;&#39;');
// returns &<>"'
```
