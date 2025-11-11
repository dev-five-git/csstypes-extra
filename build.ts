import { convertType } from './convert-type'
import { toCamelCase } from './to-camelcase'
import { toPascalCase } from './to-pascalcase'

let output = `/** biome-ignore-all lint/complexity/noBannedTypes: <this is a generated file> */\nexport as namespace CSS;\nexport interface CustomColors{}\n`

const syntaxes = (await fetch(
  'https://raw.githubusercontent.com/mdn/data/refs/heads/main/css/syntaxes.json',
).then((res) => res.json())) as Record<
  string,
  {
    syntax: string
    primitive?: boolean
  }
>

const properties = (await fetch(
  'https://raw.githubusercontent.com/mdn/data/refs/heads/main/css/properties.json',
).then((res) => res.json())) as Record<
  string,
  {
    syntax: string
    status: string
  }
>

const customSyntaxes = {
  string: {
    syntax: '(string & {})',
    primitive: true,
  },
  number: {
    syntax: 'number',
    primitive: true,
  },
  percentage: {
    syntax: 'number',
    primitive: true,
  },
  integer: {
    syntax: 'number',
    primitive: true,
  },
}

Object.assign(syntaxes, customSyntaxes)

const standardProperties: string[] = []
const vendorProperties: [string, { syntax: string; status: string }][] = []
for (const [property, value] of Object.entries(properties)) {
  // skip vendor prefixed properties
  if (property.startsWith('--')) continue
  if (
    property.startsWith('-ms-') ||
    property.startsWith('-webkit-') ||
    property.startsWith('-moz-')
  ) {
    vendorProperties.push([property, value])
    continue
  }
  if (value.status !== 'standard') continue
  output += `export type ${toPascalCase(property)} = ${convertType(value.syntax, syntaxes)};\n`
  standardProperties.push(property)
}

output += `export interface StandardProperties {
${standardProperties.map((p) => `  ${toCamelCase(p)}: ${toPascalCase(p)}`).join('\n')}
}\n`

for (const [property, value] of vendorProperties) {
  output += `export type ${toPascalCase(property)} = ${convertType(value.syntax, syntaxes)};\n`
}

output += `export interface VendorProperties {
${vendorProperties.map(([p, _]) => `  ${toCamelCase(p)}: ${toPascalCase(p)}`).join('\n')}
}\n`

for (const [property, value] of Object.entries(syntaxes)) {
  if (
    property.endsWith(')') ||
    property.includes('+') ||
    value.syntax.includes('@')
  )
    continue
  if (property in customSyntaxes) {
    continue
  }
  output += `export type T${toPascalCase(property)} = ${convertType(value.syntax.replace('<image |', '<image> |'), syntaxes)}${property === 'color' ? ' | keyof CustomColors' : ''};\n`
}

Bun.write('src/index.d.ts', output)

// declare module "./src" {
// 	interface CustomColors {
// 		$example: unknown
// 	}
// }
