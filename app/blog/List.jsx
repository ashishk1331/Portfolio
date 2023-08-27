import { format } from "date-fns";
import Link from "next/link";
import Icon from "@/components/icon_set";

export default function (props) {
	return props.blogs.map((data) => <Item key={data.id} {...data} />);
}

function getTagString(tags) {
	let res = "";
	for (let i = 0; i < tags.length; i++) {
		res += tags[i].name;
		if (i < tags.length - 1) {
			res += ", ";
		}
	}
	return res;
}

function Item({ id, title, created_time, summary, tags }) {
	return (
		// [&:not(:last-child)]:mb-8
		<div className="mb-12">
			<Link href={`/blog/${id}`} className="no-underline">
				<h3 className="cursor-pointer">
					<mark>#</mark>
					{title}
				</h3>
			</Link>
			<div className="h-flex gap-2">
				<small>{format(new Date(created_time), "dd MMM yyyy")}</small>
				<Icon name="Circle" className="w-2 h-2" />
				<small>{getTagString(tags)}</small>
			</div>
			<p className="mt-1">{summary}</p>
		</div>
	);
}
