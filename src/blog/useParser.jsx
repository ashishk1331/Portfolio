import { twMerge } from "tailwind-merge";
import { nanoid as generate } from "nanoid";

export default function (props) {
	return props.blocks.map((block) => (
		<div key={block.id} className="my-4">
			{parse(block)}
		</div>
	));
}

function parse(block) {
	switch (block.type) {
		case "paragraph":
			return block["paragraph"].rich_text.map((text) => {
				// "bold": false,
				// "italic": true,
				// "strikethrough": false,
				// "underline": false,
				// "code": false,
				let { color, ...format } = text.annotations;
				let content = text[text.type];
				return (
					<p
						key={generate()}
						className={twMerge(
							"inline",
							format.bold && "font-bold",
							format.italic && "italic",
							format.strikethrough && "line-through",
							format.underline && "underline"
						)}
					>
						{text.href ? (
							<a
								href={text.href}
								className="border-b-2 border-fore/50"
								target="_blank"
							>
								{text.plain_text}
							</a>
						) : (
							text.plain_text
						)}
					</p>
				);
			});

		default:
			"Block not yet configured.";
	}
}
