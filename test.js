import test from 'tape'
import {isWordCharacter} from './index.js'

test('isWordCharacter(character)', function (t) {
  const _0 = 0x30
  const _9 = 0x39
  const A = 0x41
  const Z = 0x5a
  const _ = 0x5f
  const a = 0x61
  const z = 0x7a

  t.ok(isWordCharacter('a'))
  t.ok(isWordCharacter('z'))
  t.ok(isWordCharacter('A'))
  t.ok(isWordCharacter('Z'))
  t.ok(isWordCharacter('0'))
  t.ok(isWordCharacter('9'))
  t.ok(isWordCharacter('_'))
  t.ok(isWordCharacter(a))
  t.ok(isWordCharacter(_9))
  t.ok(isWordCharacter(_))
  t.notOk(isWordCharacter('\t'))
  t.notOk(isWordCharacter(a - 1))
  t.notOk(isWordCharacter(z + 1))
  t.notOk(isWordCharacter(A - 1))
  t.notOk(isWordCharacter(Z + 1))
  t.notOk(isWordCharacter(_0 - 1))
  t.notOk(isWordCharacter(_9 + 1))
  t.notOk(isWordCharacter(_ - 1))
  t.notOk(isWordCharacter(_ + 1))
  t.notOk(isWordCharacter('💩'))

  t.end()
})
