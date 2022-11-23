/**
 * Check if the given code point, or the code point at the first index, is
 * a word character.
 *
 * @param {string|number} value
 *   Code point or string.
 * @returns {boolean}
 *   Whether `value` is a word character.
 */
export function isWordCharacter(value) {
  return /\w/.test(
    typeof value === 'number' ? String.fromCodePoint(value) : value.charAt(0)
  )
}
