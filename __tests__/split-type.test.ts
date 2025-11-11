import { expect, test } from 'bun:test'

import { splitType } from '../split-type'

test.each([
  ['string | number', ['string', 'number']],
  ['string | number | boolean', ['string', 'number', 'boolean']],
  [
    'string | number | boolean | object',
    ['string', 'number', 'boolean', 'object'],
  ],
  [
    'string | number | boolean | object | array',
    ['string', 'number', 'boolean', 'object', 'array'],
  ],
  [
    'string | number | boolean | object | array | function',
    ['string', 'number', 'boolean', 'object', 'array', 'function'],
  ],
  [
    '[ left | right ] || [ top | bottom ]',
    ['[ left | right ] || [ top | bottom ]'],
  ],
  [
    '[ <coord-box> | no-clip | border | padding | content | text ]#',
    ['[ <coord-box> | no-clip | border | padding | content | text ]#'],
  ],
  [
    'normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>',
    [
      'normal',
      '<baseline-position>',
      '<content-distribution>',
      '<overflow-position>? <content-position>',
    ],
  ],
  ['[ auto | <time [0s,∞]> ]#', ['[ auto | <time [0s,∞]> ]#']],
  [
    '[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#',
    [
      '[ center | [ [ left | right | x-start | x-end ]? <length-percentage>? ]! ]#',
    ],
  ],
])('splitType', (type, expected) => {
  expect(splitType(type)).toEqual(expected)
})
