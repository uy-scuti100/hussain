import { defineType, defineField } from "sanity";

export const CodeSchema = defineType({
	name: "code",
	title: "Code",
	type: "document",
	fields: [
		defineField({
			name: "exampleUsage",
			title: "Example usage",
			type: "code",
			options: {
				theme: "solarized_dark",
				language: "js",
				languageAlternatives: [
					{ title: "Javascript", value: "js" },
					{ title: "HTML", value: "html" },
					{ title: "CSS", value: "css" },
					{ title: "Rust", value: "rust", mode: "rust" },
					{ title: "SASS", value: "sass" },
				],
				withFilename: true,
			},
		}),
	],
});
