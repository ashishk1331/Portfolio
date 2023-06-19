import { Client } from "@notionhq/client";

// Component files
import Header from "./Header";
import Footer from "@/components/Footer";
import Parser from "./useParser";
import FrontMatter from "./FrontMatter";
import slugify from "slugify";

export default async function Page(props) {
	let { blogID } = props.params;
	let pageData = await getPageData(blogID);
	let blocks = await getBlocks(blogID);

	return (
		<>
			<Header slug={slugify(pageData.title, { lower: true })} />
			<FrontMatter pageData={pageData} />
			<Parser blocks={blocks} />
			<Footer />
		</>
	);
}

export async function generateStaticParams() {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	let allBlogIDs = [];

	await notion.databases
		.query({
			database_id: process.env.NOTION_DATABASE,
			sorts: [
				{
					property: "Created",
					direction: "ascending",
				},
			],
		})
		.then(({ results }) => {
			results.forEach((blog) => {
				allBlogIDs.push({
					blogID: blog.id,
				});
			});
		});

	return allBlogIDs;
}

async function getPageData(pageId) {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	let map = {};

	const data = await notion.pages.retrieve({ page_id: pageId });

	map["id"] = data.id;
	map["created_time"] = data.created_time;
	map["title"] = data.properties.Name.title[0].plain_text;
	map["summary"] = data.properties.summary.rich_text[0].plain_text;
	map["tags"] = data.properties.Tags.multi_select.map((tag) => ({
		name: tag.name,
		color: tag.color,
	}));

	return map;
}

async function getBlocks(pageId) {
	const notion = new Client({
		auth: process.env.NOTION_TOKEN,
	});

	let data = await notion.blocks.children.list({
		block_id: pageId,
		page_size: 50,
	});

	return data.results;
}
