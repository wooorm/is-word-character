import test from 'tape'
import {isWordCharacter} from './index.js'

test('isWordCharacter(character)', function (t) {
  t.ok(isWordCharacter('a'))
  t.ok(isWordCharacter('z'))
  t.ok(isWordCharacter('A'))
  t.ok(isWordCharacter('Z'))
  t.ok(isWordCharacter('0'))
  t.ok(isWordCharacter('9'))
  t.ok(isWordCharacter('_'))
  t.ok(isWordCharacter('a'.charCodeAt(0)))
  t.ok(isWordCharacter('9'.charCodeAt(0)))
  t.ok(isWordCharacter('_'.charCodeAt(0)))
  t.notOk(isWordCharacter('\t'))
  t.notOk(isWordCharacter('a'.charCodeAt(0) - 1))
  t.notOk(isWordCharacter('z'.charCodeAt(0) + 1))
  t.notOk(isWordCharacter('A'.charCodeAt(0) - 1))
  t.notOk(isWordCharacter('Z'.charCodeAt(0) + 1))
  t.notOk(isWordCharacter('0'.charCodeAt(0) - 1))
  t.notOk(isWordCharacter('9'.charCodeAt(0) + 1))
  t.notOk(isWordCharacter('_'.charCodeAt(0) - 1))
  t.notOk(isWordCharacter('_'.charCodeAt(0) + 1))
  t.notOk(isWordCharacter('💩'))

  t.end()
})
