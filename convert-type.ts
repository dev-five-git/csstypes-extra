import type { DSNode } from 'css-tree'
import { definitionSyntax } from 'css-tree'
import { toPascalCase } from './to-pascalcase'

/**
 * convert type
 */
export function convertType(
  type: string,
  syntaxs: Record<string, { syntax: string; primitive?: boolean }>,
): string {
  const ast = definitionSyntax.parse(type)
  return convertNode(ast, syntaxs) || '(string & {})'
}

function convertNode(
  node: DSNode,
  syntaxs: Record<string, { syntax: string; primitive?: boolean }>,
): string {
  switch (node.type) {
    case 'Keyword':
      return `"${node.name}"`
    case 'String':
      return `"${node.value}"`
    case 'Type': {
      const typeName = node.name
      if (typeName.startsWith("'") && typeName.endsWith("'")) {
        const propName = typeName.slice(1, -1)
        return toPascalCase(propName)
      }
      if (typeName.endsWith('()')) return ''
      if (syntaxs[typeName]) {
        if (syntaxs[typeName].primitive) return syntaxs[typeName].syntax
        return `T${toPascalCase(typeName)}`
      }
      if (typeName.endsWith('-ident')) return '(string & {})'
      return ''
    }
    case 'Multiplier': {
      return convertNode(node.term, syntaxs)
    }
    case 'Group': {
      return removeDuplicates(
        node.terms.map((term) => convertNode(term, syntaxs)).filter(Boolean),
      ).join(' | ')
    }
    case 'Function':
      return ''
    case 'Comma':
      return ''
    case 'Property':
      return toPascalCase(node.name)
    case 'Token':
      return ''
    case 'AtKeyword':
      return `@${node.name}`
    default:
      return ''
  }
}

// remove duplicates from array
function removeDuplicates<T>(array: T[]): T[] {
  return array.filter((value, index, self) => self.indexOf(value) === index)
}
