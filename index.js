/**
 * Check if the given character code, or the character code at the first
 * character, is a word character.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a word character.
 */
export function isWordCharacter(character) {
  return /\w/.test(
    typeof character === 'number'
      ? String.fromCodePoint(character)
      : character.charAt(0)
  )
}
