import { format } from "date-fns";
import Icon from "@/components/icon_set";

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


export default function({ pageData }){
	return (
		<>
			<h1 className="mt-16">{pageData.title}</h1>	
			<div className="h-flex gap-2">
				<small>{format(new Date(pageData.created_time), "dd MMM yyyy")}</small>
				<Icon name="Circle" className="w-2 h-2" />
				<small>{getTagString(pageData.tags)}</small>
			</div>
			<p className="lead">{pageData.summary}</p>
			<hr />
		</>
	)
}