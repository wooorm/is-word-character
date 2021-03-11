# is-word-character

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if a character is a word character (`\w`, which equals `[a-zA-Z0-9_]`).

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install is-word-character
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

This package exports the following identifiers: `isWordCharacter`.
There is no default export.

### `isWordCharacter(character|code)`

Check whether the given character code (`number`), or the character code at the
first position (`string`), is a word character.

## Related

*   [`is-alphabetical`](https://github.com/wooorm/is-alphabetical)
*   [`is-alphanumerical`](https://github.com/wooorm/is-alphanumerical)
*   [`is-decimal`](https://github.com/wooorm/is-decimal)
*   [`is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
*   [`is-whitespace-character`](https://github.com/wooorm/is-whitespace-character)

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

[license]: license

[author]: https://wooorm.com
