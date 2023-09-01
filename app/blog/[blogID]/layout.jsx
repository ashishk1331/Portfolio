import { Client } from "@notionhq/client";

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

export async function generateMetadata({ params }) {
    let blog = await getPageData(params.blogID);

    let baseURL = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`;

    const imageURL =
        "/api/og" +
        "?title=" +
        encodeURIComponent(blog.title) +
        "&date=" +
        encodeURIComponent(new Date(blog.created_time).toDateString()) +
        "&author=" +
        encodeURIComponent("AshishK");

    return {
        title: blog.title,
        metadataBase: baseURL,
        openGraph: {
            title: blog.title,
            description: blog.summary,
            url: "https://ashishk1331.vercel.app/",
            siteName: "AshishK",
            images: [imageURL],
            locale: "en_US",
            type: "website",
        },
    };
}

export default function ({ children }) {
    return children;
}
