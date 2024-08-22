import { UserIcon } from "@sanity/icons";
import { defineArrayMember } from "sanity";

export const blogs = {
	name: "blog",
	title: "Blog",
	type: "document",

	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author" },
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "Categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			type: "array",
			title: "Body",
			of: [
				defineArrayMember({
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H1", value: "h1" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "Quote", value: "blockquote" },
					],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
							{ title: "Code", value: "code" },
							{ title: "Underline", value: "underline" },
							{ title: "Strike", value: "strike-through" },
							{
								title: "Highlight",
								value: "highlight",
								icon: () => "H",
							},
						],
						annotations: [
							{
								title: "Link",
								name: "link",
								type: "object",
								fields: [
									{
										title: "URL",
										name: "href",
										type: "url",
									},
								],
							},
							{
								name: "internalLink",
								type: "object",
								title: "Internal link",
								icon: UserIcon,
								fields: [
									{
										name: "reference",
										type: "reference",
										to: [{ type: "author" }],
									},
								],
							},
						],
					},
				}),
				defineArrayMember({
					type: "image",
				}),

				defineArrayMember({
					type: "youtube",
				}),
				{
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
				},
			],
		},
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection: { author?: any }) {
			// Use optional chaining for author
			const { author } = selection;
			return { ...selection, subtitle: author && `by ${author}` };
		},
	},
};
