'use strict'

module.exports = wordCharacter

// Check if the given character code, or the character code at the first
// character, is a word character.
function wordCharacter(character) {
  return /\w/.test(
    typeof character === 'number'
      ? String.fromCharCode(character)
      : character.charAt(0)
  )
}
