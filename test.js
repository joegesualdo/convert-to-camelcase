import test from 'ava';
import convertToCamelcase from './dist'

test('converts string with dashes', t => {
    t.deepEqual(convertToCamelcase("the-really-cool-app"), 'theReallyCoolApp');
});

test.todo('converts string with spaces')
