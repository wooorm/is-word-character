# is-word-character

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if a character is a word character.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`isWordCharacter(character|code)`](#iswordcharactercharactercode)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a function that checks if a given character is a word character:
whether it matches `\w` (which is short for `[a-zA-Z0-9_]`).

## When should I use this?

Not often, as it’s relatively simple to do yourself.
This package exists because it’s needed in several related packages, at which
point it becomes useful to defer to one shared function.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install is-word-character
```

In Deno with [`esm.sh`][esmsh]:

```js
import {isWordCharacter} from 'https://esm.sh/is-word-character@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {isWordCharacter} from 'https://esm.sh/is-word-character@2?bundle'
</script>
```

## Use

```js
import {isWordCharacter} from 'is-word-character'

isWordCharacter('a') // => true
isWordCharacter('Z') // => true
isWordCharacter('0') // => true
isWordCharacter('_') // => true
isWordCharacter(' ') // => false
isWordCharacter('💩') // => false
```

## API

This package exports the following identifier: `isWordCharacter`.
There is no default export.

### `isWordCharacter(character|code)`

Check whether the given character code (`number`), or the character code at the
first position (`string`), is a word character.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/is-alphabetical`](https://github.com/wooorm/is-alphabetical)
*   [`wooorm/is-alphanumerical`](https://github.com/wooorm/is-alphanumerical)
*   [`wooorm/is-decimal`](https://github.com/wooorm/is-decimal)
*   [`wooorm/is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
*   [`wooorm/is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/is-word-character/workflows/main/badge.svg

[build]: https://github.com/wooorm/is-word-character/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/is-word-character.svg

[coverage]: https://codecov.io/github/wooorm/is-word-character

[downloads-badge]: https://img.shields.io/npm/dm/is-word-character.svg

[downloads]: https://www.npmjs.com/package/is-word-character

[size-badge]: https://img.shields.io/bundlephobia/minzip/is-word-character.svg

[size]: https://bundlephobia.com/result?p=is-word-character

[npm]: https://docs.npmjs.com/cli/install

[esmsh]: https://esm.sh

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
