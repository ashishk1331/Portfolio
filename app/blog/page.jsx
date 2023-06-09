import { Client } from "@notionhq/client";

// Components
import Header from "./Header";
import Footer from "@/components/Footer";
import List from "./List"

export const revalidate = 86400;

export default async function Blog(props) {
	
	let blogs = await getBlogs()

	return (
		<>
			<Header />
			<List blogs={blogs}/>
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