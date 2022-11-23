import assert from 'node:assert/strict'
import test from 'node:test'
import {isWordCharacter} from './index.js'

test('isWordCharacter(character)', function () {
  const _0 = 0x30
  const _9 = 0x39
  const A = 0x41
  const Z = 0x5a
  const _ = 0x5f
  const a = 0x61
  const z = 0x7a

  assert.ok(isWordCharacter('a'))
  assert.ok(isWordCharacter('z'))
  assert.ok(isWordCharacter('A'))
  assert.ok(isWordCharacter('Z'))
  assert.ok(isWordCharacter('0'))
  assert.ok(isWordCharacter('9'))
  assert.ok(isWordCharacter('_'))
  assert.ok(isWordCharacter(a))
  assert.ok(isWordCharacter(_9))
  assert.ok(isWordCharacter(_))
  assert.ok(!isWordCharacter('\t'))
  assert.ok(!isWordCharacter(a - 1))
  assert.ok(!isWordCharacter(z + 1))
  assert.ok(!isWordCharacter(A - 1))
  assert.ok(!isWordCharacter(Z + 1))
  assert.ok(!isWordCharacter(_0 - 1))
  assert.ok(!isWordCharacter(_9 + 1))
  assert.ok(!isWordCharacter(_ - 1))
  assert.ok(!isWordCharacter(_ + 1))
  assert.ok(!isWordCharacter('💩'))
})
