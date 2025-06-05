const assert = require('assert');
const parseSubfields = require('../parseSubfields');

// Test 1: simple parsing
assert.deepStrictEqual(
  parseSubfields('$$afoo$$2bar'),
  [
    { code: 'a', value: 'foo' },
    { code: '2', value: 'bar' }
  ]
);

// Test 2: spaces and trimming
assert.deepStrictEqual(
  parseSubfields('  $$a foo  $$b bar  '),
  [
    { code: 'a', value: 'foo' },
    { code: 'b', value: 'bar' }
  ]
);

// Test 3: invalid subfield (missing value)
assert.deepStrictEqual(parseSubfields('$$a'), []);
