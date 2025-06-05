const assert = require('assert');
const parseSubfields = require('../parseSubfields');

function test(name, fn) {
    try {
        fn();
        console.log(`\u2713 ${name}`);
    } catch (err) {
        console.error(`\u2717 ${name}`);
        console.error(err);
        process.exitCode = 1;
    }
}

test('parses normal input with multiple subfields', () => {
    const input = '$$a foo$$b bar';
    const expected = [
        { code: 'a', value: 'foo' },
        { code: 'b', value: 'bar' }
    ];
    assert.deepStrictEqual(parseSubfields(input), expected);
});

test('handles leading $$', () => {
    const input = '$$a foo';
    const expected = [ { code: 'a', value: 'foo' } ];
    assert.deepStrictEqual(parseSubfields(input), expected);
});

test('ignores empty values', () => {
    const input = '$$a $$b ';
    const expected = [];
    assert.deepStrictEqual(parseSubfields(input), expected);
});
