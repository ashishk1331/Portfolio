"use client";
import { twMerge } from "tailwind-merge";
import { nanoid as generate } from "nanoid";
import Image from "next/image";
import "./theme.css";

export default function (props) {
	return (
		<article className="prose my-4 mx-auto flex flex-col gap-2">
			{props.blocks.map((block) => parse(block))}
		</article>
	);
}

function formatText(richText) {
	let generatedClasses = "";

	if (richText.annotations.strikethrough) {
		generatedClasses += " line-through ";
	}

	if (richText.annotations.underline) {
		generatedClasses += " underline ";
	}

	if (richText.href) {
		return (
			<a href={richText.href} className={generatedClasses}>
				{richText.plain_text}
			</a>
		);
	} else if (richText.annotations.bold) {
		return (
			<strong className={generatedClasses}>{richText.plain_text}</strong>
		);
	} else if (richText.annotations.italic) {
		return <em className={generatedClasses}>{richText.plain_text}</em>;
	} else if (richText.annotations.code) {
		return <code className={generatedClasses}>{richText.plain_text}</code>;
	} else {
		return richText.plain_text;
	}
}

function parse(block) {
	switch (block.type) {
		case "paragraph":
			return (
				<p>
					{block["paragraph"].rich_text.map((richText) =>
						formatText(richText)
					)}
				</p>
			);

		case "image":
			let {
				external: { url },
			} = block[block.type];
			return (
				<figure>
					<Image
						src={block[block.type].external.url}
						width={512}
						height={512}
						className="w-full my-8 2xl:px-20 xl:px-16 lg:px-12"
						alt="image found"
						layout="responsive"
					/>
					<figcaption>
						{block[block.type].caption.map((richText) =>
							formatText(richText)
						)}
					</figcaption>
				</figure>
			);

		case "code":
			return (
				<pre>
					<code>
						{block[block.type].rich_text.map((richText) =>
							formatText(richText)
						)}
					</code>
				</pre>
			);

		case "heading_1":
			return (
				<h1>
					{block[block.type].rich_text.map((richText) =>
						formatText(richText)
					)}
				</h1>
			);

		case "heading_2":
			return (
				<h2>
					{block[block.type].rich_text.map((richText) =>
						formatText(richText)
					)}
				</h2>
			);

		case "heading_3":
			return (
				<h3>
					{block[block.type].rich_text.map((richText) =>
						formatText(richText)
					)}
				</h3>
			);

		case "bulleted_list_item":
			return (
				<li>
					{block[block.type].rich_text.map((richText) =>
						formatText(richText)
					)}
				</li>
			);

		default:
			console.log(block);
			return <p>Block not yet configured.</p>;
	}
}
