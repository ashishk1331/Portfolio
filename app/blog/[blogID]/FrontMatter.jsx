import { format } from "date-fns";

export default function(props){
	return (
		<section title="front matter" className="my-8">
			<h1 className="text-4xl">
				{ props.pageData.title }
			</h1>
			<p className="text-slate-500">
				written in {format(new Date(props.pageData.created_time), "dd MMM yyyy")}
			</p>
		</section>
	)
}