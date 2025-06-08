import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: [
			remarkFrontmatter, // Parses frontmatter
			[remarkMdxFrontmatter, { name: "metadata" }], // Exports it as `export const metadata = {...}`
		],
	},
});

export default withMDX(nextConfig);
