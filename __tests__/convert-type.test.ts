import { expect, test } from 'bun:test'

import { convertType } from '../convert-type'

test.each([['string', '"string"']])('convertType', (type, expected) => {
  expect(convertType(type)).toEqual(expected)
})
