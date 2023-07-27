import { format } from "date-fns";
import Link from "next/link";

export default function (props) {
	return props.blogs.map((data) => <Item key={data.id} {...data} />);
}

function Item(props) {
	return (
		<div className="[&:not(:last-child)]:mb-8">
			<Link href={`/blog/${props.id}`}>
				<h3 className="cursor-pointer">{props.title}</h3>
			</Link>
			<small className="font-bold">{format(new Date(props.created_time), "dd MMM yyyy")}</small>
			<p>{props.summary}</p>
		</div>
	);
}
