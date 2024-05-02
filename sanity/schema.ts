import { type SchemaTypeDefinition } from "sanity";
import { defineConfig } from "sanity";
import { GitBranch } from "lucide-react";
import { product } from "./shemas/product";
import { projects } from "./shemas/projects";
import { blogs } from "./shemas/blogs";
import { authors } from "./shemas/authors";
import { category } from "./shemas/category";
import { youtube } from "./shemas/youtubetype";
import { codeInput } from "@sanity/code-input";
import { CodeSchema } from "./shemas/code";
import { order } from "./shemas/order";

// Combine schema definition directly
// export const schema = {
//   types: [product],
// };
export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		product,
		projects,
		blogs,
		authors,
		category,
		youtube,
		CodeSchema,
		order,
	],
};

export default defineConfig({
	name: "default",
	title: "Uy Scuti CMS",
	basePath: "/catalog",
	projectId: "<projectId>",
	plugins: [codeInput()],
	dataset: "production",
	icon: GitBranch,
	schema,
});
