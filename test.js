/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-word-character
 * @fileoverview Test suite for `is-word-character`.
 */

'use strict';

/* eslint-env node */

/* Dependencies. */
var test = require('tape');
var wordCharacter = require('./');

/* Tests. */
test('wordCharacter(character)', function (t) {
  t.ok(wordCharacter('a'));
  t.ok(wordCharacter('z'));
  t.ok(wordCharacter('A'));
  t.ok(wordCharacter('Z'));
  t.ok(wordCharacter('0'));
  t.ok(wordCharacter('9'));
  t.ok(wordCharacter('_'));
  t.ok(wordCharacter('a'.charCodeAt(0)));
  t.ok(wordCharacter('9'.charCodeAt(0)));
  t.ok(wordCharacter('_'.charCodeAt(0)));
  t.notOk(wordCharacter('\t'));
  t.notOk(wordCharacter('a'.charCodeAt(0) - 1));
  t.notOk(wordCharacter('z'.charCodeAt(0) + 1));
  t.notOk(wordCharacter('A'.charCodeAt(0) - 1));
  t.notOk(wordCharacter('Z'.charCodeAt(0) + 1));
  t.notOk(wordCharacter('0'.charCodeAt(0) - 1));
  t.notOk(wordCharacter('9'.charCodeAt(0) + 1));
  t.notOk(wordCharacter('_'.charCodeAt(0) - 1));
  t.notOk(wordCharacter('_'.charCodeAt(0) + 1));
  t.notOk(wordCharacter('💩'));

  t.end();
});
