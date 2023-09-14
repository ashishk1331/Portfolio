import { Client } from "@notionhq/client";

// Components
import Header from "./Header";
import Footer from "@/components/Footer";
import List from "./List";

export const revalidate = 3600 * 12;

export default async function Blog(props) {
	let blogs = await getBlogs();
	return (
		<>
			<Header />

			<h2>Blog Section</h2>
			<span>I usually don't write. Rather, I love to leave soul-crushing comments on blogs of others.</span>

			<hr />
			
			<List blogs={blogs} />

			<Footer />
		</>
	);
}

async function getBlogs() {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	let pages = [];

	await notion.databases
		.query({
			database_id: process.env.NOTION_DATABASE,
			sorts: [
				{
					property: "Created",
					direction: "descending",
				},
			],
		})
		.then(({ results }) => {
			results.forEach((blog) => {
				let map = {};
				map["id"] = blog.id;
				map["created_time"] = blog.created_time;
				map["title"] = blog.properties.Name.title[0].plain_text;
				map["summary"] =
					blog.properties.summary.rich_text[0].plain_text;
				map["tags"] = blog.properties.Tags.multi_select.map((tag) => ({
					name: tag.name,
					color: tag.color,
				}));
				pages.push(map);
			});
		});

	return pages;
}
