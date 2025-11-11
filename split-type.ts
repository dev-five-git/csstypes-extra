/**
 * split type
 */
export function splitType(type: string) {
  const result: string[] = []
  let current = ''
  let depth = 0

  for (let i = 0; i < type.length; i++) {
    const char = type[i]
    const nextChar = type[i + 1]
    const prevChar = type[i - 1]

    if (char === '[') {
      depth++
      current += char
    } else if (char === ']') {
      depth--
      current += char
    } else if (char === '|' && depth === 0) {
      if (prevChar === '|' || nextChar === '|') {
        current += char
      } else {
        result.push(current.trim())
        current = ''
      }
    } else {
      current += char
    }
  }

  if (current.trim()) {
    result.push(current.trim())
  }

  return result
}
