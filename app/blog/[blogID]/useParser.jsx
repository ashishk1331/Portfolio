import { twMerge } from "tailwind-merge";
import { nanoid as generate } from "nanoid";
import Image from "next/image";
import "./theme.css";

export default function (props) {
	let list = {
		type: null,
		blocks: [],
	};
	let article = [];

	for (let i = 0; i < props.blocks.length; i++) {
		let block = props.blocks[i];

		if (
			block.type === "bulleted_list_item" ||
			block.type === "numbered_list_item"
		) {
			if (list.type && list.type !== block.type) {
				article.push(parse(list, props.getBlocks));
				list = {
					type: null,
					blocks: [],
				};
			}
			list.type = block.type;
			list.blocks.push(block);
		} else {
			if (list.type) {
				article.push(parse(list, props.getBlocks));
				list = {
					type: null,
					blocks: [],
				};
			}
			article.push(parse(block, props.getBlocks));
		}
	}

	if (list.type) {
		article.push(parse(list, props.getBlocks));
		list = {
			type: null,
			blocks: [],
		};
	}

	return (
		<article className="prose my-4 mx-auto flex flex-col gap-2 max-w-none">
			{article}
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

function formatTable(blocks) {
	let head = blocks[0],
		body = blocks.slice(1);
	return (
		<table>
			<thead>
				<tr>
					{head[head.type].cells.map((row) => (
						<th>{row.map((cell) => formatText(cell))}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{body.map((block) => {
					return (
						<tr>
							{block[block.type].cells.map((row) => (
								<td>{row.map((cell) => formatText(cell))}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

async function parse(block, getBlocks) {
	switch (block.type) {
		case "paragraph":
			return (
				<p>
					{block[block.type].rich_text.map((richText) =>
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
						className="w-auto h-auto mx-auto my-8 2xl:px-20 xl:px-16 lg:px-12"
						alt="image found"
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

		case "numbered_list_item":
			return (
				<ol>
					{block.blocks.map((item) => (
						<li>
							{item["numbered_list_item"].rich_text.map(
								(richText) => formatText(richText)
							)}
						</li>
					))}
				</ol>
			);

		case "bulleted_list_item":
			return (
				<ul>
					{block.blocks.map((item) => (
						<li>
							{item["bulleted_list_item"].rich_text.map(
								(richText) => formatText(richText)
							)}
						</li>
					))}
				</ul>
			);

		case "table":
			let resp = await getBlocks(block.id);
			return formatTable(resp);

		case "quote":
			return (
				<blockquote>
					<p>
						{block[block.type].rich_text.map((richText) =>
							formatText(richText)
						)}
					</p>
				</blockquote>
			);

		case "divider":
			return <hr />;

		case "to_do":
			return (
				<span className="h-flex">
					<input
						checked={block[block.type].checked}
						readOnly
						type="checkbox"
						className="form-checkbox rounded text-fore"
					/>
					<p>
						{block[block.type].rich_text.map((richText) =>
							formatText(richText)
						)}
					</p>
				</span>
			);

		case "callout":
			return (
				<span className="p-4 border border-fore/50 rounded my-8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="fill-fore inline m-4 float-left"
						viewBox="0 0 256 256"
					>
						<path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.93,166,26.5,143a16,16,0,0,1,0-30L90,89.93,113,26.5a16,16,0,0,1,30,0L166.07,90,229.5,113A15.79,15.79,0,0,1,240,128Z"></path>
					</svg>
					<p>
						{block[block.type].rich_text.map((richText) =>
							formatText(richText)
						)}
					</p>
				</span>
			);

		default:
			console.log(block);
			return <p>Block not yet configured.</p>;
	}
}
