export interface Product {
	_id: string;
	title: string;
	slug: {
		current: string;
	};
	description: string;
	image: {
		asset: {
			_ref: string;
		};
	};
	price: number;
	tags: string[];
}

export const product = {
	name: "product",
	title: "Product",
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
			name: "description",
			title: "Description",
			type: "text",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
				crop: true,
			},
		},
		{
			name: "price",
			title: "Price",
			type: "number",
		},
		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
			},
		},
	],
};
