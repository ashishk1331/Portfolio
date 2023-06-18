import { Client } from "@notionhq/client";
import "dotenv/config";
import { promises as fs } from "fs";

// Initializing a client
const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

async function fetchPageData(PAGE_ID) {
    return await notion.blocks.children
        .list({
            block_id: PAGE_ID,
            page_size: 50,
        })
}

async function getPagesFromDatabase(DATABASE_ID) {
    let pages = [];
    await notion.databases
        .query({
            database_id: DATABASE_ID,
            sorts: [
                {
                    property: "Created",
                    direction: "ascending",
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

    await fs.writeFile(
        "./notion/content/data.json",
        JSON.stringify(
            {
                blogs: pages,
            },
            null,
            4
        )
    );

    pages.forEach(async (page) => {
        let resp = await fetchPageData(page.id);
        await fs.writeFile(
            `./notion/content/${page.id}.json`,
            JSON.stringify(resp.results, null, 4)
        );
    });
}



getPagesFromDatabase(process.env.NOTION_DATABASE);