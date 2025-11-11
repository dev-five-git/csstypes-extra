import { definitionSyntax } from "css-tree";
import { convertType } from "./convert-type";
import { splitType } from "./split-type";
import { toCamelCase } from "./to-camelcase";
import { toPascalCase } from "./to-pascalcase";

console.log(definitionSyntax.parse("<bg-layer>#? , <final-bg-layer>"));

let output = `export as namespace CSS;\n`;

const syntaxes = (await fetch(
	"https://raw.githubusercontent.com/mdn/data/refs/heads/main/css/syntaxes.json",
).then((res) => res.json())) as Record<string, any>;
const properties = (await fetch(
	"https://raw.githubusercontent.com/mdn/data/refs/heads/main/css/properties.json",
).then((res) => res.json())) as Record<string, any>;

function getType(property: string, syntax: string) {
	const sp = splitType(syntax);
	return (
		sp
			.map((type) => convertType(property, type))
			.filter(Boolean)
			.join(" | ") || "string"
	);
}

const standardProperties: string[] = [];
for (const [property, value] of Object.entries(properties)) {
	// skip vendor prefixed properties
	if (
		property.startsWith("--") ||
		property.startsWith("-ms-") ||
		property.startsWith("-webkit-") ||
		property.startsWith("-moz-")
	)
		continue;
	if (value.status !== "standard") continue;
	output += `export type ${toPascalCase(property)} = ${getType(toPascalCase(property), value.syntax)};\n`;
	standardProperties.push(property);
}

output += `export interface StandardProperties {
${standardProperties.map((p) => `  ${toCamelCase(p)}: ${toPascalCase(p)}`).join("\n")}
}`;

Bun.write("src/index.d.ts", output);
